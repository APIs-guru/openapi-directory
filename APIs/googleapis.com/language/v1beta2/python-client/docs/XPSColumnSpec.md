# XPSColumnSpec


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_id** | **int** | The unique id of the column. When Preprocess, the Tables BE will popuate the order id of the column, which reflects the order of the column inside the table, i.e. 0 means the first column in the table, N-1 means the last column. AutoML BE will persist this order id in Spanner and set the order id here when calling RefreshTablesStats and Train. Note: it&#39;s different than the column_spec_id that is generated in AutoML BE. | [optional] 
**data_stats** | [**XPSDataStats**](XPSDataStats.md) |  | [optional] 
**data_type** | [**XPSDataType**](XPSDataType.md) |  | [optional] 
**display_name** | **str** | The display name of the column. It&#39;s outputed in Preprocess and a required input for RefreshTablesStats and Train. | [optional] 
**forecasting_metadata** | [**XPSColumnSpecForecastingMetadata**](XPSColumnSpecForecastingMetadata.md) |  | [optional] 
**top_correlated_columns** | [**List[XPSColumnSpecCorrelatedColumn]**](XPSColumnSpecCorrelatedColumn.md) | It&#39;s outputed in RefreshTablesStats, and a required input in Train. | [optional] 

## Example

```python
from openapi_client.models.xps_column_spec import XPSColumnSpec

# TODO update the JSON string below
json = "{}"
# create an instance of XPSColumnSpec from a JSON string
xps_column_spec_instance = XPSColumnSpec.from_json(json)
# print the JSON string representation of the object
print(XPSColumnSpec.to_json())

# convert the object into a dict
xps_column_spec_dict = xps_column_spec_instance.to_dict()
# create an instance of XPSColumnSpec from a dict
xps_column_spec_from_dict = XPSColumnSpec.from_dict(xps_column_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


