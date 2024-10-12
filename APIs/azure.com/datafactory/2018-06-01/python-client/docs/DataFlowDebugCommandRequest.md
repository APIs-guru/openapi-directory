# DataFlowDebugCommandRequest

Request body structure for data flow debug command.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command** | **str** | The command type. | [optional] 
**command_payload** | [**DataFlowDebugCommandPayload**](DataFlowDebugCommandPayload.md) |  | [optional] 
**session_id** | **str** | The ID of data flow debug session. | [optional] 

## Example

```python
from openapi_client.models.data_flow_debug_command_request import DataFlowDebugCommandRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DataFlowDebugCommandRequest from a JSON string
data_flow_debug_command_request_instance = DataFlowDebugCommandRequest.from_json(json)
# print the JSON string representation of the object
print(DataFlowDebugCommandRequest.to_json())

# convert the object into a dict
data_flow_debug_command_request_dict = data_flow_debug_command_request_instance.to_dict()
# create an instance of DataFlowDebugCommandRequest from a dict
data_flow_debug_command_request_from_dict = DataFlowDebugCommandRequest.from_dict(data_flow_debug_command_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


