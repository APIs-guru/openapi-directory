# PulseResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**learner_first_name** | **str** |  | [optional] 
**learner_id** | **str** |  | [optional] 
**learner_last_name** | **str** |  | [optional] 
**pulse_base_id** | **str** |  | [optional] 
**pulse_instance_id** | **str** |  | [optional] 
**pulse_question** | **str** |  | [optional] 
**pulse_run_duration_minutes** | **int** |  | [optional] 
**pulse_run_start** | **datetime** |  | [optional] 
**pulse_type** | **str** |  | [optional] 
**response** | [**PulseAnswer**](PulseAnswer.md) |  | [optional] 
**response_time** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.pulse_response import PulseResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PulseResponse from a JSON string
pulse_response_instance = PulseResponse.from_json(json)
# print the JSON string representation of the object
print(PulseResponse.to_json())

# convert the object into a dict
pulse_response_dict = pulse_response_instance.to_dict()
# create an instance of PulseResponse from a dict
pulse_response_from_dict = PulseResponse.from_dict(pulse_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


