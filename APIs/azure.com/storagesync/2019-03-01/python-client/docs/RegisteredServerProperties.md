# RegisteredServerProperties

RegisteredServer Properties object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_version** | **str** | Registered Server Agent Version | [optional] 
**cluster_id** | **str** | Registered Server clusterId | [optional] 
**cluster_name** | **str** | Registered Server clusterName | [optional] 
**discovery_endpoint_uri** | **str** | Resource discoveryEndpointUri | [optional] 
**friendly_name** | **str** | Friendly Name | [optional] 
**last_heart_beat** | **str** | Registered Server last heart beat | [optional] 
**last_operation_name** | **str** | Resource Last Operation Name | [optional] 
**last_workflow_id** | **str** | Registered Server lastWorkflowId | [optional] 
**management_endpoint_uri** | **str** | Management Endpoint Uri | [optional] 
**monitoring_configuration** | **str** | Monitoring Configuration | [optional] 
**provisioning_state** | **str** | Registered Server Provisioning State | [optional] 
**resource_location** | **str** | Resource Location | [optional] 
**server_certificate** | **str** | Registered Server Certificate | [optional] 
**server_id** | **str** | Registered Server serverId | [optional] 
**server_management_error_code** | **int** | Registered Server Management Error Code | [optional] 
**server_os_version** | **str** | Registered Server OS Version | [optional] 
**server_role** | **str** | Registered Server serverRole | [optional] 
**service_location** | **str** | Service Location | [optional] 
**storage_sync_service_uid** | **str** | Registered Server storageSyncServiceUid | [optional] 

## Example

```python
from openapi_client.models.registered_server_properties import RegisteredServerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RegisteredServerProperties from a JSON string
registered_server_properties_instance = RegisteredServerProperties.from_json(json)
# print the JSON string representation of the object
print(RegisteredServerProperties.to_json())

# convert the object into a dict
registered_server_properties_dict = registered_server_properties_instance.to_dict()
# create an instance of RegisteredServerProperties from a dict
registered_server_properties_from_dict = RegisteredServerProperties.from_dict(registered_server_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


