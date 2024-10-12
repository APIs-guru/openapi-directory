# PulseAnswer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**multi_choice_answer** | [**List[PulseMCQOption]**](PulseMCQOption.md) |  | [optional] 
**spatial_answer** | [**List[PulseSpatialOption]**](PulseSpatialOption.md) |  | [optional] 
**text_answer** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.pulse_answer import PulseAnswer

# TODO update the JSON string below
json = "{}"
# create an instance of PulseAnswer from a JSON string
pulse_answer_instance = PulseAnswer.from_json(json)
# print the JSON string representation of the object
print(PulseAnswer.to_json())

# convert the object into a dict
pulse_answer_dict = pulse_answer_instance.to_dict()
# create an instance of PulseAnswer from a dict
pulse_answer_from_dict = PulseAnswer.from_dict(pulse_answer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


