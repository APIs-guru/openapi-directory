# RRSetRoutingPolicyGeoPolicy

Configures a RRSetRoutingPolicy that routes based on the geo location of the querying user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_fencing** | **bool** | Without fencing, if health check fails for all configured items in the current geo bucket, we failover to the next nearest geo bucket. With fencing, if health checking is enabled, as long as some targets in the current geo bucket are healthy, we return only the healthy targets. However, if all targets are unhealthy, we don&#39;t failover to the next nearest bucket; instead, we return all the items in the current bucket even when all targets are unhealthy. | [optional] 
**items** | [**List[RRSetRoutingPolicyGeoPolicyGeoPolicyItem]**](RRSetRoutingPolicyGeoPolicyGeoPolicyItem.md) | The primary geo routing configuration. If there are multiple items with the same location, an error is returned instead. | [optional] 
**kind** | **str** |  | [optional] [default to 'dns#rRSetRoutingPolicyGeoPolicy']

## Example

```python
from openapi_client.models.rr_set_routing_policy_geo_policy import RRSetRoutingPolicyGeoPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of RRSetRoutingPolicyGeoPolicy from a JSON string
rr_set_routing_policy_geo_policy_instance = RRSetRoutingPolicyGeoPolicy.from_json(json)
# print the JSON string representation of the object
print(RRSetRoutingPolicyGeoPolicy.to_json())

# convert the object into a dict
rr_set_routing_policy_geo_policy_dict = rr_set_routing_policy_geo_policy_instance.to_dict()
# create an instance of RRSetRoutingPolicyGeoPolicy from a dict
rr_set_routing_policy_geo_policy_from_dict = RRSetRoutingPolicyGeoPolicy.from_dict(rr_set_routing_policy_geo_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


