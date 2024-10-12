# ManagedClusterLoadBalancerProfileOutboundIPPrefixes

Desired outbound IP Prefix resources for the cluster load balancer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**public_ip_prefixes** | [**List[ResourceReference]**](ResourceReference.md) | A list of public IP prefix resources. | [optional] 

## Example

```python
from openapi_client.models.managed_cluster_load_balancer_profile_outbound_ip_prefixes import ManagedClusterLoadBalancerProfileOutboundIPPrefixes

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedClusterLoadBalancerProfileOutboundIPPrefixes from a JSON string
managed_cluster_load_balancer_profile_outbound_ip_prefixes_instance = ManagedClusterLoadBalancerProfileOutboundIPPrefixes.from_json(json)
# print the JSON string representation of the object
print(ManagedClusterLoadBalancerProfileOutboundIPPrefixes.to_json())

# convert the object into a dict
managed_cluster_load_balancer_profile_outbound_ip_prefixes_dict = managed_cluster_load_balancer_profile_outbound_ip_prefixes_instance.to_dict()
# create an instance of ManagedClusterLoadBalancerProfileOutboundIPPrefixes from a dict
managed_cluster_load_balancer_profile_outbound_ip_prefixes_from_dict = ManagedClusterLoadBalancerProfileOutboundIPPrefixes.from_dict(managed_cluster_load_balancer_profile_outbound_ip_prefixes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


