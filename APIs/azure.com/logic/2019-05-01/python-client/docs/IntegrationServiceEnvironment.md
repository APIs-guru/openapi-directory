# IntegrationServiceEnvironment

The integration service environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**IntegrationServiceEnvironmentProperties**](IntegrationServiceEnvironmentProperties.md) |  | [optional] 
**sku** | [**IntegrationServiceEnvironmentSku**](IntegrationServiceEnvironmentSku.md) |  | [optional] 
**id** | **str** | The resource id. | [optional] [readonly] 
**location** | **str** | The resource location. | [optional] 
**name** | **str** | Gets the resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The resource tags. | [optional] 
**type** | **str** | Gets the resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.integration_service_environment import IntegrationServiceEnvironment

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationServiceEnvironment from a JSON string
integration_service_environment_instance = IntegrationServiceEnvironment.from_json(json)
# print the JSON string representation of the object
print(IntegrationServiceEnvironment.to_json())

# convert the object into a dict
integration_service_environment_dict = integration_service_environment_instance.to_dict()
# create an instance of IntegrationServiceEnvironment from a dict
integration_service_environment_from_dict = IntegrationServiceEnvironment.from_dict(integration_service_environment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


