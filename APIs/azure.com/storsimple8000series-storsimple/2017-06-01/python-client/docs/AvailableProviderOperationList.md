# AvailableProviderOperationList

List of available provider operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The NextLink. | [optional] 
**value** | [**List[AvailableProviderOperation]**](AvailableProviderOperation.md) | The value. | 

## Example

```python
from openapi_client.models.available_provider_operation_list import AvailableProviderOperationList

# TODO update the JSON string below
json = "{}"
# create an instance of AvailableProviderOperationList from a JSON string
available_provider_operation_list_instance = AvailableProviderOperationList.from_json(json)
# print the JSON string representation of the object
print(AvailableProviderOperationList.to_json())

# convert the object into a dict
available_provider_operation_list_dict = available_provider_operation_list_instance.to_dict()
# create an instance of AvailableProviderOperationList from a dict
available_provider_operation_list_from_dict = AvailableProviderOperationList.from_dict(available_provider_operation_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


