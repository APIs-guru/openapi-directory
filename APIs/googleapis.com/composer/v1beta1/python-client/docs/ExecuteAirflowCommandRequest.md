# ExecuteAirflowCommandRequest

Execute Airflow Command request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command** | **str** | Airflow command. | [optional] 
**parameters** | **List[str]** | Parameters for the Airflow command/subcommand as an array of arguments. It may contain positional arguments like &#x60;[\&quot;my-dag-id\&quot;]&#x60;, key-value parameters like &#x60;[\&quot;--foo&#x3D;bar\&quot;]&#x60; or &#x60;[\&quot;--foo\&quot;,\&quot;bar\&quot;]&#x60;, or other flags like &#x60;[\&quot;-f\&quot;]&#x60;. | [optional] 
**subcommand** | **str** | Airflow subcommand. | [optional] 

## Example

```python
from openapi_client.models.execute_airflow_command_request import ExecuteAirflowCommandRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExecuteAirflowCommandRequest from a JSON string
execute_airflow_command_request_instance = ExecuteAirflowCommandRequest.from_json(json)
# print the JSON string representation of the object
print(ExecuteAirflowCommandRequest.to_json())

# convert the object into a dict
execute_airflow_command_request_dict = execute_airflow_command_request_instance.to_dict()
# create an instance of ExecuteAirflowCommandRequest from a dict
execute_airflow_command_request_from_dict = ExecuteAirflowCommandRequest.from_dict(execute_airflow_command_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


