# ApplicationDefinition

Information about managed application definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ApplicationDefinitionProperties**](ApplicationDefinitionProperties.md) |  | 
**managed_by** | **str** | ID of the resource that manages this resource. | [optional] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**id** | **str** | Resource ID | [optional] [readonly] 
**location** | **str** | Resource location | [optional] 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.application_definition import ApplicationDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationDefinition from a JSON string
application_definition_instance = ApplicationDefinition.from_json(json)
# print the JSON string representation of the object
print(ApplicationDefinition.to_json())

# convert the object into a dict
application_definition_dict = application_definition_instance.to_dict()
# create an instance of ApplicationDefinition from a dict
application_definition_from_dict = ApplicationDefinition.from_dict(application_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


