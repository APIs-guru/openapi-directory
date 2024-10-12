# KeyOperationsParameters

The key operations parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alg** | **str** | algorithm identifier | 
**value** | **str** |  | 

## Example

```python
from openapi_client.models.key_operations_parameters import KeyOperationsParameters

# TODO update the JSON string below
json = "{}"
# create an instance of KeyOperationsParameters from a JSON string
key_operations_parameters_instance = KeyOperationsParameters.from_json(json)
# print the JSON string representation of the object
print(KeyOperationsParameters.to_json())

# convert the object into a dict
key_operations_parameters_dict = key_operations_parameters_instance.to_dict()
# create an instance of KeyOperationsParameters from a dict
key_operations_parameters_from_dict = KeyOperationsParameters.from_dict(key_operations_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


