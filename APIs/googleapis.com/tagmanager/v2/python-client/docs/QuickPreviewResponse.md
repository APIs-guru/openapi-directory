# QuickPreviewResponse

Response to quick previewing a workspace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compiler_error** | **bool** | Were there compiler errors or not. | [optional] 
**container_version** | [**ContainerVersion**](ContainerVersion.md) |  | [optional] 
**sync_status** | [**SyncStatus**](SyncStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.quick_preview_response import QuickPreviewResponse

# TODO update the JSON string below
json = "{}"
# create an instance of QuickPreviewResponse from a JSON string
quick_preview_response_instance = QuickPreviewResponse.from_json(json)
# print the JSON string representation of the object
print(QuickPreviewResponse.to_json())

# convert the object into a dict
quick_preview_response_dict = quick_preview_response_instance.to_dict()
# create an instance of QuickPreviewResponse from a dict
quick_preview_response_from_dict = QuickPreviewResponse.from_dict(quick_preview_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


