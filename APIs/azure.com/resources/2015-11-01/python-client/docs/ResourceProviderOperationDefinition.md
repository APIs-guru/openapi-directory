# ResourceProviderOperationDefinition

Resource provider operation information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | [**ResourceProviderOperationDisplayProperties**](ResourceProviderOperationDisplayProperties.md) |  | [optional] 
**name** | **str** | Gets or sets the provider operation name. | [optional] 

## Example

```python
from openapi_client.models.resource_provider_operation_definition import ResourceProviderOperationDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceProviderOperationDefinition from a JSON string
resource_provider_operation_definition_instance = ResourceProviderOperationDefinition.from_json(json)
# print the JSON string representation of the object
print(ResourceProviderOperationDefinition.to_json())

# convert the object into a dict
resource_provider_operation_definition_dict = resource_provider_operation_definition_instance.to_dict()
# create an instance of ResourceProviderOperationDefinition from a dict
resource_provider_operation_definition_from_dict = ResourceProviderOperationDefinition.from_dict(resource_provider_operation_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


