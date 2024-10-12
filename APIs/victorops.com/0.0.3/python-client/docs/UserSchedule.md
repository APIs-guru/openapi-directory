# UserSchedule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**team_schedules** | [**List[TeamSchedule]**](TeamSchedule.md) |  | [optional] 

## Example

```python
from openapi_client.models.user_schedule import UserSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of UserSchedule from a JSON string
user_schedule_instance = UserSchedule.from_json(json)
# print the JSON string representation of the object
print(UserSchedule.to_json())

# convert the object into a dict
user_schedule_dict = user_schedule_instance.to_dict()
# create an instance of UserSchedule from a dict
user_schedule_from_dict = UserSchedule.from_dict(user_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


