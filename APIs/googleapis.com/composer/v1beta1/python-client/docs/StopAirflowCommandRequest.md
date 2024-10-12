# StopAirflowCommandRequest

Stop Airflow Command request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**execution_id** | **str** | The unique ID of the command execution. | [optional] 
**force** | **bool** | If true, the execution is terminated forcefully (SIGKILL). If false, the execution is stopped gracefully, giving it time for cleanup. | [optional] 
**pod** | **str** | The name of the pod where the command is executed. | [optional] 
**pod_namespace** | **str** | The namespace of the pod where the command is executed. | [optional] 

## Example

```python
from openapi_client.models.stop_airflow_command_request import StopAirflowCommandRequest

# TODO update the JSON string below
json = "{}"
# create an instance of StopAirflowCommandRequest from a JSON string
stop_airflow_command_request_instance = StopAirflowCommandRequest.from_json(json)
# print the JSON string representation of the object
print(StopAirflowCommandRequest.to_json())

# convert the object into a dict
stop_airflow_command_request_dict = stop_airflow_command_request_instance.to_dict()
# create an instance of StopAirflowCommandRequest from a dict
stop_airflow_command_request_from_dict = StopAirflowCommandRequest.from_dict(stop_airflow_command_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


