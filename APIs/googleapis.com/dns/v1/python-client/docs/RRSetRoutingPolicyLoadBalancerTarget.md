# RRSetRoutingPolicyLoadBalancerTarget

The configuration for an individual load balancer to health check.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_address** | **str** | The frontend IP address of the load balancer to health check. | [optional] 
**ip_protocol** | **str** | The protocol of the load balancer to health check. | [optional] 
**kind** | **str** |  | [optional] [default to 'dns#rRSetRoutingPolicyLoadBalancerTarget']
**load_balancer_type** | **str** | The type of load balancer specified by this target. This value must match the configuration of the load balancer located at the LoadBalancerTarget&#39;s IP address, port, and region. Use the following: - *regionalL4ilb*: for a regional internal passthrough Network Load Balancer. - *regionalL7ilb*: for a regional internal Application Load Balancer. - *globalL7ilb*: for a global internal Application Load Balancer.  | [optional] 
**network_url** | **str** | The fully qualified URL of the network that the load balancer is attached to. This should be formatted like https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network} . | [optional] 
**port** | **str** | The configured port of the load balancer. | [optional] 
**project** | **str** | The project ID in which the load balancer is located. | [optional] 
**region** | **str** | The region in which the load balancer is located. | [optional] 

## Example

```python
from openapi_client.models.rr_set_routing_policy_load_balancer_target import RRSetRoutingPolicyLoadBalancerTarget

# TODO update the JSON string below
json = "{}"
# create an instance of RRSetRoutingPolicyLoadBalancerTarget from a JSON string
rr_set_routing_policy_load_balancer_target_instance = RRSetRoutingPolicyLoadBalancerTarget.from_json(json)
# print the JSON string representation of the object
print(RRSetRoutingPolicyLoadBalancerTarget.to_json())

# convert the object into a dict
rr_set_routing_policy_load_balancer_target_dict = rr_set_routing_policy_load_balancer_target_instance.to_dict()
# create an instance of RRSetRoutingPolicyLoadBalancerTarget from a dict
rr_set_routing_policy_load_balancer_target_from_dict = RRSetRoutingPolicyLoadBalancerTarget.from_dict(rr_set_routing_policy_load_balancer_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


