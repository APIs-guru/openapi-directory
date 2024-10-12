# RRSetRoutingPolicy

A RRSetRoutingPolicy represents ResourceRecordSet data that is returned dynamically with the response varying based on configured properties such as geolocation or by weighted random selection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**geo** | [**RRSetRoutingPolicyGeoPolicy**](RRSetRoutingPolicyGeoPolicy.md) |  | [optional] 
**health_check** | **str** | The selfLink attribute of the HealthCheck resource to use for this RRSetRoutingPolicy. https://cloud.google.com/compute/docs/reference/rest/v1/healthChecks | [optional] 
**kind** | **str** |  | [optional] [default to 'dns#rRSetRoutingPolicy']
**primary_backup** | [**RRSetRoutingPolicyPrimaryBackupPolicy**](RRSetRoutingPolicyPrimaryBackupPolicy.md) |  | [optional] 
**wrr** | [**RRSetRoutingPolicyWrrPolicy**](RRSetRoutingPolicyWrrPolicy.md) |  | [optional] 

## Example

```python
from openapi_client.models.rr_set_routing_policy import RRSetRoutingPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of RRSetRoutingPolicy from a JSON string
rr_set_routing_policy_instance = RRSetRoutingPolicy.from_json(json)
# print the JSON string representation of the object
print(RRSetRoutingPolicy.to_json())

# convert the object into a dict
rr_set_routing_policy_dict = rr_set_routing_policy_instance.to_dict()
# create an instance of RRSetRoutingPolicy from a dict
rr_set_routing_policy_from_dict = RRSetRoutingPolicy.from_dict(rr_set_routing_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


