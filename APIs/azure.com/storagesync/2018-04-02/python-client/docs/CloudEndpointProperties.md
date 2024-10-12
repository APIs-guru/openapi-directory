# CloudEndpointProperties

CloudEndpoint Properties object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_enabled** | **bool** | Backup Enabled | [optional] [readonly] 
**friendly_name** | **str** | Friendly Name | [optional] 
**last_operation_name** | **str** | Resource Last Operation Name | [optional] 
**last_workflow_id** | **str** | CloudEndpoint lastWorkflowId | [optional] 
**partnership_id** | **str** | Partnership Id | [optional] 
**provisioning_state** | **str** | CloudEndpoint Provisioning State | [optional] 
**storage_account_resource_id** | **str** | Storage Account Resource Id | [optional] 
**storage_account_share_name** | **str** | Storage Account Share name | [optional] 
**storage_account_tenant_id** | **str** | Storage Account Tenant Id | [optional] 

## Example

```python
from openapi_client.models.cloud_endpoint_properties import CloudEndpointProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CloudEndpointProperties from a JSON string
cloud_endpoint_properties_instance = CloudEndpointProperties.from_json(json)
# print the JSON string representation of the object
print(CloudEndpointProperties.to_json())

# convert the object into a dict
cloud_endpoint_properties_dict = cloud_endpoint_properties_instance.to_dict()
# create an instance of CloudEndpointProperties from a dict
cloud_endpoint_properties_from_dict = CloudEndpointProperties.from_dict(cloud_endpoint_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


