# Workspace

An object that represents a machine learning workspace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**WorkspaceProperties**](WorkspaceProperties.md) |  | [optional] 
**id** | **str** | Specifies the resource ID. | [optional] [readonly] 
**identity** | [**Identity**](Identity.md) |  | [optional] 
**location** | **str** | Specifies the location of the resource. | [optional] 
**name** | **str** | Specifies the name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Contains resource tags defined as key/value pairs. | [optional] 
**type** | **str** | Specifies the type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.workspace import Workspace

# TODO update the JSON string below
json = "{}"
# create an instance of Workspace from a JSON string
workspace_instance = Workspace.from_json(json)
# print the JSON string representation of the object
print(Workspace.to_json())

# convert the object into a dict
workspace_dict = workspace_instance.to_dict()
# create an instance of Workspace from a dict
workspace_from_dict = Workspace.from_dict(workspace_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


