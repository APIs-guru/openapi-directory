# ScheduleListResult

The response model for the list schedule operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets the next link. | [optional] 
**value** | [**List[Schedule]**](Schedule.md) | Gets or sets a list of schedules. | [optional] 

## Example

```python
from openapi_client.models.schedule_list_result import ScheduleListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduleListResult from a JSON string
schedule_list_result_instance = ScheduleListResult.from_json(json)
# print the JSON string representation of the object
print(ScheduleListResult.to_json())

# convert the object into a dict
schedule_list_result_dict = schedule_list_result_instance.to_dict()
# create an instance of ScheduleListResult from a dict
schedule_list_result_from_dict = ScheduleListResult.from_dict(schedule_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


