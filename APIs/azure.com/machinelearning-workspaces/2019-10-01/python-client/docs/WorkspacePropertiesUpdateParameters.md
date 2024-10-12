# WorkspacePropertiesUpdateParameters

The parameters for updating the properties of a machine learning workspace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_vault_identifier_id** | **str** | The key vault identifier used for encrypted workspaces. | [optional] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**workspace_state** | **str** | The current state of workspace resource. | [optional] 

## Example

```python
from openapi_client.models.workspace_properties_update_parameters import WorkspacePropertiesUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of WorkspacePropertiesUpdateParameters from a JSON string
workspace_properties_update_parameters_instance = WorkspacePropertiesUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(WorkspacePropertiesUpdateParameters.to_json())

# convert the object into a dict
workspace_properties_update_parameters_dict = workspace_properties_update_parameters_instance.to_dict()
# create an instance of WorkspacePropertiesUpdateParameters from a dict
workspace_properties_update_parameters_from_dict = WorkspacePropertiesUpdateParameters.from_dict(workspace_properties_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


