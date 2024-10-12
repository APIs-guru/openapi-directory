# TimeSeriesTable

A table that displays time series data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_settings** | [**List[ColumnSettings]**](ColumnSettings.md) | Optional. The list of the persistent column settings for the table. | [optional] 
**data_sets** | [**List[TableDataSet]**](TableDataSet.md) | Required. The data displayed in this table. | [optional] 
**metric_visualization** | **str** | Optional. Store rendering strategy | [optional] 

## Example

```python
from openapi_client.models.time_series_table import TimeSeriesTable

# TODO update the JSON string below
json = "{}"
# create an instance of TimeSeriesTable from a JSON string
time_series_table_instance = TimeSeriesTable.from_json(json)
# print the JSON string representation of the object
print(TimeSeriesTable.to_json())

# convert the object into a dict
time_series_table_dict = time_series_table_instance.to_dict()
# create an instance of TimeSeriesTable from a dict
time_series_table_from_dict = TimeSeriesTable.from_dict(time_series_table_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


