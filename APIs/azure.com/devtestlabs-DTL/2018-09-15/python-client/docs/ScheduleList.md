# ScheduleList

The response of a list operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next set of results. | [optional] 
**value** | [**List[Schedule]**](Schedule.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.schedule_list import ScheduleList

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduleList from a JSON string
schedule_list_instance = ScheduleList.from_json(json)
# print the JSON string representation of the object
print(ScheduleList.to_json())

# convert the object into a dict
schedule_list_dict = schedule_list_instance.to_dict()
# create an instance of ScheduleList from a dict
schedule_list_from_dict = ScheduleList.from_dict(schedule_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


