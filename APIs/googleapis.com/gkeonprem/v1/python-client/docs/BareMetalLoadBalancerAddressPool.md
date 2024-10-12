# BareMetalLoadBalancerAddressPool

Represents an IP pool used by the load balancer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | **List[str]** | Required. The addresses that are part of this pool. Each address must be either in the CIDR form (1.2.3.0/24) or range form (1.2.3.1-1.2.3.5). | [optional] 
**avoid_buggy_ips** | **bool** | If true, avoid using IPs ending in .0 or .255. This avoids buggy consumer devices mistakenly dropping IPv4 traffic for those special IP addresses. | [optional] 
**manual_assign** | **bool** | If true, prevent IP addresses from being automatically assigned. | [optional] 
**pool** | **str** | Required. The name of the address pool. | [optional] 

## Example

```python
from openapi_client.models.bare_metal_load_balancer_address_pool import BareMetalLoadBalancerAddressPool

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalLoadBalancerAddressPool from a JSON string
bare_metal_load_balancer_address_pool_instance = BareMetalLoadBalancerAddressPool.from_json(json)
# print the JSON string representation of the object
print(BareMetalLoadBalancerAddressPool.to_json())

# convert the object into a dict
bare_metal_load_balancer_address_pool_dict = bare_metal_load_balancer_address_pool_instance.to_dict()
# create an instance of BareMetalLoadBalancerAddressPool from a dict
bare_metal_load_balancer_address_pool_from_dict = BareMetalLoadBalancerAddressPool.from_dict(bare_metal_load_balancer_address_pool_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


