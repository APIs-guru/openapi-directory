# ManagedZonePeeringConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | [optional] [default to 'dns#managedZonePeeringConfig']
**target_network** | [**ManagedZonePeeringConfigTargetNetwork**](ManagedZonePeeringConfigTargetNetwork.md) |  | [optional] 

## Example

```python
from openapi_client.models.managed_zone_peering_config import ManagedZonePeeringConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedZonePeeringConfig from a JSON string
managed_zone_peering_config_instance = ManagedZonePeeringConfig.from_json(json)
# print the JSON string representation of the object
print(ManagedZonePeeringConfig.to_json())

# convert the object into a dict
managed_zone_peering_config_dict = managed_zone_peering_config_instance.to_dict()
# create an instance of ManagedZonePeeringConfig from a dict
managed_zone_peering_config_from_dict = ManagedZonePeeringConfig.from_dict(managed_zone_peering_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


