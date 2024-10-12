# ApplicationPropertiesComputeProfileRolesInnerScriptActionsInner

Describes a script action on role on the cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the script action. | 
**parameters** | **str** | The parameters for the script provided. | 
**uri** | **str** | The URI to the script. | 

## Example

```python
from openapi_client.models.application_properties_compute_profile_roles_inner_script_actions_inner import ApplicationPropertiesComputeProfileRolesInnerScriptActionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationPropertiesComputeProfileRolesInnerScriptActionsInner from a JSON string
application_properties_compute_profile_roles_inner_script_actions_inner_instance = ApplicationPropertiesComputeProfileRolesInnerScriptActionsInner.from_json(json)
# print the JSON string representation of the object
print(ApplicationPropertiesComputeProfileRolesInnerScriptActionsInner.to_json())

# convert the object into a dict
application_properties_compute_profile_roles_inner_script_actions_inner_dict = application_properties_compute_profile_roles_inner_script_actions_inner_instance.to_dict()
# create an instance of ApplicationPropertiesComputeProfileRolesInnerScriptActionsInner from a dict
application_properties_compute_profile_roles_inner_script_actions_inner_from_dict = ApplicationPropertiesComputeProfileRolesInnerScriptActionsInner.from_dict(application_properties_compute_profile_roles_inner_script_actions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


