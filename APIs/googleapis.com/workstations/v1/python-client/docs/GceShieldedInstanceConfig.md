# GceShieldedInstanceConfig

A set of Compute Engine Shielded instance options.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_integrity_monitoring** | **bool** | Optional. Whether the instance has integrity monitoring enabled. | [optional] 
**enable_secure_boot** | **bool** | Optional. Whether the instance has Secure Boot enabled. | [optional] 
**enable_vtpm** | **bool** | Optional. Whether the instance has the vTPM enabled. | [optional] 

## Example

```python
from openapi_client.models.gce_shielded_instance_config import GceShieldedInstanceConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GceShieldedInstanceConfig from a JSON string
gce_shielded_instance_config_instance = GceShieldedInstanceConfig.from_json(json)
# print the JSON string representation of the object
print(GceShieldedInstanceConfig.to_json())

# convert the object into a dict
gce_shielded_instance_config_dict = gce_shielded_instance_config_instance.to_dict()
# create an instance of GceShieldedInstanceConfig from a dict
gce_shielded_instance_config_from_dict = GceShieldedInstanceConfig.from_dict(gce_shielded_instance_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


