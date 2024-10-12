# ExecuteAirflowCommandResponse

Response to ExecuteAirflowCommandRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** | Error message. Empty if there was no error. | [optional] 
**execution_id** | **str** | The unique ID of the command execution for polling. | [optional] 
**pod** | **str** | The name of the pod where the command is executed. | [optional] 
**pod_namespace** | **str** | The namespace of the pod where the command is executed. | [optional] 

## Example

```python
from openapi_client.models.execute_airflow_command_response import ExecuteAirflowCommandResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ExecuteAirflowCommandResponse from a JSON string
execute_airflow_command_response_instance = ExecuteAirflowCommandResponse.from_json(json)
# print the JSON string representation of the object
print(ExecuteAirflowCommandResponse.to_json())

# convert the object into a dict
execute_airflow_command_response_dict = execute_airflow_command_response_instance.to_dict()
# create an instance of ExecuteAirflowCommandResponse from a dict
execute_airflow_command_response_from_dict = ExecuteAirflowCommandResponse.from_dict(execute_airflow_command_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


