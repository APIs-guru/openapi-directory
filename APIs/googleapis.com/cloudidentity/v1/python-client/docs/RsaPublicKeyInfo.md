# RsaPublicKeyInfo

Information of a RSA public key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_size** | **int** | Key size in bits (size of the modulus). | [optional] 

## Example

```python
from openapi_client.models.rsa_public_key_info import RsaPublicKeyInfo

# TODO update the JSON string below
json = "{}"
# create an instance of RsaPublicKeyInfo from a JSON string
rsa_public_key_info_instance = RsaPublicKeyInfo.from_json(json)
# print the JSON string representation of the object
print(RsaPublicKeyInfo.to_json())

# convert the object into a dict
rsa_public_key_info_dict = rsa_public_key_info_instance.to_dict()
# create an instance of RsaPublicKeyInfo from a dict
rsa_public_key_info_from_dict = RsaPublicKeyInfo.from_dict(rsa_public_key_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


