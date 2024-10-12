# AttemptStatus

The status of a task attempt.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dispatch_time** | **str** | Output only. The time that this attempt was dispatched. &#x60;dispatch_time&#x60; will be truncated to the nearest microsecond. | [optional] 
**response_status** | [**Status**](Status.md) |  | [optional] 
**response_time** | **str** | Output only. The time that this attempt response was received. &#x60;response_time&#x60; will be truncated to the nearest microsecond. | [optional] 
**schedule_time** | **str** | Output only. The time that this attempt was scheduled. &#x60;schedule_time&#x60; will be truncated to the nearest microsecond. | [optional] 

## Example

```python
from openapi_client.models.attempt_status import AttemptStatus

# TODO update the JSON string below
json = "{}"
# create an instance of AttemptStatus from a JSON string
attempt_status_instance = AttemptStatus.from_json(json)
# print the JSON string representation of the object
print(AttemptStatus.to_json())

# convert the object into a dict
attempt_status_dict = attempt_status_instance.to_dict()
# create an instance of AttemptStatus from a dict
attempt_status_from_dict = AttemptStatus.from_dict(attempt_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


