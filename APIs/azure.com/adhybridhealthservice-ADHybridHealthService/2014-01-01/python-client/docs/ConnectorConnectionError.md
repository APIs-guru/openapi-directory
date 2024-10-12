# ConnectorConnectionError

The connector connection error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connector_id** | **str** | The connector Id. | [optional] 
**error_code** | **str** | The error code. | [optional] 
**id** | **str** | The error Id. | [optional] 
**message** | **str** | The message for the connection error. | [optional] 
**run_step_result_id** | **str** | The run step result Id. | [optional] 
**server** | **str** | The server where the connection error happened. | [optional] 
**time_occured** | **datetime** | The time when the connection error occurred. | [optional] 
**type** | **str** | The type of error. | [optional] 

## Example

```python
from openapi_client.models.connector_connection_error import ConnectorConnectionError

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorConnectionError from a JSON string
connector_connection_error_instance = ConnectorConnectionError.from_json(json)
# print the JSON string representation of the object
print(ConnectorConnectionError.to_json())

# convert the object into a dict
connector_connection_error_dict = connector_connection_error_instance.to_dict()
# create an instance of ConnectorConnectionError from a dict
connector_connection_error_from_dict = ConnectorConnectionError.from_dict(connector_connection_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


