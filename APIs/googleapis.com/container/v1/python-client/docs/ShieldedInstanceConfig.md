# ShieldedInstanceConfig

A set of Shielded Instance options.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_integrity_monitoring** | **bool** | Defines whether the instance has integrity monitoring enabled. Enables monitoring and attestation of the boot integrity of the instance. The attestation is performed against the integrity policy baseline. This baseline is initially derived from the implicitly trusted boot image when the instance is created. | [optional] 
**enable_secure_boot** | **bool** | Defines whether the instance has Secure Boot enabled. Secure Boot helps ensure that the system only runs authentic software by verifying the digital signature of all boot components, and halting the boot process if signature verification fails. | [optional] 

## Example

```python
from openapi_client.models.shielded_instance_config import ShieldedInstanceConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ShieldedInstanceConfig from a JSON string
shielded_instance_config_instance = ShieldedInstanceConfig.from_json(json)
# print the JSON string representation of the object
print(ShieldedInstanceConfig.to_json())

# convert the object into a dict
shielded_instance_config_dict = shielded_instance_config_instance.to_dict()
# create an instance of ShieldedInstanceConfig from a dict
shielded_instance_config_from_dict = ShieldedInstanceConfig.from_dict(shielded_instance_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


