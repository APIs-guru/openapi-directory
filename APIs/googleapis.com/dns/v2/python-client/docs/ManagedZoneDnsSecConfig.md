# ManagedZoneDnsSecConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_key_specs** | [**List[DnsKeySpec]**](DnsKeySpec.md) | Specifies parameters for generating initial DnsKeys for this ManagedZone. Can only be changed while the state is OFF. | [optional] 
**kind** | **str** |  | [optional] [default to 'dns#managedZoneDnsSecConfig']
**non_existence** | **str** | Specifies the mechanism for authenticated denial-of-existence responses. Can only be changed while the state is OFF. | [optional] 
**state** | **str** | Specifies whether DNSSEC is enabled, and what mode it is in. | [optional] 

## Example

```python
from openapi_client.models.managed_zone_dns_sec_config import ManagedZoneDnsSecConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedZoneDnsSecConfig from a JSON string
managed_zone_dns_sec_config_instance = ManagedZoneDnsSecConfig.from_json(json)
# print the JSON string representation of the object
print(ManagedZoneDnsSecConfig.to_json())

# convert the object into a dict
managed_zone_dns_sec_config_dict = managed_zone_dns_sec_config_instance.to_dict()
# create an instance of ManagedZoneDnsSecConfig from a dict
managed_zone_dns_sec_config_from_dict = ManagedZoneDnsSecConfig.from_dict(managed_zone_dns_sec_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


