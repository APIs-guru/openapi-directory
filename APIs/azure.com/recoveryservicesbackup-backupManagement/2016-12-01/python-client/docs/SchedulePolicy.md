# SchedulePolicy

Base class for backup schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schedule_policy_type** | **str** | This property will be used as the discriminator for deciding the specific types in the polymorhpic chain of types. | 

## Example

```python
from openapi_client.models.schedule_policy import SchedulePolicy

# TODO update the JSON string below
json = "{}"
# create an instance of SchedulePolicy from a JSON string
schedule_policy_instance = SchedulePolicy.from_json(json)
# print the JSON string representation of the object
print(SchedulePolicy.to_json())

# convert the object into a dict
schedule_policy_dict = schedule_policy_instance.to_dict()
# create an instance of SchedulePolicy from a dict
schedule_policy_from_dict = SchedulePolicy.from_dict(schedule_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


