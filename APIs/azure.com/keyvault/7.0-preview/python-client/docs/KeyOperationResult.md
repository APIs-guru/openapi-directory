# KeyOperationResult

The key operation result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kid** | **str** | Key identifier | [optional] [readonly] 
**value** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.key_operation_result import KeyOperationResult

# TODO update the JSON string below
json = "{}"
# create an instance of KeyOperationResult from a JSON string
key_operation_result_instance = KeyOperationResult.from_json(json)
# print the JSON string representation of the object
print(KeyOperationResult.to_json())

# convert the object into a dict
key_operation_result_dict = key_operation_result_instance.to_dict()
# create an instance of KeyOperationResult from a dict
key_operation_result_from_dict = KeyOperationResult.from_dict(key_operation_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


