# HourDetailsFragment

Properties of an hourly schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**minute** | **int** | Minutes of the hour the schedule will run. | [optional] 

## Example

```python
from openapi_client.models.hour_details_fragment import HourDetailsFragment

# TODO update the JSON string below
json = "{}"
# create an instance of HourDetailsFragment from a JSON string
hour_details_fragment_instance = HourDetailsFragment.from_json(json)
# print the JSON string representation of the object
print(HourDetailsFragment.to_json())

# convert the object into a dict
hour_details_fragment_dict = hour_details_fragment_instance.to_dict()
# create an instance of HourDetailsFragment from a dict
hour_details_fragment_from_dict = HourDetailsFragment.from_dict(hour_details_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


