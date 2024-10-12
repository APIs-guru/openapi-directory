# AppServicePlansGet200Response

App Service plan.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AppServicePlansList200ResponseValueInnerProperties**](AppServicePlansList200ResponseValueInnerProperties.md) |  | [optional] 
**sku** | [**AppServicePlansList200ResponseValueInnerSku**](AppServicePlansList200ResponseValueInnerSku.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**location** | **str** | Resource Location. | 
**name** | **str** | Resource Name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.app_service_plans_get200_response import AppServicePlansGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AppServicePlansGet200Response from a JSON string
app_service_plans_get200_response_instance = AppServicePlansGet200Response.from_json(json)
# print the JSON string representation of the object
print(AppServicePlansGet200Response.to_json())

# convert the object into a dict
app_service_plans_get200_response_dict = app_service_plans_get200_response_instance.to_dict()
# create an instance of AppServicePlansGet200Response from a dict
app_service_plans_get200_response_from_dict = AppServicePlansGet200Response.from_dict(app_service_plans_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


