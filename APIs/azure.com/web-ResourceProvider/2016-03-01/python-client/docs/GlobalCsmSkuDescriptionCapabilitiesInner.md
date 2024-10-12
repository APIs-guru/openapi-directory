# GlobalCsmSkuDescriptionCapabilitiesInner

Describes the capabilities/features allowed for a specific SKU.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the SKU capability. | [optional] 
**reason** | **str** | Reason of the SKU capability. | [optional] 
**value** | **str** | Value of the SKU capability. | [optional] 

## Example

```python
from openapi_client.models.global_csm_sku_description_capabilities_inner import GlobalCsmSkuDescriptionCapabilitiesInner

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalCsmSkuDescriptionCapabilitiesInner from a JSON string
global_csm_sku_description_capabilities_inner_instance = GlobalCsmSkuDescriptionCapabilitiesInner.from_json(json)
# print the JSON string representation of the object
print(GlobalCsmSkuDescriptionCapabilitiesInner.to_json())

# convert the object into a dict
global_csm_sku_description_capabilities_inner_dict = global_csm_sku_description_capabilities_inner_instance.to_dict()
# create an instance of GlobalCsmSkuDescriptionCapabilitiesInner from a dict
global_csm_sku_description_capabilities_inner_from_dict = GlobalCsmSkuDescriptionCapabilitiesInner.from_dict(global_csm_sku_description_capabilities_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


