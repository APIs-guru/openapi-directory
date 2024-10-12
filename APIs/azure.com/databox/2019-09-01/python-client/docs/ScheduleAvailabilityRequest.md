# ScheduleAvailabilityRequest

Request body to get the availability for scheduling orders.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sku_name** | **str** | Sku Name for which the order is to be scheduled. | 
**storage_location** | **str** | Location for data transfer.   For locations check: https://management.azure.com/subscriptions/SUBSCRIPTIONID/locations?api-version&#x3D;2018-01-01 | 

## Example

```python
from openapi_client.models.schedule_availability_request import ScheduleAvailabilityRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduleAvailabilityRequest from a JSON string
schedule_availability_request_instance = ScheduleAvailabilityRequest.from_json(json)
# print the JSON string representation of the object
print(ScheduleAvailabilityRequest.to_json())

# convert the object into a dict
schedule_availability_request_dict = schedule_availability_request_instance.to_dict()
# create an instance of ScheduleAvailabilityRequest from a dict
schedule_availability_request_from_dict = ScheduleAvailabilityRequest.from_dict(schedule_availability_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


