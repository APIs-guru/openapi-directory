# DeleteDataFlowDebugSessionRequest

Request body structure for deleting data flow debug session.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**session_id** | **str** | The ID of data flow debug session. | [optional] 

## Example

```python
from openapi_client.models.delete_data_flow_debug_session_request import DeleteDataFlowDebugSessionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteDataFlowDebugSessionRequest from a JSON string
delete_data_flow_debug_session_request_instance = DeleteDataFlowDebugSessionRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteDataFlowDebugSessionRequest.to_json())

# convert the object into a dict
delete_data_flow_debug_session_request_dict = delete_data_flow_debug_session_request_instance.to_dict()
# create an instance of DeleteDataFlowDebugSessionRequest from a dict
delete_data_flow_debug_session_request_from_dict = DeleteDataFlowDebugSessionRequest.from_dict(delete_data_flow_debug_session_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


