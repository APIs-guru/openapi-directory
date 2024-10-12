# SecurityKey

The credential information for a Google registered security key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_nickname** | **str** | The security key nickname explicitly set by the user. | [optional] 
**private_key** | **str** | Hardware-backed private key text in SSH format. | [optional] 
**public_key** | **str** | Public key text in SSH format, defined by [RFC4253](\&quot;https://www.ietf.org/rfc/rfc4253.txt\&quot;) section 6.6. | [optional] 
**universal_two_factor** | [**UniversalTwoFactor**](UniversalTwoFactor.md) |  | [optional] 
**web_authn** | [**WebAuthn**](WebAuthn.md) |  | [optional] 

## Example

```python
from openapi_client.models.security_key import SecurityKey

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityKey from a JSON string
security_key_instance = SecurityKey.from_json(json)
# print the JSON string representation of the object
print(SecurityKey.to_json())

# convert the object into a dict
security_key_dict = security_key_instance.to_dict()
# create an instance of SecurityKey from a dict
security_key_from_dict = SecurityKey.from_dict(security_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


