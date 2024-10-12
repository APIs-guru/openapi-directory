# HourDetails

Properties of an hourly schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**minute** | **int** | Minutes of the hour the schedule will run. | [optional] 

## Example

```python
from openapi_client.models.hour_details import HourDetails

# TODO update the JSON string below
json = "{}"
# create an instance of HourDetails from a JSON string
hour_details_instance = HourDetails.from_json(json)
# print the JSON string representation of the object
print(HourDetails.to_json())

# convert the object into a dict
hour_details_dict = hour_details_instance.to_dict()
# create an instance of HourDetails from a dict
hour_details_from_dict = HourDetails.from_dict(hour_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


