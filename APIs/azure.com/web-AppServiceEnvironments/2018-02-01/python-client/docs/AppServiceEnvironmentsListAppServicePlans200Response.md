# AppServiceEnvironmentsListAppServicePlans200Response

Collection of App Service plans.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[AppServiceEnvironmentsListAppServicePlans200ResponseValueInner]**](AppServiceEnvironmentsListAppServicePlans200ResponseValueInner.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.app_service_environments_list_app_service_plans200_response import AppServiceEnvironmentsListAppServicePlans200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AppServiceEnvironmentsListAppServicePlans200Response from a JSON string
app_service_environments_list_app_service_plans200_response_instance = AppServiceEnvironmentsListAppServicePlans200Response.from_json(json)
# print the JSON string representation of the object
print(AppServiceEnvironmentsListAppServicePlans200Response.to_json())

# convert the object into a dict
app_service_environments_list_app_service_plans200_response_dict = app_service_environments_list_app_service_plans200_response_instance.to_dict()
# create an instance of AppServiceEnvironmentsListAppServicePlans200Response from a dict
app_service_environments_list_app_service_plans200_response_from_dict = AppServiceEnvironmentsListAppServicePlans200Response.from_dict(app_service_environments_list_app_service_plans200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


