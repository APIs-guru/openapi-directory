# DataSourceSheetProperties

Additional properties of a DATA_SOURCE sheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | [**List[DataSourceColumn]**](DataSourceColumn.md) | The columns displayed on the sheet, corresponding to the values in RowData. | [optional] 
**data_execution_status** | [**DataExecutionStatus**](DataExecutionStatus.md) |  | [optional] 
**data_source_id** | **str** | ID of the DataSource the sheet is connected to. | [optional] 

## Example

```python
from openapi_client.models.data_source_sheet_properties import DataSourceSheetProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DataSourceSheetProperties from a JSON string
data_source_sheet_properties_instance = DataSourceSheetProperties.from_json(json)
# print the JSON string representation of the object
print(DataSourceSheetProperties.to_json())

# convert the object into a dict
data_source_sheet_properties_dict = data_source_sheet_properties_instance.to_dict()
# create an instance of DataSourceSheetProperties from a dict
data_source_sheet_properties_from_dict = DataSourceSheetProperties.from_dict(data_source_sheet_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


