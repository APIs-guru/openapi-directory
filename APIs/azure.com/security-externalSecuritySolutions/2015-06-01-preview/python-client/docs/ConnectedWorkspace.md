# ConnectedWorkspace


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Azure resource ID of the connected OMS workspace | [optional] 

## Example

```python
from openapi_client.models.connected_workspace import ConnectedWorkspace

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectedWorkspace from a JSON string
connected_workspace_instance = ConnectedWorkspace.from_json(json)
# print the JSON string representation of the object
print(ConnectedWorkspace.to_json())

# convert the object into a dict
connected_workspace_dict = connected_workspace_instance.to_dict()
# create an instance of ConnectedWorkspace from a dict
connected_workspace_from_dict = ConnectedWorkspace.from_dict(connected_workspace_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


