# ResourceProviderOperation

Supported operation of this resource provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | [**ResourceProviderOperationDisplay**](ResourceProviderOperationDisplay.md) |  | [optional] 
**name** | **str** | Operation name, in format of {provider}/{resource}/{operation} | [optional] 

## Example

```python
from openapi_client.models.resource_provider_operation import ResourceProviderOperation

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceProviderOperation from a JSON string
resource_provider_operation_instance = ResourceProviderOperation.from_json(json)
# print the JSON string representation of the object
print(ResourceProviderOperation.to_json())

# convert the object into a dict
resource_provider_operation_dict = resource_provider_operation_instance.to_dict()
# create an instance of ResourceProviderOperation from a dict
resource_provider_operation_from_dict = ResourceProviderOperation.from_dict(resource_provider_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


