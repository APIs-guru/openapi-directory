# ResponseWithContinuationSchedule

The response of a list operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next set of results. | [optional] 
**value** | [**List[Schedule]**](Schedule.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.response_with_continuation_schedule import ResponseWithContinuationSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseWithContinuationSchedule from a JSON string
response_with_continuation_schedule_instance = ResponseWithContinuationSchedule.from_json(json)
# print the JSON string representation of the object
print(ResponseWithContinuationSchedule.to_json())

# convert the object into a dict
response_with_continuation_schedule_dict = response_with_continuation_schedule_instance.to_dict()
# create an instance of ResponseWithContinuationSchedule from a dict
response_with_continuation_schedule_from_dict = ResponseWithContinuationSchedule.from_dict(response_with_continuation_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


