# IntegrationServiceEnvironmentSkuDefinitionSku

The sku.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | [**IntegrationServiceEnvironmentSkuName**](IntegrationServiceEnvironmentSkuName.md) |  | [optional] 
**tier** | **str** | The sku tier. | [optional] 

## Example

```python
from openapi_client.models.integration_service_environment_sku_definition_sku import IntegrationServiceEnvironmentSkuDefinitionSku

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationServiceEnvironmentSkuDefinitionSku from a JSON string
integration_service_environment_sku_definition_sku_instance = IntegrationServiceEnvironmentSkuDefinitionSku.from_json(json)
# print the JSON string representation of the object
print(IntegrationServiceEnvironmentSkuDefinitionSku.to_json())

# convert the object into a dict
integration_service_environment_sku_definition_sku_dict = integration_service_environment_sku_definition_sku_instance.to_dict()
# create an instance of IntegrationServiceEnvironmentSkuDefinitionSku from a dict
integration_service_environment_sku_definition_sku_from_dict = IntegrationServiceEnvironmentSkuDefinitionSku.from_dict(integration_service_environment_sku_definition_sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


