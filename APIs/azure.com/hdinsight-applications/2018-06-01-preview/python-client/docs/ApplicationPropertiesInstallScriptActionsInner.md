# ApplicationPropertiesInstallScriptActionsInner

Describes a script action on a running cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_name** | **str** | The application name of the script action, if any. | [optional] [readonly] 
**name** | **str** | The name of the script action. | 
**parameters** | **str** | The parameters for the script | [optional] 
**roles** | **List[str]** | The list of roles where script will be executed. | 
**uri** | **str** | The URI to the script. | 

## Example

```python
from openapi_client.models.application_properties_install_script_actions_inner import ApplicationPropertiesInstallScriptActionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationPropertiesInstallScriptActionsInner from a JSON string
application_properties_install_script_actions_inner_instance = ApplicationPropertiesInstallScriptActionsInner.from_json(json)
# print the JSON string representation of the object
print(ApplicationPropertiesInstallScriptActionsInner.to_json())

# convert the object into a dict
application_properties_install_script_actions_inner_dict = application_properties_install_script_actions_inner_instance.to_dict()
# create an instance of ApplicationPropertiesInstallScriptActionsInner from a dict
application_properties_install_script_actions_inner_from_dict = ApplicationPropertiesInstallScriptActionsInner.from_dict(application_properties_install_script_actions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


