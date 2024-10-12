# TriggerProperties

The properties of a trigger.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_image_trigger** | [**BaseImageTrigger**](BaseImageTrigger.md) |  | [optional] 
**source_triggers** | [**List[SourceTrigger]**](SourceTrigger.md) | The collection of triggers based on source code repository. | [optional] 
**timer_triggers** | [**List[TimerTrigger]**](TimerTrigger.md) | The collection of timer triggers. | [optional] 

## Example

```python
from openapi_client.models.trigger_properties import TriggerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TriggerProperties from a JSON string
trigger_properties_instance = TriggerProperties.from_json(json)
# print the JSON string representation of the object
print(TriggerProperties.to_json())

# convert the object into a dict
trigger_properties_dict = trigger_properties_instance.to_dict()
# create an instance of TriggerProperties from a dict
trigger_properties_from_dict = TriggerProperties.from_dict(trigger_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


