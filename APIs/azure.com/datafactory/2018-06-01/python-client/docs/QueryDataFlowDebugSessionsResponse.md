# QueryDataFlowDebugSessionsResponse

A list of active debug sessions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link to the next page of results, if any remaining results exist. | [optional] 
**value** | [**List[DataFlowDebugSessionInfo]**](DataFlowDebugSessionInfo.md) | Array with all active debug sessions. | [optional] 

## Example

```python
from openapi_client.models.query_data_flow_debug_sessions_response import QueryDataFlowDebugSessionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of QueryDataFlowDebugSessionsResponse from a JSON string
query_data_flow_debug_sessions_response_instance = QueryDataFlowDebugSessionsResponse.from_json(json)
# print the JSON string representation of the object
print(QueryDataFlowDebugSessionsResponse.to_json())

# convert the object into a dict
query_data_flow_debug_sessions_response_dict = query_data_flow_debug_sessions_response_instance.to_dict()
# create an instance of QueryDataFlowDebugSessionsResponse from a dict
query_data_flow_debug_sessions_response_from_dict = QueryDataFlowDebugSessionsResponse.from_dict(query_data_flow_debug_sessions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


