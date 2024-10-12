# AppServicePlansList200ResponseValueInner

App Service plan.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AppServicePlansList200ResponseValueInnerProperties**](AppServicePlansList200ResponseValueInnerProperties.md) |  | [optional] 
**sku** | [**AppServicePlansList200ResponseValueInnerSku**](AppServicePlansList200ResponseValueInnerSku.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_service_plans_list200_response_value_inner import AppServicePlansList200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of AppServicePlansList200ResponseValueInner from a JSON string
app_service_plans_list200_response_value_inner_instance = AppServicePlansList200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(AppServicePlansList200ResponseValueInner.to_json())

# convert the object into a dict
app_service_plans_list200_response_value_inner_dict = app_service_plans_list200_response_value_inner_instance.to_dict()
# create an instance of AppServicePlansList200ResponseValueInner from a dict
app_service_plans_list200_response_value_inner_from_dict = AppServicePlansList200ResponseValueInner.from_dict(app_service_plans_list200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


