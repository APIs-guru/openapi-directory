# Variable

Represents a Google Tag Manager Variable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | GTM Account ID. | [optional] 
**container_id** | **str** | GTM Container ID. | [optional] 
**disabling_trigger_id** | **List[str]** | For mobile containers only: A list of trigger IDs for disabling conditional variables; the variable is enabled if one of the enabling trigger is true while all the disabling trigger are false. Treated as an unordered set. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update | [optional] 
**enabling_trigger_id** | **List[str]** | For mobile containers only: A list of trigger IDs for enabling conditional variables; the variable is enabled if one of the enabling triggers is true while all the disabling triggers are false. Treated as an unordered set. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update | [optional] 
**fingerprint** | **str** | The fingerprint of the GTM Variable as computed at storage time. This value is recomputed whenever the variable is modified. | [optional] 
**format_value** | [**VariableFormatValue**](VariableFormatValue.md) |  | [optional] 
**name** | **str** | Variable display name. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update | [optional] 
**notes** | **str** | User notes on how to apply this variable in the container. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update | [optional] 
**parameter** | [**List[Parameter]**](Parameter.md) | The variable&#39;s parameters. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update | [optional] 
**parent_folder_id** | **str** | Parent folder id. | [optional] 
**path** | **str** | GTM Variable&#39;s API relative path. | [optional] 
**schedule_end_ms** | **str** | The end timestamp in milliseconds to schedule a variable. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update | [optional] 
**schedule_start_ms** | **str** | The start timestamp in milliseconds to schedule a variable. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update | [optional] 
**tag_manager_url** | **str** | Auto generated link to the tag manager UI | [optional] 
**type** | **str** | GTM Variable Type. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update | [optional] 
**variable_id** | **str** | The Variable ID uniquely identifies the GTM Variable. | [optional] 
**workspace_id** | **str** | GTM Workspace ID. | [optional] 

## Example

```python
from openapi_client.models.variable import Variable

# TODO update the JSON string below
json = "{}"
# create an instance of Variable from a JSON string
variable_instance = Variable.from_json(json)
# print the JSON string representation of the object
print(Variable.to_json())

# convert the object into a dict
variable_dict = variable_instance.to_dict()
# create an instance of Variable from a dict
variable_from_dict = Variable.from_dict(variable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


