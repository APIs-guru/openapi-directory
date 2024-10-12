# CatalogSku

Details of a commitment plan SKU.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capabilities** | [**List[SkuCapability]**](SkuCapability.md) | The capability information for the specified SKU. | [optional] [readonly] 
**capacity** | [**SkuCapacity**](SkuCapacity.md) |  | [optional] 
**costs** | [**List[SkuCost]**](SkuCost.md) | The cost information for the specified SKU. | [optional] [readonly] 
**locations** | **List[str]** | Regions where the SKU is available. | [optional] [readonly] 
**name** | **str** | SKU name | [optional] [readonly] 
**resource_type** | **str** | Resource type name | [optional] [readonly] 
**restrictions** | [**List[SkuRestrictions]**](SkuRestrictions.md) | Restrictions which would prevent a SKU from being used. This is empty if there are no restrictions. | [optional] [readonly] 
**tier** | **str** | SKU tier | [optional] [readonly] 

## Example

```python
from openapi_client.models.catalog_sku import CatalogSku

# TODO update the JSON string below
json = "{}"
# create an instance of CatalogSku from a JSON string
catalog_sku_instance = CatalogSku.from_json(json)
# print the JSON string representation of the object
print(CatalogSku.to_json())

# convert the object into a dict
catalog_sku_dict = catalog_sku_instance.to_dict()
# create an instance of CatalogSku from a dict
catalog_sku_from_dict = CatalogSku.from_dict(catalog_sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


