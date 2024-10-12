# ManagedZoneForwardingConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | [optional] [default to 'dns#managedZoneForwardingConfig']
**target_name_servers** | [**List[ManagedZoneForwardingConfigNameServerTarget]**](ManagedZoneForwardingConfigNameServerTarget.md) | List of target name servers to forward to. Cloud DNS selects the best available name server if more than one target is given. | [optional] 

## Example

```python
from openapi_client.models.managed_zone_forwarding_config import ManagedZoneForwardingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedZoneForwardingConfig from a JSON string
managed_zone_forwarding_config_instance = ManagedZoneForwardingConfig.from_json(json)
# print the JSON string representation of the object
print(ManagedZoneForwardingConfig.to_json())

# convert the object into a dict
managed_zone_forwarding_config_dict = managed_zone_forwarding_config_instance.to_dict()
# create an instance of ManagedZoneForwardingConfig from a dict
managed_zone_forwarding_config_from_dict = ManagedZoneForwardingConfig.from_dict(managed_zone_forwarding_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


