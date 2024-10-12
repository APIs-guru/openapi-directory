# RedisPatchSchedule

Response to put/get patch schedules for Redis cache.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource ID. | [optional] [readonly] 
**location** | **str** | Resource location. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**properties** | [**ScheduleEntries**](ScheduleEntries.md) |  | 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.redis_patch_schedule import RedisPatchSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of RedisPatchSchedule from a JSON string
redis_patch_schedule_instance = RedisPatchSchedule.from_json(json)
# print the JSON string representation of the object
print(RedisPatchSchedule.to_json())

# convert the object into a dict
redis_patch_schedule_dict = redis_patch_schedule_instance.to_dict()
# create an instance of RedisPatchSchedule from a dict
redis_patch_schedule_from_dict = RedisPatchSchedule.from_dict(redis_patch_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


