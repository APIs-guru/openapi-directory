# ShieldedInstanceConfig

A set of Shielded Instance options.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_secure_boot** | **bool** | Defines whether the instance has Secure Boot enabled. | [optional] 

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


