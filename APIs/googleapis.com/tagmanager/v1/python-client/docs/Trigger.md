# Trigger

Represents a Google Tag Manager Trigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | GTM Account ID. | [optional] 
**auto_event_filter** | [**List[Condition]**](Condition.md) | Used in the case of auto event tracking. @mutable tagmanager.accounts.containers.triggers.create @mutable tagmanager.accounts.containers.triggers.update | [optional] 
**check_validation** | [**Parameter**](Parameter.md) |  | [optional] 
**container_id** | **str** | GTM Container ID. | [optional] 
**continuous_time_min_milliseconds** | [**Parameter**](Parameter.md) |  | [optional] 
**custom_event_filter** | [**List[Condition]**](Condition.md) | Used in the case of custom event, which is fired iff all Conditions are true. @mutable tagmanager.accounts.containers.triggers.create @mutable tagmanager.accounts.containers.triggers.update | [optional] 
**event_name** | [**Parameter**](Parameter.md) |  | [optional] 
**filter** | [**List[Condition]**](Condition.md) | The trigger will only fire iff all Conditions are true. @mutable tagmanager.accounts.containers.triggers.create @mutable tagmanager.accounts.containers.triggers.update | [optional] 
**fingerprint** | **str** | The fingerprint of the GTM Trigger as computed at storage time. This value is recomputed whenever the trigger is modified. | [optional] 
**horizontal_scroll_percentage_list** | [**Parameter**](Parameter.md) |  | [optional] 
**interval** | [**Parameter**](Parameter.md) |  | [optional] 
**interval_seconds** | [**Parameter**](Parameter.md) |  | [optional] 
**limit** | [**Parameter**](Parameter.md) |  | [optional] 
**max_timer_length_seconds** | [**Parameter**](Parameter.md) |  | [optional] 
**name** | **str** | Trigger display name. @mutable tagmanager.accounts.containers.triggers.create @mutable tagmanager.accounts.containers.triggers.update | [optional] 
**parameter** | [**List[Parameter]**](Parameter.md) | Additional parameters. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update | [optional] 
**parent_folder_id** | **str** | Parent folder id. | [optional] 
**selector** | [**Parameter**](Parameter.md) |  | [optional] 
**total_time_min_milliseconds** | [**Parameter**](Parameter.md) |  | [optional] 
**trigger_id** | **str** | The Trigger ID uniquely identifies the GTM Trigger. | [optional] 
**type** | **str** | Defines the data layer event that causes this trigger. @mutable tagmanager.accounts.containers.triggers.create @mutable tagmanager.accounts.containers.triggers.update | [optional] 
**unique_trigger_id** | [**Parameter**](Parameter.md) |  | [optional] 
**vertical_scroll_percentage_list** | [**Parameter**](Parameter.md) |  | [optional] 
**visibility_selector** | [**Parameter**](Parameter.md) |  | [optional] 
**visible_percentage_max** | [**Parameter**](Parameter.md) |  | [optional] 
**visible_percentage_min** | [**Parameter**](Parameter.md) |  | [optional] 
**wait_for_tags** | [**Parameter**](Parameter.md) |  | [optional] 
**wait_for_tags_timeout** | [**Parameter**](Parameter.md) |  | [optional] 

## Example

```python
from openapi_client.models.trigger import Trigger

# TODO update the JSON string below
json = "{}"
# create an instance of Trigger from a JSON string
trigger_instance = Trigger.from_json(json)
# print the JSON string representation of the object
print(Trigger.to_json())

# convert the object into a dict
trigger_dict = trigger_instance.to_dict()
# create an instance of Trigger from a dict
trigger_from_dict = Trigger.from_dict(trigger_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


