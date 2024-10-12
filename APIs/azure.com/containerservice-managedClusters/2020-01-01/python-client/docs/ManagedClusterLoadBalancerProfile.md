# ManagedClusterLoadBalancerProfile

Profile of the managed cluster load balancer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allocated_outbound_ports** | **int** | Desired number of allocated SNAT ports per VM. Allowed values must be in the range of 0 to 64000 (inclusive). The default value is 0 which results in Azure dynamically allocating ports. | [optional] [default to 0]
**effective_outbound_ips** | [**List[ResourceReference]**](ResourceReference.md) | The effective outbound IP resources of the cluster load balancer. | [optional] 
**idle_timeout_in_minutes** | **int** | Desired outbound flow idle timeout in minutes. Allowed values must be in the range of 4 to 120 (inclusive). The default value is 30 minutes. | [optional] [default to 30]
**managed_outbound_ips** | [**ManagedClusterLoadBalancerProfileManagedOutboundIPs**](ManagedClusterLoadBalancerProfileManagedOutboundIPs.md) |  | [optional] 
**outbound_ip_prefixes** | [**ManagedClusterLoadBalancerProfileOutboundIPPrefixes**](ManagedClusterLoadBalancerProfileOutboundIPPrefixes.md) |  | [optional] 
**outbound_ips** | [**ManagedClusterLoadBalancerProfileOutboundIPs**](ManagedClusterLoadBalancerProfileOutboundIPs.md) |  | [optional] 

## Example

```python
from openapi_client.models.managed_cluster_load_balancer_profile import ManagedClusterLoadBalancerProfile

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedClusterLoadBalancerProfile from a JSON string
managed_cluster_load_balancer_profile_instance = ManagedClusterLoadBalancerProfile.from_json(json)
# print the JSON string representation of the object
print(ManagedClusterLoadBalancerProfile.to_json())

# convert the object into a dict
managed_cluster_load_balancer_profile_dict = managed_cluster_load_balancer_profile_instance.to_dict()
# create an instance of ManagedClusterLoadBalancerProfile from a dict
managed_cluster_load_balancer_profile_from_dict = ManagedClusterLoadBalancerProfile.from_dict(managed_cluster_load_balancer_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


