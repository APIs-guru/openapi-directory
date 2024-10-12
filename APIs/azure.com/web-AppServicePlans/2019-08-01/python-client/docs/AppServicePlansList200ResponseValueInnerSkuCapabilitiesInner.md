# AppServicePlansList200ResponseValueInnerSkuCapabilitiesInner

Describes the capabilities/features allowed for a specific SKU.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the SKU capability. | [optional] 
**reason** | **str** | Reason of the SKU capability. | [optional] 
**value** | **str** | Value of the SKU capability. | [optional] 

## Example

```python
from openapi_client.models.app_service_plans_list200_response_value_inner_sku_capabilities_inner import AppServicePlansList200ResponseValueInnerSkuCapabilitiesInner

# TODO update the JSON string below
json = "{}"
# create an instance of AppServicePlansList200ResponseValueInnerSkuCapabilitiesInner from a JSON string
app_service_plans_list200_response_value_inner_sku_capabilities_inner_instance = AppServicePlansList200ResponseValueInnerSkuCapabilitiesInner.from_json(json)
# print the JSON string representation of the object
print(AppServicePlansList200ResponseValueInnerSkuCapabilitiesInner.to_json())

# convert the object into a dict
app_service_plans_list200_response_value_inner_sku_capabilities_inner_dict = app_service_plans_list200_response_value_inner_sku_capabilities_inner_instance.to_dict()
# create an instance of AppServicePlansList200ResponseValueInnerSkuCapabilitiesInner from a dict
app_service_plans_list200_response_value_inner_sku_capabilities_inner_from_dict = AppServicePlansList200ResponseValueInnerSkuCapabilitiesInner.from_dict(app_service_plans_list200_response_value_inner_sku_capabilities_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


