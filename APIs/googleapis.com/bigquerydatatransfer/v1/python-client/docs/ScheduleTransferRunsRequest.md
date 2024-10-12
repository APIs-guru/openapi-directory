# ScheduleTransferRunsRequest

A request to schedule transfer runs for a time range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | Required. End time of the range of transfer runs. For example, &#x60;\&quot;2017-05-30T00:00:00+00:00\&quot;&#x60;. | [optional] 
**start_time** | **str** | Required. Start time of the range of transfer runs. For example, &#x60;\&quot;2017-05-25T00:00:00+00:00\&quot;&#x60;. | [optional] 

## Example

```python
from openapi_client.models.schedule_transfer_runs_request import ScheduleTransferRunsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduleTransferRunsRequest from a JSON string
schedule_transfer_runs_request_instance = ScheduleTransferRunsRequest.from_json(json)
# print the JSON string representation of the object
print(ScheduleTransferRunsRequest.to_json())

# convert the object into a dict
schedule_transfer_runs_request_dict = schedule_transfer_runs_request_instance.to_dict()
# create an instance of ScheduleTransferRunsRequest from a dict
schedule_transfer_runs_request_from_dict = ScheduleTransferRunsRequest.from_dict(schedule_transfer_runs_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


