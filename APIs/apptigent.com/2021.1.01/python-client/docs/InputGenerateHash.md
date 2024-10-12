# InputGenerateHash


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**algorithm** | **str** | Hash algorithm | 
**input** | **str** | Hash source string | 

## Example

```python
from openapi_client.models.input_generate_hash import InputGenerateHash

# TODO update the JSON string below
json = "{}"
# create an instance of InputGenerateHash from a JSON string
input_generate_hash_instance = InputGenerateHash.from_json(json)
# print the JSON string representation of the object
print(InputGenerateHash.to_json())

# convert the object into a dict
input_generate_hash_dict = input_generate_hash_instance.to_dict()
# create an instance of InputGenerateHash from a dict
input_generate_hash_from_dict = InputGenerateHash.from_dict(input_generate_hash_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


