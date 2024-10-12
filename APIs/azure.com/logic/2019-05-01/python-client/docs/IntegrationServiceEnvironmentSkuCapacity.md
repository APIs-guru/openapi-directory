# IntegrationServiceEnvironmentSkuCapacity

The integration service environment sku capacity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default** | **int** | The default capacity. | [optional] 
**maximum** | **int** | The maximum capacity. | [optional] 
**minimum** | **int** | The minimum capacity. | [optional] 
**scale_type** | [**IntegrationServiceEnvironmentSkuScaleType**](IntegrationServiceEnvironmentSkuScaleType.md) |  | [optional] 

## Example

```python
from openapi_client.models.integration_service_environment_sku_capacity import IntegrationServiceEnvironmentSkuCapacity

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationServiceEnvironmentSkuCapacity from a JSON string
integration_service_environment_sku_capacity_instance = IntegrationServiceEnvironmentSkuCapacity.from_json(json)
# print the JSON string representation of the object
print(IntegrationServiceEnvironmentSkuCapacity.to_json())

# convert the object into a dict
integration_service_environment_sku_capacity_dict = integration_service_environment_sku_capacity_instance.to_dict()
# create an instance of IntegrationServiceEnvironmentSkuCapacity from a dict
integration_service_environment_sku_capacity_from_dict = IntegrationServiceEnvironmentSkuCapacity.from_dict(integration_service_environment_sku_capacity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


