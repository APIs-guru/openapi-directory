# KeyProperties

Properties of the key pair backing a certificate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crv** | **str** | Elliptic curve name. For valid values, see JsonWebKeyCurveName. | [optional] 
**exportable** | **bool** | Indicates if the private key can be exported. | [optional] 
**key_size** | **int** | The key size in bits. For example: 2048, 3072, or 4096 for RSA. | [optional] 
**kty** | **str** | The type of key pair to be used for the certificate. | [optional] 
**reuse_key** | **bool** | Indicates if the same key pair will be used on certificate renewal. | [optional] 

## Example

```python
from openapi_client.models.key_properties import KeyProperties

# TODO update the JSON string below
json = "{}"
# create an instance of KeyProperties from a JSON string
key_properties_instance = KeyProperties.from_json(json)
# print the JSON string representation of the object
print(KeyProperties.to_json())

# convert the object into a dict
key_properties_dict = key_properties_instance.to_dict()
# create an instance of KeyProperties from a dict
key_properties_from_dict = KeyProperties.from_dict(key_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


