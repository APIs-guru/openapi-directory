# InputVerifyHash


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**algorithm** | **str** | Hash algorithm | 
**hash** | **str** | Hashed result | 
**input** | **str** | Original source string | 

## Example

```python
from openapi_client.models.input_verify_hash import InputVerifyHash

# TODO update the JSON string below
json = "{}"
# create an instance of InputVerifyHash from a JSON string
input_verify_hash_instance = InputVerifyHash.from_json(json)
# print the JSON string representation of the object
print(InputVerifyHash.to_json())

# convert the object into a dict
input_verify_hash_dict = input_verify_hash_instance.to_dict()
# create an instance of InputVerifyHash from a dict
input_verify_hash_from_dict = InputVerifyHash.from_dict(input_verify_hash_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


