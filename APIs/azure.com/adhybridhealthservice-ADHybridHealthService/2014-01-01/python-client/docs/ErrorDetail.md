# ErrorDetail

The error details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The error description. | [optional] 
**detail** | **str** | Additional details related to the error. | [optional] 
**kb_url** | **str** | The knowledge base article url which contains more information about the error. | [optional] 
**object_with_sync_error** | [**MergedExportError**](MergedExportError.md) |  | [optional] 
**objects_with_sync_error** | [**ObjectWithSyncError**](ObjectWithSyncError.md) |  | [optional] 

## Example

```python
from openapi_client.models.error_detail import ErrorDetail

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorDetail from a JSON string
error_detail_instance = ErrorDetail.from_json(json)
# print the JSON string representation of the object
print(ErrorDetail.to_json())

# convert the object into a dict
error_detail_dict = error_detail_instance.to_dict()
# create an instance of ErrorDetail from a dict
error_detail_from_dict = ErrorDetail.from_dict(error_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


