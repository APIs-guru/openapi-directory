# IntegrationResource

IoTHub integration resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**IntegrationResourceProperties**](IntegrationResourceProperties.md) |  | [optional] 
**id** | **str** | The resource identifier. | [optional] [readonly] 
**name** | **str** | Extension resource name. | [optional] [readonly] 
**type** | **str** | The resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.integration_resource import IntegrationResource

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationResource from a JSON string
integration_resource_instance = IntegrationResource.from_json(json)
# print the JSON string representation of the object
print(IntegrationResource.to_json())

# convert the object into a dict
integration_resource_dict = integration_resource_instance.to_dict()
# create an instance of IntegrationResource from a dict
integration_resource_from_dict = IntegrationResource.from_dict(integration_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


