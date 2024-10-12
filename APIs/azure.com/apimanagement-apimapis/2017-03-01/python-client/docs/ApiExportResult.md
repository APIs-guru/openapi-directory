# ApiExportResult

API Export result Blob Uri.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**link** | **str** | Link to the Storage Blob containing the result of the export operation. The Blob Uri is only valid for 5 minutes. | [optional] 

## Example

```python
from openapi_client.models.api_export_result import ApiExportResult

# TODO update the JSON string below
json = "{}"
# create an instance of ApiExportResult from a JSON string
api_export_result_instance = ApiExportResult.from_json(json)
# print the JSON string representation of the object
print(ApiExportResult.to_json())

# convert the object into a dict
api_export_result_dict = api_export_result_instance.to_dict()
# create an instance of ApiExportResult from a dict
api_export_result_from_dict = ApiExportResult.from_dict(api_export_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


