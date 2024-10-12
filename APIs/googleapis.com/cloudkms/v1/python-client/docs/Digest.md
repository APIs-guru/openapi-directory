# Digest

A Digest holds a cryptographic message digest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sha256** | **bytearray** | A message digest produced with the SHA-256 algorithm. | [optional] 
**sha384** | **bytearray** | A message digest produced with the SHA-384 algorithm. | [optional] 
**sha512** | **bytearray** | A message digest produced with the SHA-512 algorithm. | [optional] 

## Example

```python
from openapi_client.models.digest import Digest

# TODO update the JSON string below
json = "{}"
# create an instance of Digest from a JSON string
digest_instance = Digest.from_json(json)
# print the JSON string representation of the object
print(Digest.to_json())

# convert the object into a dict
digest_dict = digest_instance.to_dict()
# create an instance of Digest from a dict
digest_from_dict = Digest.from_dict(digest_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


