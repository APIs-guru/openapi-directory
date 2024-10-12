# AppServiceEnvironmentsListAppServicePlans200ResponseValueInnerSkuSkuCapacity

Description of the App Service plan scale options.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default** | **int** | Default number of workers for this App Service plan SKU. | [optional] 
**maximum** | **int** | Maximum number of workers for this App Service plan SKU. | [optional] 
**minimum** | **int** | Minimum number of workers for this App Service plan SKU. | [optional] 
**scale_type** | **str** | Available scale configurations for an App Service plan. | [optional] 

## Example

```python
from openapi_client.models.app_service_environments_list_app_service_plans200_response_value_inner_sku_sku_capacity import AppServiceEnvironmentsListAppServicePlans200ResponseValueInnerSkuSkuCapacity

# TODO update the JSON string below
json = "{}"
# create an instance of AppServiceEnvironmentsListAppServicePlans200ResponseValueInnerSkuSkuCapacity from a JSON string
app_service_environments_list_app_service_plans200_response_value_inner_sku_sku_capacity_instance = AppServiceEnvironmentsListAppServicePlans200ResponseValueInnerSkuSkuCapacity.from_json(json)
# print the JSON string representation of the object
print(AppServiceEnvironmentsListAppServicePlans200ResponseValueInnerSkuSkuCapacity.to_json())

# convert the object into a dict
app_service_environments_list_app_service_plans200_response_value_inner_sku_sku_capacity_dict = app_service_environments_list_app_service_plans200_response_value_inner_sku_sku_capacity_instance.to_dict()
# create an instance of AppServiceEnvironmentsListAppServicePlans200ResponseValueInnerSkuSkuCapacity from a dict
app_service_environments_list_app_service_plans200_response_value_inner_sku_sku_capacity_from_dict = AppServiceEnvironmentsListAppServicePlans200ResponseValueInnerSkuSkuCapacity.from_dict(app_service_environments_list_app_service_plans200_response_value_inner_sku_sku_capacity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


