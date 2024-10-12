# DataFlowDebugSessionInfo

Data flow debug session info.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compute_type** | **str** | Compute type of the cluster. | [optional] 
**core_count** | **int** | Core count of the cluster. | [optional] 
**data_flow_name** | **str** | The name of the data flow. | [optional] 
**integration_runtime_name** | **str** | Attached integration runtime name of data flow debug session. | [optional] 
**last_activity_time** | **str** | Last activity time of data flow debug session. | [optional] 
**node_count** | **int** | Node count of the cluster. (deprecated property) | [optional] 
**session_id** | **str** | The ID of data flow debug session. | [optional] 
**start_time** | **str** | Start time of data flow debug session. | [optional] 
**time_to_live_in_minutes** | **int** | Compute type of the cluster. | [optional] 

## Example

```python
from openapi_client.models.data_flow_debug_session_info import DataFlowDebugSessionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DataFlowDebugSessionInfo from a JSON string
data_flow_debug_session_info_instance = DataFlowDebugSessionInfo.from_json(json)
# print the JSON string representation of the object
print(DataFlowDebugSessionInfo.to_json())

# convert the object into a dict
data_flow_debug_session_info_dict = data_flow_debug_session_info_instance.to_dict()
# create an instance of DataFlowDebugSessionInfo from a dict
data_flow_debug_session_info_from_dict = DataFlowDebugSessionInfo.from_dict(data_flow_debug_session_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


