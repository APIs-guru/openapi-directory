# IntegrationServiceEnvironmentSkuList

The list of integration service environment skus.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] 
**value** | [**List[IntegrationServiceEnvironmentSkuDefinition]**](IntegrationServiceEnvironmentSkuDefinition.md) | The list of integration service environment skus. | [optional] 

## Example

```python
from openapi_client.models.integration_service_environment_sku_list import IntegrationServiceEnvironmentSkuList

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationServiceEnvironmentSkuList from a JSON string
integration_service_environment_sku_list_instance = IntegrationServiceEnvironmentSkuList.from_json(json)
# print the JSON string representation of the object
print(IntegrationServiceEnvironmentSkuList.to_json())

# convert the object into a dict
integration_service_environment_sku_list_dict = integration_service_environment_sku_list_instance.to_dict()
# create an instance of IntegrationServiceEnvironmentSkuList from a dict
integration_service_environment_sku_list_from_dict = IntegrationServiceEnvironmentSkuList.from_dict(integration_service_environment_sku_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


