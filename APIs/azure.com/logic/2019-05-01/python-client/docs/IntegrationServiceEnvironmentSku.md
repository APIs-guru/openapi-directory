# IntegrationServiceEnvironmentSku

The integration service environment sku.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity** | **int** | The sku capacity. | [optional] 
**name** | [**IntegrationServiceEnvironmentSkuName**](IntegrationServiceEnvironmentSkuName.md) |  | [optional] 

## Example

```python
from openapi_client.models.integration_service_environment_sku import IntegrationServiceEnvironmentSku

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationServiceEnvironmentSku from a JSON string
integration_service_environment_sku_instance = IntegrationServiceEnvironmentSku.from_json(json)
# print the JSON string representation of the object
print(IntegrationServiceEnvironmentSku.to_json())

# convert the object into a dict
integration_service_environment_sku_dict = integration_service_environment_sku_instance.to_dict()
# create an instance of IntegrationServiceEnvironmentSku from a dict
integration_service_environment_sku_from_dict = IntegrationServiceEnvironmentSku.from_dict(integration_service_environment_sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


