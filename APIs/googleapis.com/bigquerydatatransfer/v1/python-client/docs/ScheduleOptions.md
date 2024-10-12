# ScheduleOptions

Options customizing the data transfer schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disable_auto_scheduling** | **bool** | If true, automatic scheduling of data transfer runs for this configuration will be disabled. The runs can be started on ad-hoc basis using StartManualTransferRuns API. When automatic scheduling is disabled, the TransferConfig.schedule field will be ignored. | [optional] 
**end_time** | **str** | Defines time to stop scheduling transfer runs. A transfer run cannot be scheduled at or after the end time. The end time can be changed at any moment. The time when a data transfer can be triggered manually is not limited by this option. | [optional] 
**start_time** | **str** | Specifies time to start scheduling transfer runs. The first run will be scheduled at or after the start time according to a recurrence pattern defined in the schedule string. The start time can be changed at any moment. The time when a data transfer can be triggered manually is not limited by this option. | [optional] 

## Example

```python
from openapi_client.models.schedule_options import ScheduleOptions

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduleOptions from a JSON string
schedule_options_instance = ScheduleOptions.from_json(json)
# print the JSON string representation of the object
print(ScheduleOptions.to_json())

# convert the object into a dict
schedule_options_dict = schedule_options_instance.to_dict()
# create an instance of ScheduleOptions from a dict
schedule_options_from_dict = ScheduleOptions.from_dict(schedule_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


