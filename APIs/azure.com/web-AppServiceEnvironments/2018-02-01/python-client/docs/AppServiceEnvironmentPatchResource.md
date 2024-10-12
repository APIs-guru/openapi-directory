# AppServiceEnvironmentPatchResource

ARM resource for a app service environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | Description of an App Service Environment. | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.app_service_environment_patch_resource import AppServiceEnvironmentPatchResource

# TODO update the JSON string below
json = "{}"
# create an instance of AppServiceEnvironmentPatchResource from a JSON string
app_service_environment_patch_resource_instance = AppServiceEnvironmentPatchResource.from_json(json)
# print the JSON string representation of the object
print(AppServiceEnvironmentPatchResource.to_json())

# convert the object into a dict
app_service_environment_patch_resource_dict = app_service_environment_patch_resource_instance.to_dict()
# create an instance of AppServiceEnvironmentPatchResource from a dict
app_service_environment_patch_resource_from_dict = AppServiceEnvironmentPatchResource.from_dict(app_service_environment_patch_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


