# RRSetRoutingPolicyPrimaryBackupPolicy

Configures a RRSetRoutingPolicy such that all queries are responded with the primary_targets if they are healthy. And if all of them are unhealthy, then we fallback to a geo localized policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_geo_targets** | [**RRSetRoutingPolicyGeoPolicy**](RRSetRoutingPolicyGeoPolicy.md) |  | [optional] 
**kind** | **str** |  | [optional] [default to 'dns#rRSetRoutingPolicyPrimaryBackupPolicy']
**primary_targets** | [**RRSetRoutingPolicyHealthCheckTargets**](RRSetRoutingPolicyHealthCheckTargets.md) |  | [optional] 
**trickle_traffic** | **float** | When serving state is PRIMARY, this field provides the option of sending a small percentage of the traffic to the backup targets. | [optional] 

## Example

```python
from openapi_client.models.rr_set_routing_policy_primary_backup_policy import RRSetRoutingPolicyPrimaryBackupPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of RRSetRoutingPolicyPrimaryBackupPolicy from a JSON string
rr_set_routing_policy_primary_backup_policy_instance = RRSetRoutingPolicyPrimaryBackupPolicy.from_json(json)
# print the JSON string representation of the object
print(RRSetRoutingPolicyPrimaryBackupPolicy.to_json())

# convert the object into a dict
rr_set_routing_policy_primary_backup_policy_dict = rr_set_routing_policy_primary_backup_policy_instance.to_dict()
# create an instance of RRSetRoutingPolicyPrimaryBackupPolicy from a dict
rr_set_routing_policy_primary_backup_policy_from_dict = RRSetRoutingPolicyPrimaryBackupPolicy.from_dict(rr_set_routing_policy_primary_backup_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


