# WeekDetailsFragment

Properties of a weekly schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**time** | **str** | The time of the day the schedule will occur. | [optional] 
**weekdays** | **List[str]** | The days of the week for which the schedule is set (e.g. Sunday, Monday, Tuesday, etc.). | [optional] 

## Example

```python
from openapi_client.models.week_details_fragment import WeekDetailsFragment

# TODO update the JSON string below
json = "{}"
# create an instance of WeekDetailsFragment from a JSON string
week_details_fragment_instance = WeekDetailsFragment.from_json(json)
# print the JSON string representation of the object
print(WeekDetailsFragment.to_json())

# convert the object into a dict
week_details_fragment_dict = week_details_fragment_instance.to_dict()
# create an instance of WeekDetailsFragment from a dict
week_details_fragment_from_dict = WeekDetailsFragment.from_dict(week_details_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


