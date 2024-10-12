# DataFlowDebugCommandPayload

Structure of command payload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | **List[str]** | Array of column names. | [optional] 
**expression** | **str** | The expression which is used for preview. | [optional] 
**row_limits** | **int** | Row limits for preview response. | [optional] 
**stream_name** | **str** | The stream name which is used for preview. | 

## Example

```python
from openapi_client.models.data_flow_debug_command_payload import DataFlowDebugCommandPayload

# TODO update the JSON string below
json = "{}"
# create an instance of DataFlowDebugCommandPayload from a JSON string
data_flow_debug_command_payload_instance = DataFlowDebugCommandPayload.from_json(json)
# print the JSON string representation of the object
print(DataFlowDebugCommandPayload.to_json())

# convert the object into a dict
data_flow_debug_command_payload_dict = data_flow_debug_command_payload_instance.to_dict()
# create an instance of DataFlowDebugCommandPayload from a dict
data_flow_debug_command_payload_from_dict = DataFlowDebugCommandPayload.from_dict(data_flow_debug_command_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


