# ManagedClusterLoadBalancerProfileManagedOutboundIPs

Desired managed outbound IPs for the cluster load balancer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Desired number of outbound IP created/managed by Azure for the cluster load balancer. Allowed values must be in the range of 1 to 100 (inclusive). The default value is 1.  | [optional] [default to 1]

## Example

```python
from openapi_client.models.managed_cluster_load_balancer_profile_managed_outbound_ips import ManagedClusterLoadBalancerProfileManagedOutboundIPs

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedClusterLoadBalancerProfileManagedOutboundIPs from a JSON string
managed_cluster_load_balancer_profile_managed_outbound_ips_instance = ManagedClusterLoadBalancerProfileManagedOutboundIPs.from_json(json)
# print the JSON string representation of the object
print(ManagedClusterLoadBalancerProfileManagedOutboundIPs.to_json())

# convert the object into a dict
managed_cluster_load_balancer_profile_managed_outbound_ips_dict = managed_cluster_load_balancer_profile_managed_outbound_ips_instance.to_dict()
# create an instance of ManagedClusterLoadBalancerProfileManagedOutboundIPs from a dict
managed_cluster_load_balancer_profile_managed_outbound_ips_from_dict = ManagedClusterLoadBalancerProfileManagedOutboundIPs.from_dict(managed_cluster_load_balancer_profile_managed_outbound_ips_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


