# TriggerEntity

Trigger is not used as an independent entity, it is retrieved as part of a Table entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_features** | **Dict[str, object]** | Custom engine specific features. | [optional] 
**name** | **str** | The name of the trigger. | [optional] 
**sql_code** | **str** | The SQL code which creates the trigger. | [optional] 
**trigger_type** | **str** | Indicates when the trigger fires, for example BEFORE STATEMENT, AFTER EACH ROW. | [optional] 
**triggering_events** | **List[str]** | The DML, DDL, or database events that fire the trigger, for example INSERT, UPDATE. | [optional] 

## Example

```python
from openapi_client.models.trigger_entity import TriggerEntity

# TODO update the JSON string below
json = "{}"
# create an instance of TriggerEntity from a JSON string
trigger_entity_instance = TriggerEntity.from_json(json)
# print the JSON string representation of the object
print(TriggerEntity.to_json())

# convert the object into a dict
trigger_entity_dict = trigger_entity_instance.to_dict()
# create an instance of TriggerEntity from a dict
trigger_entity_from_dict = TriggerEntity.from_dict(trigger_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


