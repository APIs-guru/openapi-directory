# ManagedZonePeeringConfigTargetNetwork


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deactivate_time** | **str** | The time at which the zone was deactivated, in RFC 3339 date-time format. An empty string indicates that the peering connection is active. The producer network can deactivate a zone. The zone is automatically deactivated if the producer network that the zone targeted is deleted. Output only. | [optional] 
**kind** | **str** |  | [optional] [default to 'dns#managedZonePeeringConfigTargetNetwork']
**network_url** | **str** | The fully qualified URL of the VPC network to forward queries to. This should be formatted like https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network} | [optional] 

## Example

```python
from openapi_client.models.managed_zone_peering_config_target_network import ManagedZonePeeringConfigTargetNetwork

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedZonePeeringConfigTargetNetwork from a JSON string
managed_zone_peering_config_target_network_instance = ManagedZonePeeringConfigTargetNetwork.from_json(json)
# print the JSON string representation of the object
print(ManagedZonePeeringConfigTargetNetwork.to_json())

# convert the object into a dict
managed_zone_peering_config_target_network_dict = managed_zone_peering_config_target_network_instance.to_dict()
# create an instance of ManagedZonePeeringConfigTargetNetwork from a dict
managed_zone_peering_config_target_network_from_dict = ManagedZonePeeringConfigTargetNetwork.from_dict(managed_zone_peering_config_target_network_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


