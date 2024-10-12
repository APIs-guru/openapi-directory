# ManagedNetworkPeeringPolicyProperties

Properties of a Managed Network Peering Policy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hub** | [**ResourceId**](ResourceId.md) |  | [optional] 
**mesh** | [**List[ResourceId]**](ResourceId.md) | Gets or sets the mesh group IDs | [optional] 
**spokes** | [**List[ResourceId]**](ResourceId.md) | Gets or sets the spokes group IDs | [optional] 
**type** | **str** | Gets or sets the connectivity type of a network structure policy | 
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**provisioning_state** | **str** | Provisioning state of the ManagedNetwork resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.managed_network_peering_policy_properties import ManagedNetworkPeeringPolicyProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedNetworkPeeringPolicyProperties from a JSON string
managed_network_peering_policy_properties_instance = ManagedNetworkPeeringPolicyProperties.from_json(json)
# print the JSON string representation of the object
print(ManagedNetworkPeeringPolicyProperties.to_json())

# convert the object into a dict
managed_network_peering_policy_properties_dict = managed_network_peering_policy_properties_instance.to_dict()
# create an instance of ManagedNetworkPeeringPolicyProperties from a dict
managed_network_peering_policy_properties_from_dict = ManagedNetworkPeeringPolicyProperties.from_dict(managed_network_peering_policy_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


