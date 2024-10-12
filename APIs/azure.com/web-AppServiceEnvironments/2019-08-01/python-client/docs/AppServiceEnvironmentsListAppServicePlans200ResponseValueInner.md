# AppServiceEnvironmentsListAppServicePlans200ResponseValueInner

App Service plan.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AppServiceEnvironmentsListAppServicePlans200ResponseValueInnerProperties**](AppServiceEnvironmentsListAppServicePlans200ResponseValueInnerProperties.md) |  | [optional] 
**sku** | [**AppServiceEnvironmentsListAppServicePlans200ResponseValueInnerSku**](AppServiceEnvironmentsListAppServicePlans200ResponseValueInnerSku.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_service_environments_list_app_service_plans200_response_value_inner import AppServiceEnvironmentsListAppServicePlans200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of AppServiceEnvironmentsListAppServicePlans200ResponseValueInner from a JSON string
app_service_environments_list_app_service_plans200_response_value_inner_instance = AppServiceEnvironmentsListAppServicePlans200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(AppServiceEnvironmentsListAppServicePlans200ResponseValueInner.to_json())

# convert the object into a dict
app_service_environments_list_app_service_plans200_response_value_inner_dict = app_service_environments_list_app_service_plans200_response_value_inner_instance.to_dict()
# create an instance of AppServiceEnvironmentsListAppServicePlans200ResponseValueInner from a dict
app_service_environments_list_app_service_plans200_response_value_inner_from_dict = AppServiceEnvironmentsListAppServicePlans200ResponseValueInner.from_dict(app_service_environments_list_app_service_plans200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


