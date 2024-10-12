# AvailableProviderOperations

Class for set of operations used for discovery of available provider operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The NextLink. | [optional] 
**value** | [**List[AvailableProviderOperation]**](AvailableProviderOperation.md) | The value. | 

## Example

```python
from openapi_client.models.available_provider_operations import AvailableProviderOperations

# TODO update the JSON string below
json = "{}"
# create an instance of AvailableProviderOperations from a JSON string
available_provider_operations_instance = AvailableProviderOperations.from_json(json)
# print the JSON string representation of the object
print(AvailableProviderOperations.to_json())

# convert the object into a dict
available_provider_operations_dict = available_provider_operations_instance.to_dict()
# create an instance of AvailableProviderOperations from a dict
available_provider_operations_from_dict = AvailableProviderOperations.from_dict(available_provider_operations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


