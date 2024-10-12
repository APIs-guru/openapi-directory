# IntegrationRuntimeNodesUpdate200Response

Properties of Self-hosted integration runtime node.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capabilities** | **Dict[str, str]** | The integration runtime capabilities dictionary | [optional] [readonly] 
**concurrent_jobs_limit** | **int** | Maximum concurrent jobs on the integration runtime node. | [optional] [readonly] 
**expiry_time** | **datetime** | The time at which the integration runtime will expire in ISO8601 format. | [optional] [readonly] 
**host_service_uri** | **str** | URI for the host machine of the integration runtime. | [optional] [readonly] 
**is_active_dispatcher** | **bool** | Indicates whether this node is the active dispatcher for integration runtime requests. | [optional] [readonly] 
**last_connect_time** | **datetime** | The most recent time at which the integration runtime was connected in ISO8601 format. | [optional] [readonly] 
**last_end_update_time** | **datetime** | The last time for the integration runtime node update end. | [optional] [readonly] 
**last_start_time** | **datetime** | The time the node last started up. | [optional] [readonly] 
**last_start_update_time** | **datetime** | The last time for the integration runtime node update start. | [optional] [readonly] 
**last_stop_time** | **datetime** | The integration runtime node last stop time. | [optional] [readonly] 
**last_update_result** | **str** | The result of the last integration runtime node update. | [optional] [readonly] 
**machine_name** | **str** | Machine name of the integration runtime node. | [optional] [readonly] 
**max_concurrent_jobs** | **int** | The maximum concurrent jobs in this integration runtime. | [optional] [readonly] 
**node_name** | **str** | Name of the integration runtime node. | [optional] [readonly] 
**register_time** | **datetime** | The time at which the integration runtime node was registered in ISO8601 format. | [optional] [readonly] 
**status** | **str** | Status of the integration runtime node. | [optional] [readonly] 
**version** | **str** | Version of the integration runtime node. | [optional] [readonly] 
**version_status** | **str** | Status of the integration runtime node version. | [optional] [readonly] 

## Example

```python
from openapi_client.models.integration_runtime_nodes_update200_response import IntegrationRuntimeNodesUpdate200Response

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationRuntimeNodesUpdate200Response from a JSON string
integration_runtime_nodes_update200_response_instance = IntegrationRuntimeNodesUpdate200Response.from_json(json)
# print the JSON string representation of the object
print(IntegrationRuntimeNodesUpdate200Response.to_json())

# convert the object into a dict
integration_runtime_nodes_update200_response_dict = integration_runtime_nodes_update200_response_instance.to_dict()
# create an instance of IntegrationRuntimeNodesUpdate200Response from a dict
integration_runtime_nodes_update200_response_from_dict = IntegrationRuntimeNodesUpdate200Response.from_dict(integration_runtime_nodes_update200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


