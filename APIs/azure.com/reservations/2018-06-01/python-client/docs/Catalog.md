# Catalog


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locations** | **List[str]** |  | [optional] [readonly] 
**name** | **str** | The name of SKU | [optional] [readonly] 
**resource_type** | **str** | The type of resource the SKU applies to. | [optional] [readonly] 
**restrictions** | [**List[SkuRestriction]**](SkuRestriction.md) |  | [optional] [readonly] 
**sku_properties** | [**List[SkuProperty]**](SkuProperty.md) |  | [optional] [readonly] 
**terms** | [**List[ReservationTerm]**](ReservationTerm.md) | Available reservation terms for this resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.catalog import Catalog

# TODO update the JSON string below
json = "{}"
# create an instance of Catalog from a JSON string
catalog_instance = Catalog.from_json(json)
# print the JSON string representation of the object
print(Catalog.to_json())

# convert the object into a dict
catalog_dict = catalog_instance.to_dict()
# create an instance of Catalog from a dict
catalog_from_dict = Catalog.from_dict(catalog_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


