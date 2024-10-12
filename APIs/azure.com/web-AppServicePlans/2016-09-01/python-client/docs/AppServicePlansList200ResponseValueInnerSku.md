# AppServicePlansList200ResponseValueInnerSku

Description of a SKU for a scalable resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capabilities** | [**List[AppServicePlansList200ResponseValueInnerSkuCapabilitiesInner]**](AppServicePlansList200ResponseValueInnerSkuCapabilitiesInner.md) | Capabilities of the SKU, e.g., is traffic manager enabled? | [optional] 
**capacity** | **int** | Current number of instances assigned to the resource. | [optional] 
**family** | **str** | Family code of the resource SKU. | [optional] 
**locations** | **List[str]** | Locations of the SKU. | [optional] 
**name** | **str** | Name of the resource SKU. | [optional] 
**size** | **str** | Size specifier of the resource SKU. | [optional] 
**sku_capacity** | [**AppServicePlansList200ResponseValueInnerSkuSkuCapacity**](AppServicePlansList200ResponseValueInnerSkuSkuCapacity.md) |  | [optional] 
**tier** | **str** | Service tier of the resource SKU. | [optional] 

## Example

```python
from openapi_client.models.app_service_plans_list200_response_value_inner_sku import AppServicePlansList200ResponseValueInnerSku

# TODO update the JSON string below
json = "{}"
# create an instance of AppServicePlansList200ResponseValueInnerSku from a JSON string
app_service_plans_list200_response_value_inner_sku_instance = AppServicePlansList200ResponseValueInnerSku.from_json(json)
# print the JSON string representation of the object
print(AppServicePlansList200ResponseValueInnerSku.to_json())

# convert the object into a dict
app_service_plans_list200_response_value_inner_sku_dict = app_service_plans_list200_response_value_inner_sku_instance.to_dict()
# create an instance of AppServicePlansList200ResponseValueInnerSku from a dict
app_service_plans_list200_response_value_inner_sku_from_dict = AppServicePlansList200ResponseValueInnerSku.from_dict(app_service_plans_list200_response_value_inner_sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


