# DataExportListResult

Result of the request to list data exports.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[DataExport]**](DataExport.md) | List of data export instances within a workspace.. | [optional] 

## Example

```python
from openapi_client.models.data_export_list_result import DataExportListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DataExportListResult from a JSON string
data_export_list_result_instance = DataExportListResult.from_json(json)
# print the JSON string representation of the object
print(DataExportListResult.to_json())

# convert the object into a dict
data_export_list_result_dict = data_export_list_result_instance.to_dict()
# create an instance of DataExportListResult from a dict
data_export_list_result_from_dict = DataExportListResult.from_dict(data_export_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


