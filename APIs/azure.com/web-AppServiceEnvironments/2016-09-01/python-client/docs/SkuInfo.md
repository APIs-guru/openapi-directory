# SkuInfo

SKU discovery information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity** | [**AppServiceEnvironmentsListAppServicePlans200ResponseValueInnerSkuSkuCapacity**](AppServiceEnvironmentsListAppServicePlans200ResponseValueInnerSkuSkuCapacity.md) |  | [optional] 
**resource_type** | **str** | Resource type that this SKU applies to. | [optional] 
**sku** | [**AppServiceEnvironmentsListAppServicePlans200ResponseValueInnerSku**](AppServiceEnvironmentsListAppServicePlans200ResponseValueInnerSku.md) |  | [optional] 

## Example

```python
from openapi_client.models.sku_info import SkuInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SkuInfo from a JSON string
sku_info_instance = SkuInfo.from_json(json)
# print the JSON string representation of the object
print(SkuInfo.to_json())

# convert the object into a dict
sku_info_dict = sku_info_instance.to_dict()
# create an instance of SkuInfo from a dict
sku_info_from_dict = SkuInfo.from_dict(sku_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


