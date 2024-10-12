# WorkspaceProperties

The workspace properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorizations** | [**List[WorkspaceProviderAuthorization]**](WorkspaceProviderAuthorization.md) | The workspace provider authorizations. | [optional] 
**managed_resource_group_id** | **str** | The managed resource group Id. | 
**parameters** | [**WorkspaceCustomParameters**](WorkspaceCustomParameters.md) |  | [optional] 
**provisioning_state** | [**ProvisioningState**](ProvisioningState.md) |  | [optional] 
**ui_definition_uri** | **str** | The blob URI where the UI definition file is located. | [optional] 

## Example

```python
from openapi_client.models.workspace_properties import WorkspaceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of WorkspaceProperties from a JSON string
workspace_properties_instance = WorkspaceProperties.from_json(json)
# print the JSON string representation of the object
print(WorkspaceProperties.to_json())

# convert the object into a dict
workspace_properties_dict = workspace_properties_instance.to_dict()
# create an instance of WorkspaceProperties from a dict
workspace_properties_from_dict = WorkspaceProperties.from_dict(workspace_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


