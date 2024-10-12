# QuotaProperties

Properties of a quota.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_load_balancers_per_subscription** | **int** | Maximum number of load balancers a tenant subscription can provision. | [optional] 
**max_nics_per_subscription** | **int** | Maximum number of NICs a tenant subscription can provision. | [optional] 
**max_public_ips_per_subscription** | **int** | Maximum number of public IP addresses a tenant subscription can provision. | [optional] 
**max_security_groups_per_subscription** | **int** | Maximum number of security groups a tenant subscription can provision. | [optional] 
**max_virtual_network_gateway_connections_per_subscription** | **int** | Maximum number of virtual network gateway Connections a tenant subscription can provision. | [optional] 
**max_virtual_network_gateways_per_subscription** | **int** | Maximum number of virtual network gateways a tenant subscription can provision. | [optional] 
**max_vnets_per_subscription** | **int** | Maximum number of virtual networks a tenant subscription can provision. | [optional] 
**migration_phase** | [**MigrationPhase**](MigrationPhase.md) |  | [optional] 
**provisioning_state** | **str** | The provisioning state. | [optional] [readonly] 

## Example

```python
from openapi_client.models.quota_properties import QuotaProperties

# TODO update the JSON string below
json = "{}"
# create an instance of QuotaProperties from a JSON string
quota_properties_instance = QuotaProperties.from_json(json)
# print the JSON string representation of the object
print(QuotaProperties.to_json())

# convert the object into a dict
quota_properties_dict = quota_properties_instance.to_dict()
# create an instance of QuotaProperties from a dict
quota_properties_from_dict = QuotaProperties.from_dict(quota_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


