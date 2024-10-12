# BandwidthSchedulesList

The collection of bandwidth schedules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next set of results. | [optional] [readonly] 
**value** | [**List[BandwidthSchedule]**](BandwidthSchedule.md) | The list of bandwidth schedules. | [optional] [readonly] 

## Example

```python
from openapi_client.models.bandwidth_schedules_list import BandwidthSchedulesList

# TODO update the JSON string below
json = "{}"
# create an instance of BandwidthSchedulesList from a JSON string
bandwidth_schedules_list_instance = BandwidthSchedulesList.from_json(json)
# print the JSON string representation of the object
print(BandwidthSchedulesList.to_json())

# convert the object into a dict
bandwidth_schedules_list_dict = bandwidth_schedules_list_instance.to_dict()
# create an instance of BandwidthSchedulesList from a dict
bandwidth_schedules_list_from_dict = BandwidthSchedulesList.from_dict(bandwidth_schedules_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


