# ManagedZoneReverseLookupConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** |  | [optional] [default to 'dns#managedZoneReverseLookupConfig']

## Example

```python
from openapi_client.models.managed_zone_reverse_lookup_config import ManagedZoneReverseLookupConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedZoneReverseLookupConfig from a JSON string
managed_zone_reverse_lookup_config_instance = ManagedZoneReverseLookupConfig.from_json(json)
# print the JSON string representation of the object
print(ManagedZoneReverseLookupConfig.to_json())

# convert the object into a dict
managed_zone_reverse_lookup_config_dict = managed_zone_reverse_lookup_config_instance.to_dict()
# create an instance of ManagedZoneReverseLookupConfig from a dict
managed_zone_reverse_lookup_config_from_dict = ManagedZoneReverseLookupConfig.from_dict(managed_zone_reverse_lookup_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


