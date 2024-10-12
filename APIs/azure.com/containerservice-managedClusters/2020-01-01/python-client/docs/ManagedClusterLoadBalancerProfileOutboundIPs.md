# ManagedClusterLoadBalancerProfileOutboundIPs

Desired outbound IP resources for the cluster load balancer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**public_ips** | [**List[ResourceReference]**](ResourceReference.md) | A list of public IP resources. | [optional] 

## Example

```python
from openapi_client.models.managed_cluster_load_balancer_profile_outbound_ips import ManagedClusterLoadBalancerProfileOutboundIPs

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedClusterLoadBalancerProfileOutboundIPs from a JSON string
managed_cluster_load_balancer_profile_outbound_ips_instance = ManagedClusterLoadBalancerProfileOutboundIPs.from_json(json)
# print the JSON string representation of the object
print(ManagedClusterLoadBalancerProfileOutboundIPs.to_json())

# convert the object into a dict
managed_cluster_load_balancer_profile_outbound_ips_dict = managed_cluster_load_balancer_profile_outbound_ips_instance.to_dict()
# create an instance of ManagedClusterLoadBalancerProfileOutboundIPs from a dict
managed_cluster_load_balancer_profile_outbound_ips_from_dict = ManagedClusterLoadBalancerProfileOutboundIPs.from_dict(managed_cluster_load_balancer_profile_outbound_ips_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


