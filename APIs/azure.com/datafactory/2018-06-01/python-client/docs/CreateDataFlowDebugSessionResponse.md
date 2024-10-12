# CreateDataFlowDebugSessionResponse

Response body structure for creating data flow debug session.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**session_id** | **str** | The ID of data flow debug session. | [optional] 
**status** | **str** | The state of the debug session. | [optional] 

## Example

```python
from openapi_client.models.create_data_flow_debug_session_response import CreateDataFlowDebugSessionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDataFlowDebugSessionResponse from a JSON string
create_data_flow_debug_session_response_instance = CreateDataFlowDebugSessionResponse.from_json(json)
# print the JSON string representation of the object
print(CreateDataFlowDebugSessionResponse.to_json())

# convert the object into a dict
create_data_flow_debug_session_response_dict = create_data_flow_debug_session_response_instance.to_dict()
# create an instance of CreateDataFlowDebugSessionResponse from a dict
create_data_flow_debug_session_response_from_dict = CreateDataFlowDebugSessionResponse.from_dict(create_data_flow_debug_session_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


