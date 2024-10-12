# StartManualTransferRunsRequest

A request to start manual transfer runs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requested_run_time** | **str** | A run_time timestamp for historical data files or reports that are scheduled to be transferred by the scheduled transfer run. requested_run_time must be a past time and cannot include future time values. | [optional] 
**requested_time_range** | [**TimeRange**](TimeRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.start_manual_transfer_runs_request import StartManualTransferRunsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of StartManualTransferRunsRequest from a JSON string
start_manual_transfer_runs_request_instance = StartManualTransferRunsRequest.from_json(json)
# print the JSON string representation of the object
print(StartManualTransferRunsRequest.to_json())

# convert the object into a dict
start_manual_transfer_runs_request_dict = start_manual_transfer_runs_request_instance.to_dict()
# create an instance of StartManualTransferRunsRequest from a dict
start_manual_transfer_runs_request_from_dict = StartManualTransferRunsRequest.from_dict(start_manual_transfer_runs_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


