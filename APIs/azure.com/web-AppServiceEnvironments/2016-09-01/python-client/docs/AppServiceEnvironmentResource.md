# AppServiceEnvironmentResource

App Service Environment ARM resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | Description of an App Service Environment. | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**location** | **str** | Resource Location. | 
**name** | **str** | Resource Name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.app_service_environment_resource import AppServiceEnvironmentResource

# TODO update the JSON string below
json = "{}"
# create an instance of AppServiceEnvironmentResource from a JSON string
app_service_environment_resource_instance = AppServiceEnvironmentResource.from_json(json)
# print the JSON string representation of the object
print(AppServiceEnvironmentResource.to_json())

# convert the object into a dict
app_service_environment_resource_dict = app_service_environment_resource_instance.to_dict()
# create an instance of AppServiceEnvironmentResource from a dict
app_service_environment_resource_from_dict = AppServiceEnvironmentResource.from_dict(app_service_environment_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


