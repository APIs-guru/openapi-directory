# AppServicePlanPatchResource

ARM resource for a app service plan.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | AppServicePlanPatchResource resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.app_service_plan_patch_resource import AppServicePlanPatchResource

# TODO update the JSON string below
json = "{}"
# create an instance of AppServicePlanPatchResource from a JSON string
app_service_plan_patch_resource_instance = AppServicePlanPatchResource.from_json(json)
# print the JSON string representation of the object
print(AppServicePlanPatchResource.to_json())

# convert the object into a dict
app_service_plan_patch_resource_dict = app_service_plan_patch_resource_instance.to_dict()
# create an instance of AppServicePlanPatchResource from a dict
app_service_plan_patch_resource_from_dict = AppServicePlanPatchResource.from_dict(app_service_plan_patch_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


