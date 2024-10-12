# TriggerUpdateParameters

The properties for updating triggers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_image_trigger** | [**BaseImageTriggerUpdateParameters**](BaseImageTriggerUpdateParameters.md) |  | [optional] 
**source_triggers** | [**List[SourceTriggerUpdateParameters]**](SourceTriggerUpdateParameters.md) | The collection of triggers based on source code repository. | [optional] 
**timer_triggers** | [**List[TimerTriggerUpdateParameters]**](TimerTriggerUpdateParameters.md) | The collection of timer triggers. | [optional] 

## Example

```python
from openapi_client.models.trigger_update_parameters import TriggerUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of TriggerUpdateParameters from a JSON string
trigger_update_parameters_instance = TriggerUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(TriggerUpdateParameters.to_json())

# convert the object into a dict
trigger_update_parameters_dict = trigger_update_parameters_instance.to_dict()
# create an instance of TriggerUpdateParameters from a dict
trigger_update_parameters_from_dict = TriggerUpdateParameters.from_dict(trigger_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


