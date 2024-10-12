# GlobalCsmSkuDescription

A Global SKU Description.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capabilities** | [**List[GlobalCsmSkuDescriptionCapabilitiesInner]**](GlobalCsmSkuDescriptionCapabilitiesInner.md) | Capabilities of the SKU, e.g., is traffic manager enabled? | [optional] 
**capacity** | [**GlobalCsmSkuDescriptionCapacity**](GlobalCsmSkuDescriptionCapacity.md) |  | [optional] 
**family** | **str** | Family code of the resource SKU. | [optional] 
**locations** | **List[str]** | Locations of the SKU. | [optional] 
**name** | **str** | Name of the resource SKU. | [optional] 
**size** | **str** | Size specifier of the resource SKU. | [optional] 
**tier** | **str** | Service Tier of the resource SKU. | [optional] 

## Example

```python
from openapi_client.models.global_csm_sku_description import GlobalCsmSkuDescription

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalCsmSkuDescription from a JSON string
global_csm_sku_description_instance = GlobalCsmSkuDescription.from_json(json)
# print the JSON string representation of the object
print(GlobalCsmSkuDescription.to_json())

# convert the object into a dict
global_csm_sku_description_dict = global_csm_sku_description_instance.to_dict()
# create an instance of GlobalCsmSkuDescription from a dict
global_csm_sku_description_from_dict = GlobalCsmSkuDescription.from_dict(global_csm_sku_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


