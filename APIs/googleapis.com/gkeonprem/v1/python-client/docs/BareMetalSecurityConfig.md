# BareMetalSecurityConfig

Specifies the security related settings for the bare metal user cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization** | [**Authorization**](Authorization.md) |  | [optional] 

## Example

```python
from openapi_client.models.bare_metal_security_config import BareMetalSecurityConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalSecurityConfig from a JSON string
bare_metal_security_config_instance = BareMetalSecurityConfig.from_json(json)
# print the JSON string representation of the object
print(BareMetalSecurityConfig.to_json())

# convert the object into a dict
bare_metal_security_config_dict = bare_metal_security_config_instance.to_dict()
# create an instance of BareMetalSecurityConfig from a dict
bare_metal_security_config_from_dict = BareMetalSecurityConfig.from_dict(bare_metal_security_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


