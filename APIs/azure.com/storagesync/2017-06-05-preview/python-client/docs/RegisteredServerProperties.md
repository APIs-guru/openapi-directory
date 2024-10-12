# RegisteredServerProperties

RegisteredServer Properties object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_version** | **str** | Registered Server Agent Version | [optional] 
**cluster_id** | **str** | Registered Server clusterId | [optional] 
**cluster_name** | **str** | Registered Server clusterName | [optional] 
**last_heart_beat** | **str** | Registered Server last heart beat | [optional] 
**last_workflow_id** | **str** | Registered Server lastWorkflowId | [optional] 
**provisioning_state** | **str** | Registered Server Provisioning State | [optional] 
**server_certificate** | **str** | Registered Server Certificate | [optional] 
**server_id** | **str** | Registered Server serverId | [optional] 
**server_managementt_error_code** | **int** | Registered Server Management Error Code | [optional] 
**server_os_version** | **str** | Registered Server OS Version | [optional] 
**server_role** | **str** | Registered Server serverRole | [optional] 
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


