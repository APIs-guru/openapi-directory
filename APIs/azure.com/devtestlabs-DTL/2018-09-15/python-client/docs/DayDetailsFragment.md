# DayDetailsFragment

Properties of a daily schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**time** | **str** | The time of day the schedule will occur. | [optional] 

## Example

```python
from openapi_client.models.day_details_fragment import DayDetailsFragment

# TODO update the JSON string below
json = "{}"
# create an instance of DayDetailsFragment from a JSON string
day_details_fragment_instance = DayDetailsFragment.from_json(json)
# print the JSON string representation of the object
print(DayDetailsFragment.to_json())

# convert the object into a dict
day_details_fragment_dict = day_details_fragment_instance.to_dict()
# create an instance of DayDetailsFragment from a dict
day_details_fragment_from_dict = DayDetailsFragment.from_dict(day_details_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


