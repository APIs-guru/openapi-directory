# DsaPublicKeyInfo

Information of a DSA public key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_size** | **int** | Key size in bits (size of parameter P). | [optional] 

## Example

```python
from openapi_client.models.dsa_public_key_info import DsaPublicKeyInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DsaPublicKeyInfo from a JSON string
dsa_public_key_info_instance = DsaPublicKeyInfo.from_json(json)
# print the JSON string representation of the object
print(DsaPublicKeyInfo.to_json())

# convert the object into a dict
dsa_public_key_info_dict = dsa_public_key_info_instance.to_dict()
# create an instance of DsaPublicKeyInfo from a dict
dsa_public_key_info_from_dict = DsaPublicKeyInfo.from_dict(dsa_public_key_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


