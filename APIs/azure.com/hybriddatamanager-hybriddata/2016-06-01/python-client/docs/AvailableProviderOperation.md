# AvailableProviderOperation

Class represents provider operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | [**AvailableProviderOperationDisplay**](AvailableProviderOperationDisplay.md) |  | [optional] 
**name** | **str** | Gets or Sets Name of the operations | 
**origin** | **str** | Gets or sets Origin  The intended executor of the operation; governs the display of the operation in the RBAC UX and the audit logs UX.  Default value is “user,system” | [optional] 
**properties** | **object** | Class represents Properties in AvailableProviderOperations | [optional] 

## Example

```python
from openapi_client.models.available_provider_operation import AvailableProviderOperation

# TODO update the JSON string below
json = "{}"
# create an instance of AvailableProviderOperation from a JSON string
available_provider_operation_instance = AvailableProviderOperation.from_json(json)
# print the JSON string representation of the object
print(AvailableProviderOperation.to_json())

# convert the object into a dict
available_provider_operation_dict = available_provider_operation_instance.to_dict()
# create an instance of AvailableProviderOperation from a dict
available_provider_operation_from_dict = AvailableProviderOperation.from_dict(available_provider_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


