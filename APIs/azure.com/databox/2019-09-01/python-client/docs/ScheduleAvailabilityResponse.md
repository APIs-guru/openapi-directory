# ScheduleAvailabilityResponse

Schedule availability response for given sku in a region.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_dates** | **List[datetime]** | List of dates available to schedule | [optional] [readonly] 

## Example

```python
from openapi_client.models.schedule_availability_response import ScheduleAvailabilityResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduleAvailabilityResponse from a JSON string
schedule_availability_response_instance = ScheduleAvailabilityResponse.from_json(json)
# print the JSON string representation of the object
print(ScheduleAvailabilityResponse.to_json())

# convert the object into a dict
schedule_availability_response_dict = schedule_availability_response_instance.to_dict()
# create an instance of ScheduleAvailabilityResponse from a dict
schedule_availability_response_from_dict = ScheduleAvailabilityResponse.from_dict(schedule_availability_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


