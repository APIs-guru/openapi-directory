# StartManualTransferRunsResponse

A response to start manual transfer runs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**runs** | [**List[TransferRun]**](TransferRun.md) | The transfer runs that were created. | [optional] 

## Example

```python
from openapi_client.models.start_manual_transfer_runs_response import StartManualTransferRunsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of StartManualTransferRunsResponse from a JSON string
start_manual_transfer_runs_response_instance = StartManualTransferRunsResponse.from_json(json)
# print the JSON string representation of the object
print(StartManualTransferRunsResponse.to_json())

# convert the object into a dict
start_manual_transfer_runs_response_dict = start_manual_transfer_runs_response_instance.to_dict()
# create an instance of StartManualTransferRunsResponse from a dict
start_manual_transfer_runs_response_from_dict = StartManualTransferRunsResponse.from_dict(start_manual_transfer_runs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


