# StopAirflowCommandResponse

Response to StopAirflowCommandRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_done** | **bool** | Whether the execution is still running. | [optional] 
**output** | **List[str]** | Output message from stopping execution request. | [optional] 

## Example

```python
from openapi_client.models.stop_airflow_command_response import StopAirflowCommandResponse

# TODO update the JSON string below
json = "{}"
# create an instance of StopAirflowCommandResponse from a JSON string
stop_airflow_command_response_instance = StopAirflowCommandResponse.from_json(json)
# print the JSON string representation of the object
print(StopAirflowCommandResponse.to_json())

# convert the object into a dict
stop_airflow_command_response_dict = stop_airflow_command_response_instance.to_dict()
# create an instance of StopAirflowCommandResponse from a dict
stop_airflow_command_response_from_dict = StopAirflowCommandResponse.from_dict(stop_airflow_command_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


