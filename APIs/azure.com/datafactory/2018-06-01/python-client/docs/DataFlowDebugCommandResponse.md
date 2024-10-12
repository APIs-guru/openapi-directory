# DataFlowDebugCommandResponse

Response body structure of data flow result for data preview, statistics or expression preview.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **str** | The result data of data preview, statistics or expression preview. | [optional] 
**status** | **str** | The run status of data preview, statistics or expression preview. | [optional] 

## Example

```python
from openapi_client.models.data_flow_debug_command_response import DataFlowDebugCommandResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DataFlowDebugCommandResponse from a JSON string
data_flow_debug_command_response_instance = DataFlowDebugCommandResponse.from_json(json)
# print the JSON string representation of the object
print(DataFlowDebugCommandResponse.to_json())

# convert the object into a dict
data_flow_debug_command_response_dict = data_flow_debug_command_response_instance.to_dict()
# create an instance of DataFlowDebugCommandResponse from a dict
data_flow_debug_command_response_from_dict = DataFlowDebugCommandResponse.from_dict(data_flow_debug_command_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


