# ScheduleUpdateProperties

The parameters supplied to the update schedule operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Gets or sets the description of the schedule. | [optional] 
**is_enabled** | **bool** | Gets or sets a value indicating whether this schedule is enabled. | [optional] 

## Example

```python
from openapi_client.models.schedule_update_properties import ScheduleUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduleUpdateProperties from a JSON string
schedule_update_properties_instance = ScheduleUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(ScheduleUpdateProperties.to_json())

# convert the object into a dict
schedule_update_properties_dict = schedule_update_properties_instance.to_dict()
# create an instance of ScheduleUpdateProperties from a dict
schedule_update_properties_from_dict = ScheduleUpdateProperties.from_dict(schedule_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


