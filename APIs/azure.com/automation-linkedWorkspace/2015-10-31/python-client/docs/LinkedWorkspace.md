# LinkedWorkspace

Definition of the linked workspace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Gets the id of the linked workspace. | [optional] [readonly] 

## Example

```python
from openapi_client.models.linked_workspace import LinkedWorkspace

# TODO update the JSON string below
json = "{}"
# create an instance of LinkedWorkspace from a JSON string
linked_workspace_instance = LinkedWorkspace.from_json(json)
# print the JSON string representation of the object
print(LinkedWorkspace.to_json())

# convert the object into a dict
linked_workspace_dict = linked_workspace_instance.to_dict()
# create an instance of LinkedWorkspace from a dict
linked_workspace_from_dict = LinkedWorkspace.from_dict(linked_workspace_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


