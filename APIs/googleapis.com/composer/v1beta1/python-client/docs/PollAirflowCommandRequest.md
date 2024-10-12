# PollAirflowCommandRequest

Poll Airflow Command request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**execution_id** | **str** | The unique ID of the command execution. | [optional] 
**next_line_number** | **int** | Line number from which new logs should be fetched. | [optional] 
**pod** | **str** | The name of the pod where the command is executed. | [optional] 
**pod_namespace** | **str** | The namespace of the pod where the command is executed. | [optional] 

## Example

```python
from openapi_client.models.poll_airflow_command_request import PollAirflowCommandRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PollAirflowCommandRequest from a JSON string
poll_airflow_command_request_instance = PollAirflowCommandRequest.from_json(json)
# print the JSON string representation of the object
print(PollAirflowCommandRequest.to_json())

# convert the object into a dict
poll_airflow_command_request_dict = poll_airflow_command_request_instance.to_dict()
# create an instance of PollAirflowCommandRequest from a dict
poll_airflow_command_request_from_dict = PollAirflowCommandRequest.from_dict(poll_airflow_command_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


