# AddDataFlowToDebugSessionResponse

Response body structure for starting data flow debug session.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_version** | **str** | The ID of data flow debug job version. | [optional] 

## Example

```python
from openapi_client.models.add_data_flow_to_debug_session_response import AddDataFlowToDebugSessionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AddDataFlowToDebugSessionResponse from a JSON string
add_data_flow_to_debug_session_response_instance = AddDataFlowToDebugSessionResponse.from_json(json)
# print the JSON string representation of the object
print(AddDataFlowToDebugSessionResponse.to_json())

# convert the object into a dict
add_data_flow_to_debug_session_response_dict = add_data_flow_to_debug_session_response_instance.to_dict()
# create an instance of AddDataFlowToDebugSessionResponse from a dict
add_data_flow_to_debug_session_response_from_dict = AddDataFlowToDebugSessionResponse.from_dict(add_data_flow_to_debug_session_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


