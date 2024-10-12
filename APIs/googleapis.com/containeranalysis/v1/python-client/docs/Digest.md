# Digest

Digest information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**algo** | **str** | &#x60;SHA1&#x60;, &#x60;SHA512&#x60; etc. | [optional] 
**digest_bytes** | **bytearray** | Value of the digest. | [optional] 

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


