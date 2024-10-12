# DataSource

Information about an external data source in the spreadsheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calculated_columns** | [**List[DataSourceColumn]**](DataSourceColumn.md) | All calculated columns in the data source. | [optional] 
**data_source_id** | **str** | The spreadsheet-scoped unique ID that identifies the data source. Example: 1080547365. | [optional] 
**sheet_id** | **int** | The ID of the Sheet connected with the data source. The field cannot be changed once set. When creating a data source, an associated DATA_SOURCE sheet is also created, if the field is not specified, the ID of the created sheet will be randomly generated. | [optional] 
**spec** | [**DataSourceSpec**](DataSourceSpec.md) |  | [optional] 

## Example

```python
from openapi_client.models.data_source import DataSource

# TODO update the JSON string below
json = "{}"
# create an instance of DataSource from a JSON string
data_source_instance = DataSource.from_json(json)
# print the JSON string representation of the object
print(DataSource.to_json())

# convert the object into a dict
data_source_dict = data_source_instance.to_dict()
# create an instance of DataSource from a dict
data_source_from_dict = DataSource.from_dict(data_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


