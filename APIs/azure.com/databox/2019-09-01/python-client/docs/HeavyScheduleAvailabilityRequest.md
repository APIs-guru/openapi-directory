# HeavyScheduleAvailabilityRequest

Request body to get the availability for scheduling heavy orders.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from openapi_client.models.heavy_schedule_availability_request import HeavyScheduleAvailabilityRequest

# TODO update the JSON string below
json = "{}"
# create an instance of HeavyScheduleAvailabilityRequest from a JSON string
heavy_schedule_availability_request_instance = HeavyScheduleAvailabilityRequest.from_json(json)
# print the JSON string representation of the object
print(HeavyScheduleAvailabilityRequest.to_json())

# convert the object into a dict
heavy_schedule_availability_request_dict = heavy_schedule_availability_request_instance.to_dict()
# create an instance of HeavyScheduleAvailabilityRequest from a dict
heavy_schedule_availability_request_from_dict = HeavyScheduleAvailabilityRequest.from_dict(heavy_schedule_availability_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


