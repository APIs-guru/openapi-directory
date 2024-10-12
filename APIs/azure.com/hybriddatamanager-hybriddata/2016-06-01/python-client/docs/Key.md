# Key

Encryption Key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encryption_chunk_size_in_bytes** | **int** | The maximum byte size that can be encrypted by the key. For a key size larger than the size, break into chunks and encrypt each chunk, append each encrypted chunk with : to mark the end of the chunk. | 
**key_exponent** | **str** | Exponent of the encryption key. | 
**key_modulus** | **str** | Modulus of the encryption key. | 

## Example

```python
from openapi_client.models.key import Key

# TODO update the JSON string below
json = "{}"
# create an instance of Key from a JSON string
key_instance = Key.from_json(json)
# print the JSON string representation of the object
print(Key.to_json())

# convert the object into a dict
key_dict = key_instance.to_dict()
# create an instance of Key from a dict
key_from_dict = Key.from_dict(key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


