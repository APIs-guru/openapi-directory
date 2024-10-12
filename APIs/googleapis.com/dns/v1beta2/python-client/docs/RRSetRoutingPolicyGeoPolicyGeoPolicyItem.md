# RRSetRoutingPolicyGeoPolicyGeoPolicyItem

ResourceRecordSet data for one geo location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**health_checked_targets** | [**RRSetRoutingPolicyHealthCheckTargets**](RRSetRoutingPolicyHealthCheckTargets.md) |  | [optional] 
**kind** | **str** |  | [optional] [default to 'dns#rRSetRoutingPolicyGeoPolicyGeoPolicyItem']
**location** | **str** | The geo-location granularity is a GCP region. This location string should correspond to a GCP region. e.g. \&quot;us-east1\&quot;, \&quot;southamerica-east1\&quot;, \&quot;asia-east1\&quot;, etc. | [optional] 
**rrdatas** | **List[str]** |  | [optional] 
**signature_rrdatas** | **List[str]** | DNSSEC generated signatures for all the rrdata within this item. If health checked targets are provided for DNSSEC enabled zones, there&#39;s a restriction of 1 IP address per item. | [optional] 

## Example

```python
from openapi_client.models.rr_set_routing_policy_geo_policy_geo_policy_item import RRSetRoutingPolicyGeoPolicyGeoPolicyItem

# TODO update the JSON string below
json = "{}"
# create an instance of RRSetRoutingPolicyGeoPolicyGeoPolicyItem from a JSON string
rr_set_routing_policy_geo_policy_geo_policy_item_instance = RRSetRoutingPolicyGeoPolicyGeoPolicyItem.from_json(json)
# print the JSON string representation of the object
print(RRSetRoutingPolicyGeoPolicyGeoPolicyItem.to_json())

# convert the object into a dict
rr_set_routing_policy_geo_policy_geo_policy_item_dict = rr_set_routing_policy_geo_policy_geo_policy_item_instance.to_dict()
# create an instance of RRSetRoutingPolicyGeoPolicyGeoPolicyItem from a dict
rr_set_routing_policy_geo_policy_geo_policy_item_from_dict = RRSetRoutingPolicyGeoPolicyGeoPolicyItem.from_dict(rr_set_routing_policy_geo_policy_geo_policy_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


