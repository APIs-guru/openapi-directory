# DiskScheduleAvailabilityRequest

Request body to get the availability for scheduling disk orders.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expected_data_size_in_terabytes** | **int** | The expected size of the data, which needs to be transferred in this job, in terabytes. | 

## Example

```python
from openapi_client.models.disk_schedule_availability_request import DiskScheduleAvailabilityRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DiskScheduleAvailabilityRequest from a JSON string
disk_schedule_availability_request_instance = DiskScheduleAvailabilityRequest.from_json(json)
# print the JSON string representation of the object
print(DiskScheduleAvailabilityRequest.to_json())

# convert the object into a dict
disk_schedule_availability_request_dict = disk_schedule_availability_request_instance.to_dict()
# create an instance of DiskScheduleAvailabilityRequest from a dict
disk_schedule_availability_request_from_dict = DiskScheduleAvailabilityRequest.from_dict(disk_schedule_availability_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


