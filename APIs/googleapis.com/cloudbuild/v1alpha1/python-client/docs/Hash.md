# Hash

Container message for hash values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of hash that was performed. | [optional] 
**value** | **bytearray** | The hash value. | [optional] 

## Example

```python
from openapi_client.models.hash import Hash

# TODO update the JSON string below
json = "{}"
# create an instance of Hash from a JSON string
hash_instance = Hash.from_json(json)
# print the JSON string representation of the object
print(Hash.to_json())

# convert the object into a dict
hash_dict = hash_instance.to_dict()
# create an instance of Hash from a dict
hash_from_dict = Hash.from_dict(hash_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


