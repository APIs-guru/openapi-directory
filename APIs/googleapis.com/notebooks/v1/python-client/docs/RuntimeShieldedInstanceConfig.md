# RuntimeShieldedInstanceConfig

A set of Shielded Instance options. See [Images using supported Shielded VM features](https://cloud.google.com/compute/docs/instances/modifying-shielded-vm). Not all combinations are valid.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_integrity_monitoring** | **bool** | Defines whether the instance has integrity monitoring enabled. Enables monitoring and attestation of the boot integrity of the instance. The attestation is performed against the integrity policy baseline. This baseline is initially derived from the implicitly trusted boot image when the instance is created. Enabled by default. | [optional] 
**enable_secure_boot** | **bool** | Defines whether the instance has Secure Boot enabled. Secure Boot helps ensure that the system only runs authentic software by verifying the digital signature of all boot components, and halting the boot process if signature verification fails. Disabled by default. | [optional] 
**enable_vtpm** | **bool** | Defines whether the instance has the vTPM enabled. Enabled by default. | [optional] 

## Example

```python
from openapi_client.models.runtime_shielded_instance_config import RuntimeShieldedInstanceConfig

# TODO update the JSON string below
json = "{}"
# create an instance of RuntimeShieldedInstanceConfig from a JSON string
runtime_shielded_instance_config_instance = RuntimeShieldedInstanceConfig.from_json(json)
# print the JSON string representation of the object
print(RuntimeShieldedInstanceConfig.to_json())

# convert the object into a dict
runtime_shielded_instance_config_dict = runtime_shielded_instance_config_instance.to_dict()
# create an instance of RuntimeShieldedInstanceConfig from a dict
runtime_shielded_instance_config_from_dict = RuntimeShieldedInstanceConfig.from_dict(runtime_shielded_instance_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


