# DomainServiceProperties

Properties of the Domain Service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment_id** | **str** | Deployment Id | [optional] [readonly] 
**domain_name** | **str** | The name of the Azure domain that the user would like to deploy Domain Services to. | [optional] 
**domain_security_settings** | [**DomainSecuritySettings**](DomainSecuritySettings.md) |  | [optional] 
**filtered_sync** | **str** | Enabled or Disabled flag to turn on Group-based filtered sync | [optional] 
**ldaps_settings** | [**LdapsSettings**](LdapsSettings.md) |  | [optional] 
**notification_settings** | [**NotificationSettings**](NotificationSettings.md) |  | [optional] 
**provisioning_state** | **str** | the current deployment or provisioning state, which only appears in the response. | [optional] [readonly] 
**replica_sets** | [**List[ReplicaSet]**](ReplicaSet.md) | List of ReplicaSets | [optional] 
**sync_owner** | **str** | SyncOwner ReplicaSet Id | [optional] [readonly] 
**tenant_id** | **str** | Azure Active Directory Tenant Id | [optional] [readonly] 
**version** | **int** | Data Model Version | [optional] [readonly] 

## Example

```python
from openapi_client.models.domain_service_properties import DomainServiceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DomainServiceProperties from a JSON string
domain_service_properties_instance = DomainServiceProperties.from_json(json)
# print the JSON string representation of the object
print(DomainServiceProperties.to_json())

# convert the object into a dict
domain_service_properties_dict = domain_service_properties_instance.to_dict()
# create an instance of DomainServiceProperties from a dict
domain_service_properties_from_dict = DomainServiceProperties.from_dict(domain_service_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


