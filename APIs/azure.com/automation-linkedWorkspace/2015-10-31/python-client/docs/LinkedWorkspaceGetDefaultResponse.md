# LinkedWorkspaceGetDefaultResponse

Error response of an operation failure

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code | [optional] 
**message** | **str** | Error message indicating why the operation failed. | [optional] 

## Example

```python
from openapi_client.models.linked_workspace_get_default_response import LinkedWorkspaceGetDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LinkedWorkspaceGetDefaultResponse from a JSON string
linked_workspace_get_default_response_instance = LinkedWorkspaceGetDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(LinkedWorkspaceGetDefaultResponse.to_json())

# convert the object into a dict
linked_workspace_get_default_response_dict = linked_workspace_get_default_response_instance.to_dict()
# create an instance of LinkedWorkspaceGetDefaultResponse from a dict
linked_workspace_get_default_response_from_dict = LinkedWorkspaceGetDefaultResponse.from_dict(linked_workspace_get_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


