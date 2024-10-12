# Instance

A Looker instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin_settings** | [**AdminSettings**](AdminSettings.md) |  | [optional] 
**consumer_network** | **str** | Network name in the consumer project. Format: &#x60;projects/{project}/global/networks/{network}&#x60;. Note that the consumer network may be in a different GCP project than the consumer project that is hosting the Looker Instance. | [optional] 
**create_time** | **str** | Output only. The time when the Looker instance provisioning was first requested. | [optional] [readonly] 
**custom_domain** | [**CustomDomain**](CustomDomain.md) |  | [optional] 
**deny_maintenance_period** | [**DenyMaintenancePeriod**](DenyMaintenancePeriod.md) |  | [optional] 
**egress_public_ip** | **str** | Output only. Public Egress IP (IPv4). | [optional] [readonly] 
**encryption_config** | [**EncryptionConfig**](EncryptionConfig.md) |  | [optional] 
**ingress_private_ip** | **str** | Output only. Private Ingress IP (IPv4). | [optional] [readonly] 
**ingress_public_ip** | **str** | Output only. Public Ingress IP (IPv4). | [optional] [readonly] 
**last_deny_maintenance_period** | [**DenyMaintenancePeriod**](DenyMaintenancePeriod.md) |  | [optional] 
**looker_uri** | **str** | Output only. Looker instance URI which can be used to access the Looker Instance UI. | [optional] [readonly] 
**looker_version** | **str** | Output only. The Looker version that the instance is using. | [optional] [readonly] 
**maintenance_schedule** | [**MaintenanceSchedule**](MaintenanceSchedule.md) |  | [optional] 
**maintenance_window** | [**MaintenanceWindow**](MaintenanceWindow.md) |  | [optional] 
**name** | **str** | Output only. Format: &#x60;projects/{project}/locations/{location}/instances/{instance}&#x60;. | [optional] [readonly] 
**oauth_config** | [**OAuthConfig**](OAuthConfig.md) |  | [optional] 
**platform_edition** | **str** | Platform edition. | [optional] 
**private_ip_enabled** | **bool** | Whether private IP is enabled on the Looker instance. | [optional] 
**psc_config** | [**PscConfig**](PscConfig.md) |  | [optional] 
**psc_enabled** | **bool** | Optional. Whether to use Private Service Connect (PSC) for private IP connectivity. If true, VPC peering (PSA) will not be used. | [optional] 
**public_ip_enabled** | **bool** | Whether public IP is enabled on the Looker instance. | [optional] 
**reserved_range** | **str** | Name of a reserved IP address range within the Instance.consumer_network, to be used for private services access connection. May or may not be specified in a create request. | [optional] 
**state** | **str** | Output only. The state of the instance. | [optional] [readonly] 
**update_time** | **str** | Output only. The time when the Looker instance was last updated. | [optional] [readonly] 
**user_metadata** | [**UserMetadata**](UserMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.instance import Instance

# TODO update the JSON string below
json = "{}"
# create an instance of Instance from a JSON string
instance_instance = Instance.from_json(json)
# print the JSON string representation of the object
print(Instance.to_json())

# convert the object into a dict
instance_dict = instance_instance.to_dict()
# create an instance of Instance from a dict
instance_from_dict = Instance.from_dict(instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


