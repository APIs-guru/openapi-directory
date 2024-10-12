# ScheduleFragment

A schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SchedulePropertiesFragment**](SchedulePropertiesFragment.md) |  | [optional] 
**tags** | **Dict[str, str]** | The tags of the resource. | [optional] 

## Example

```python
from openapi_client.models.schedule_fragment import ScheduleFragment

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduleFragment from a JSON string
schedule_fragment_instance = ScheduleFragment.from_json(json)
# print the JSON string representation of the object
print(ScheduleFragment.to_json())

# convert the object into a dict
schedule_fragment_dict = schedule_fragment_instance.to_dict()
# create an instance of ScheduleFragment from a dict
schedule_fragment_from_dict = ScheduleFragment.from_dict(schedule_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


