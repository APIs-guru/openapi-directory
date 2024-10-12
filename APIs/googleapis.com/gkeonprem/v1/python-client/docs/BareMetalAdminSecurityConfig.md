# BareMetalAdminSecurityConfig

Specifies the security related settings for the bare metal admin cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization** | [**Authorization**](Authorization.md) |  | [optional] 

## Example

```python
from openapi_client.models.bare_metal_admin_security_config import BareMetalAdminSecurityConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalAdminSecurityConfig from a JSON string
bare_metal_admin_security_config_instance = BareMetalAdminSecurityConfig.from_json(json)
# print the JSON string representation of the object
print(BareMetalAdminSecurityConfig.to_json())

# convert the object into a dict
bare_metal_admin_security_config_dict = bare_metal_admin_security_config_instance.to_dict()
# create an instance of BareMetalAdminSecurityConfig from a dict
bare_metal_admin_security_config_from_dict = BareMetalAdminSecurityConfig.from_dict(bare_metal_admin_security_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


