# KeyVerifyResult

The key verify result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **bool** | True if the signature is verified, otherwise false. | [optional] [readonly] 

## Example

```python
from openapi_client.models.key_verify_result import KeyVerifyResult

# TODO update the JSON string below
json = "{}"
# create an instance of KeyVerifyResult from a JSON string
key_verify_result_instance = KeyVerifyResult.from_json(json)
# print the JSON string representation of the object
print(KeyVerifyResult.to_json())

# convert the object into a dict
key_verify_result_dict = key_verify_result_instance.to_dict()
# create an instance of KeyVerifyResult from a dict
key_verify_result_from_dict = KeyVerifyResult.from_dict(key_verify_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


