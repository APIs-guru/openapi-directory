# KeyId

A KeyId identifies a specific public key, usually by hashing the public key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_id** | **str** | Optional. The value of this KeyId encoded in lowercase hexadecimal. This is most likely the 160 bit SHA-1 hash of the public key. | [optional] 

## Example

```python
from openapi_client.models.key_id import KeyId

# TODO update the JSON string below
json = "{}"
# create an instance of KeyId from a JSON string
key_id_instance = KeyId.from_json(json)
# print the JSON string representation of the object
print(KeyId.to_json())

# convert the object into a dict
key_id_dict = key_id_instance.to_dict()
# create an instance of KeyId from a dict
key_id_from_dict = KeyId.from_dict(key_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


