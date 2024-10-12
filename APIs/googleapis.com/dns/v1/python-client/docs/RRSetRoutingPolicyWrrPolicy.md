# RRSetRoutingPolicyWrrPolicy

Configures a RRSetRoutingPolicy that routes in a weighted round robin fashion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[RRSetRoutingPolicyWrrPolicyWrrPolicyItem]**](RRSetRoutingPolicyWrrPolicyWrrPolicyItem.md) |  | [optional] 
**kind** | **str** |  | [optional] [default to 'dns#rRSetRoutingPolicyWrrPolicy']

## Example

```python
from openapi_client.models.rr_set_routing_policy_wrr_policy import RRSetRoutingPolicyWrrPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of RRSetRoutingPolicyWrrPolicy from a JSON string
rr_set_routing_policy_wrr_policy_instance = RRSetRoutingPolicyWrrPolicy.from_json(json)
# print the JSON string representation of the object
print(RRSetRoutingPolicyWrrPolicy.to_json())

# convert the object into a dict
rr_set_routing_policy_wrr_policy_dict = rr_set_routing_policy_wrr_policy_instance.to_dict()
# create an instance of RRSetRoutingPolicyWrrPolicy from a dict
rr_set_routing_policy_wrr_policy_from_dict = RRSetRoutingPolicyWrrPolicy.from_dict(rr_set_routing_policy_wrr_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


