# ApplianceDefinition

Information about appliance definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ApplianceDefinitionProperties**](ApplianceDefinitionProperties.md) |  | 
**identity** | [**Identity**](Identity.md) |  | [optional] 
**managed_by** | **str** | ID of the resource that manages this resource. | [optional] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**id** | **str** | Resource ID | [optional] [readonly] 
**location** | **str** | Resource location | [optional] 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.appliance_definition import ApplianceDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of ApplianceDefinition from a JSON string
appliance_definition_instance = ApplianceDefinition.from_json(json)
# print the JSON string representation of the object
print(ApplianceDefinition.to_json())

# convert the object into a dict
appliance_definition_dict = appliance_definition_instance.to_dict()
# create an instance of ApplianceDefinition from a dict
appliance_definition_from_dict = ApplianceDefinition.from_dict(appliance_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


