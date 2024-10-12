# RedisPatchScheduleListResult

The response of list patch schedules Redis operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next page of results. | [optional] [readonly] 
**value** | [**List[RedisPatchSchedule]**](RedisPatchSchedule.md) | Results of the list patch schedules operation. | [optional] 

## Example

```python
from openapi_client.models.redis_patch_schedule_list_result import RedisPatchScheduleListResult

# TODO update the JSON string below
json = "{}"
# create an instance of RedisPatchScheduleListResult from a JSON string
redis_patch_schedule_list_result_instance = RedisPatchScheduleListResult.from_json(json)
# print the JSON string representation of the object
print(RedisPatchScheduleListResult.to_json())

# convert the object into a dict
redis_patch_schedule_list_result_dict = redis_patch_schedule_list_result_instance.to_dict()
# create an instance of RedisPatchScheduleListResult from a dict
redis_patch_schedule_list_result_from_dict = RedisPatchScheduleListResult.from_dict(redis_patch_schedule_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


