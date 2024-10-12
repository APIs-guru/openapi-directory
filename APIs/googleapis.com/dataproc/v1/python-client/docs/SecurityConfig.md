# SecurityConfig

Security related configuration, including encryption, Kerberos, etc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_config** | [**IdentityConfig**](IdentityConfig.md) |  | [optional] 
**kerberos_config** | [**KerberosConfig**](KerberosConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.security_config import SecurityConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityConfig from a JSON string
security_config_instance = SecurityConfig.from_json(json)
# print the JSON string representation of the object
print(SecurityConfig.to_json())

# convert the object into a dict
security_config_dict = security_config_instance.to_dict()
# create an instance of SecurityConfig from a dict
security_config_from_dict = SecurityConfig.from_dict(security_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


