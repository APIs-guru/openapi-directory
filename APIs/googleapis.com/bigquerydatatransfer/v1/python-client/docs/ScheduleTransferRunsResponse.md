# ScheduleTransferRunsResponse

A response to schedule transfer runs for a time range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**runs** | [**List[TransferRun]**](TransferRun.md) | The transfer runs that were scheduled. | [optional] 

## Example

```python
from openapi_client.models.schedule_transfer_runs_response import ScheduleTransferRunsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduleTransferRunsResponse from a JSON string
schedule_transfer_runs_response_instance = ScheduleTransferRunsResponse.from_json(json)
# print the JSON string representation of the object
print(ScheduleTransferRunsResponse.to_json())

# convert the object into a dict
schedule_transfer_runs_response_dict = schedule_transfer_runs_response_instance.to_dict()
# create an instance of ScheduleTransferRunsResponse from a dict
schedule_transfer_runs_response_from_dict = ScheduleTransferRunsResponse.from_dict(schedule_transfer_runs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


