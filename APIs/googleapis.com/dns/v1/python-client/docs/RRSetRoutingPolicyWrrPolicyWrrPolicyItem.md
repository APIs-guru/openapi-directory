# RRSetRoutingPolicyWrrPolicyWrrPolicyItem

A routing block which contains the routing information for one WRR item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**health_checked_targets** | [**RRSetRoutingPolicyHealthCheckTargets**](RRSetRoutingPolicyHealthCheckTargets.md) |  | [optional] 
**kind** | **str** |  | [optional] [default to 'dns#rRSetRoutingPolicyWrrPolicyWrrPolicyItem']
**rrdatas** | **List[str]** |  | [optional] 
**signature_rrdatas** | **List[str]** | DNSSEC generated signatures for all the rrdata within this item. Note that if health checked targets are provided for DNSSEC enabled zones, there&#39;s a restriction of 1 IP address per item. | [optional] 
**weight** | **float** | The weight corresponding to this WrrPolicyItem object. When multiple WrrPolicyItem objects are configured, the probability of returning an WrrPolicyItem object&#39;s data is proportional to its weight relative to the sum of weights configured for all items. This weight must be non-negative. | [optional] 

## Example

```python
from openapi_client.models.rr_set_routing_policy_wrr_policy_wrr_policy_item import RRSetRoutingPolicyWrrPolicyWrrPolicyItem

# TODO update the JSON string below
json = "{}"
# create an instance of RRSetRoutingPolicyWrrPolicyWrrPolicyItem from a JSON string
rr_set_routing_policy_wrr_policy_wrr_policy_item_instance = RRSetRoutingPolicyWrrPolicyWrrPolicyItem.from_json(json)
# print the JSON string representation of the object
print(RRSetRoutingPolicyWrrPolicyWrrPolicyItem.to_json())

# convert the object into a dict
rr_set_routing_policy_wrr_policy_wrr_policy_item_dict = rr_set_routing_policy_wrr_policy_wrr_policy_item_instance.to_dict()
# create an instance of RRSetRoutingPolicyWrrPolicyWrrPolicyItem from a dict
rr_set_routing_policy_wrr_policy_wrr_policy_item_from_dict = RRSetRoutingPolicyWrrPolicyWrrPolicyItem.from_dict(rr_set_routing_policy_wrr_policy_wrr_policy_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


