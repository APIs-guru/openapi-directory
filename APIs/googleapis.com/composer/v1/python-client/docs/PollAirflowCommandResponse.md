# PollAirflowCommandResponse

Response to PollAirflowCommandRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exit_info** | [**ExitInfo**](ExitInfo.md) |  | [optional] 
**output** | [**List[Line]**](Line.md) | Output from the command execution. It may not contain the full output and the caller may need to poll for more lines. | [optional] 
**output_end** | **bool** | Whether the command execution has finished and there is no more output. | [optional] 

## Example

```python
from openapi_client.models.poll_airflow_command_response import PollAirflowCommandResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PollAirflowCommandResponse from a JSON string
poll_airflow_command_response_instance = PollAirflowCommandResponse.from_json(json)
# print the JSON string representation of the object
print(PollAirflowCommandResponse.to_json())

# convert the object into a dict
poll_airflow_command_response_dict = poll_airflow_command_response_instance.to_dict()
# create an instance of PollAirflowCommandResponse from a dict
poll_airflow_command_response_from_dict = PollAirflowCommandResponse.from_dict(poll_airflow_command_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


