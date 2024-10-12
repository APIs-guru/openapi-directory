# RRSetRoutingPolicyHealthCheckTargets

HealthCheckTargets describes endpoints to health-check when responding to Routing Policy queries. Only the healthy endpoints will be included in the response. Only one of internal_load_balancer and external_endpoints should be set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_endpoints** | **List[str]** | The Internet IP addresses to be health checked. The format matches the format of ResourceRecordSet.rrdata as defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1) | [optional] 
**internal_load_balancers** | [**List[RRSetRoutingPolicyLoadBalancerTarget]**](RRSetRoutingPolicyLoadBalancerTarget.md) | Configuration for internal load balancers to be health checked. | [optional] 

## Example

```python
from openapi_client.models.rr_set_routing_policy_health_check_targets import RRSetRoutingPolicyHealthCheckTargets

# TODO update the JSON string below
json = "{}"
# create an instance of RRSetRoutingPolicyHealthCheckTargets from a JSON string
rr_set_routing_policy_health_check_targets_instance = RRSetRoutingPolicyHealthCheckTargets.from_json(json)
# print the JSON string representation of the object
print(RRSetRoutingPolicyHealthCheckTargets.to_json())

# convert the object into a dict
rr_set_routing_policy_health_check_targets_dict = rr_set_routing_policy_health_check_targets_instance.to_dict()
# create an instance of RRSetRoutingPolicyHealthCheckTargets from a dict
rr_set_routing_policy_health_check_targets_from_dict = RRSetRoutingPolicyHealthCheckTargets.from_dict(rr_set_routing_policy_health_check_targets_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


