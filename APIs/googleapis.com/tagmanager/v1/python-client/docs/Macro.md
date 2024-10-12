# Macro

Represents a Google Tag Manager Macro.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | GTM Account ID. | [optional] 
**container_id** | **str** | GTM Container ID. | [optional] 
**disabling_rule_id** | **List[str]** | For mobile containers only: A list of rule IDs for disabling conditional macros; the macro is enabled if one of the enabling rules is true while all the disabling rules are false. Treated as an unordered set. @mutable tagmanager.accounts.containers.macros.create @mutable tagmanager.accounts.containers.macros.update | [optional] 
**enabling_rule_id** | **List[str]** | For mobile containers only: A list of rule IDs for enabling conditional macros; the macro is enabled if one of the enabling rules is true while all the disabling rules are false. Treated as an unordered set. @mutable tagmanager.accounts.containers.macros.create @mutable tagmanager.accounts.containers.macros.update | [optional] 
**fingerprint** | **str** | The fingerprint of the GTM Macro as computed at storage time. This value is recomputed whenever the macro is modified. | [optional] 
**macro_id** | **str** | The Macro ID uniquely identifies the GTM Macro. | [optional] 
**name** | **str** | Macro display name. @mutable tagmanager.accounts.containers.macros.create @mutable tagmanager.accounts.containers.macros.update | [optional] 
**notes** | **str** | User notes on how to apply this macro in the container. @mutable tagmanager.accounts.containers.macros.create @mutable tagmanager.accounts.containers.macros.update | [optional] 
**parameter** | [**List[Parameter]**](Parameter.md) | The macro&#39;s parameters. @mutable tagmanager.accounts.containers.macros.create @mutable tagmanager.accounts.containers.macros.update | [optional] 
**parent_folder_id** | **str** | Parent folder id. | [optional] 
**schedule_end_ms** | **str** | The end timestamp in milliseconds to schedule a macro. @mutable tagmanager.accounts.containers.macros.create @mutable tagmanager.accounts.containers.macros.update | [optional] 
**schedule_start_ms** | **str** | The start timestamp in milliseconds to schedule a macro. @mutable tagmanager.accounts.containers.macros.create @mutable tagmanager.accounts.containers.macros.update | [optional] 
**type** | **str** | GTM Macro Type. @mutable tagmanager.accounts.containers.macros.create @mutable tagmanager.accounts.containers.macros.update | [optional] 

## Example

```python
from openapi_client.models.macro import Macro

# TODO update the JSON string below
json = "{}"
# create an instance of Macro from a JSON string
macro_instance = Macro.from_json(json)
# print the JSON string representation of the object
print(Macro.to_json())

# convert the object into a dict
macro_dict = macro_instance.to_dict()
# create an instance of Macro from a dict
macro_from_dict = Macro.from_dict(macro_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


