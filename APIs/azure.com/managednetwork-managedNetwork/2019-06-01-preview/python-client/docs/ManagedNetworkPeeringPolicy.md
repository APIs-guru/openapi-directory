# ManagedNetworkPeeringPolicy

The Managed Network Peering Policy resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ManagedNetworkPeeringPolicyProperties**](ManagedNetworkPeeringPolicyProperties.md) |  | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**location** | **str** | The geo-location where the resource lives | [optional] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.managed_network_peering_policy import ManagedNetworkPeeringPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedNetworkPeeringPolicy from a JSON string
managed_network_peering_policy_instance = ManagedNetworkPeeringPolicy.from_json(json)
# print the JSON string representation of the object
print(ManagedNetworkPeeringPolicy.to_json())

# convert the object into a dict
managed_network_peering_policy_dict = managed_network_peering_policy_instance.to_dict()
# create an instance of ManagedNetworkPeeringPolicy from a dict
managed_network_peering_policy_from_dict = ManagedNetworkPeeringPolicy.from_dict(managed_network_peering_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


