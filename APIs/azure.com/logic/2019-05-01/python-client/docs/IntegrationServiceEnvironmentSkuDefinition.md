# IntegrationServiceEnvironmentSkuDefinition

The integration service environment sku definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity** | [**IntegrationServiceEnvironmentSkuCapacity**](IntegrationServiceEnvironmentSkuCapacity.md) |  | [optional] 
**resource_type** | **str** | The resource type. | [optional] 
**sku** | [**IntegrationServiceEnvironmentSkuDefinitionSku**](IntegrationServiceEnvironmentSkuDefinitionSku.md) |  | [optional] 

## Example

```python
from openapi_client.models.integration_service_environment_sku_definition import IntegrationServiceEnvironmentSkuDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationServiceEnvironmentSkuDefinition from a JSON string
integration_service_environment_sku_definition_instance = IntegrationServiceEnvironmentSkuDefinition.from_json(json)
# print the JSON string representation of the object
print(IntegrationServiceEnvironmentSkuDefinition.to_json())

# convert the object into a dict
integration_service_environment_sku_definition_dict = integration_service_environment_sku_definition_instance.to_dict()
# create an instance of IntegrationServiceEnvironmentSkuDefinition from a dict
integration_service_environment_sku_definition_from_dict = IntegrationServiceEnvironmentSkuDefinition.from_dict(integration_service_environment_sku_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


