# CreateDataFlowDebugSessionRequest

Request body structure for creating data flow debug session.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compute_type** | **str** | Compute type of the cluster. The value will be overwritten by the same setting in integration runtime if provided. | [optional] 
**core_count** | **int** | Core count of the cluster. The value will be overwritten by the same setting in integration runtime if provided. | [optional] 
**integration_runtime** | [**IntegrationRuntimeDebugResource**](IntegrationRuntimeDebugResource.md) |  | [optional] 
**time_to_live** | **int** | Time to live setting of the cluster in minutes. | [optional] 

## Example

```python
from openapi_client.models.create_data_flow_debug_session_request import CreateDataFlowDebugSessionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDataFlowDebugSessionRequest from a JSON string
create_data_flow_debug_session_request_instance = CreateDataFlowDebugSessionRequest.from_json(json)
# print the JSON string representation of the object
print(CreateDataFlowDebugSessionRequest.to_json())

# convert the object into a dict
create_data_flow_debug_session_request_dict = create_data_flow_debug_session_request_instance.to_dict()
# create an instance of CreateDataFlowDebugSessionRequest from a dict
create_data_flow_debug_session_request_from_dict = CreateDataFlowDebugSessionRequest.from_dict(create_data_flow_debug_session_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


