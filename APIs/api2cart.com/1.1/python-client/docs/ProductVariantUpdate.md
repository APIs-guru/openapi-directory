# ProductVariantUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_for_sale** | **bool** | Specifies the set of visible/invisible product&#39;s variants for sale | [optional] [default to True]
**backorder_status** | **str** | Set backorder status | [optional] 
**barcode** | **str** | A barcode is a unique code composed of numbers used as a product identifier. | [optional] 
**clear_cache** | **bool** | Is cache clear required | [optional] [default to True]
**cost_price** | **float** | Defines new product&#39;s cost price | [optional] 
**country_of_origin** | **str** | The country where the inventory item was made | [optional] 
**description** | **str** | Specifies variant&#39;s description | [optional] 
**gtin** | **str** | Global Trade Item Number. An GTIN is an identifier for trade items. | [optional] 
**harmonized_system_code** | **str** | Harmonized System Code. An HSC is a 6-digit identifier that allows participating countries to classify traded goods on a common basis for customs purposes | [optional] 
**height** | **float** | Defines product&#39;s height | [optional] 
**id** | **str** | Defines variant update specified by variant id | [optional] 
**in_stock** | **bool** | Set stock status | [optional] 
**increase_quantity** | **float** | Defines the incremental changes in product quantity | [optional] [default to 0]
**lang_id** | **str** | Language id | [optional] 
**length** | **float** | Defines product&#39;s length | [optional] 
**manage_stock** | **bool** | Defines inventory tracking for product variant | [optional] 
**meta_description** | **str** | Defines unique meta description of a entity | [optional] 
**meta_keywords** | **str** | Defines unique meta keywords for each entity | [optional] 
**meta_title** | **str** | Defines unique meta title for each entity | [optional] 
**model** | **str** | Specifies variant&#39;s model that has to be added | [optional] 
**name** | **str** | Defines variant&#39;s name that has to be updated | [optional] 
**old_price** | **float** | Defines product&#39;s old price | [optional] 
**options** | [**List[ProductVariantUpdateOptionsInner]**](ProductVariantUpdateOptionsInner.md) | Defines variant&#39;s options list | [optional] 
**price** | **float** | Defines new product&#39;s variant price | [optional] 
**product_id** | **str** | Defines product&#39;s id where the variant has to be updated | [optional] 
**quantity** | **float** | Defines new products&#39; variants quantity | [optional] 
**reduce_quantity** | **float** | Defines the decrement changes in product quantity | [optional] [default to 0]
**reindex** | **bool** | Is reindex required | [optional] [default to True]
**reserve_quantity** | **float** | This parameter allows to reserve/unreserve product variants quantity. | [optional] 
**retail_price** | **float** | Defines new product&#39;s retail price | [optional] 
**short_description** | **str** | Defines short description | [optional] 
**sku** | **str** | Defines new product&#39;s variant sku | [optional] 
**special_price** | **float** | Defines new product&#39;s variant special price | [optional] 
**sprice_create** | **str** | Defines the date of special price creation | [optional] 
**sprice_expire** | **str** | Defines the term of special price offer duration | [optional] 
**status** | **str** | Defines product variant&#39;s status | [optional] 
**store_id** | **str** | Defines store id where the variant should be found | [optional] 
**taxable** | **bool** | Specifies whether a tax is charged | [optional] [default to True]
**visible** | **str** | Set visibility status | [optional] 
**warehouse_id** | **str** | This parameter is used for selecting a warehouse where you need to set/modify a product quantity. | [optional] 
**weight** | **float** | Weight | [optional] [default to 0]
**width** | **float** | Defines product&#39;s width | [optional] 

## Example

```python
from openapi_client.models.product_variant_update import ProductVariantUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of ProductVariantUpdate from a JSON string
product_variant_update_instance = ProductVariantUpdate.from_json(json)
# print the JSON string representation of the object
print(ProductVariantUpdate.to_json())

# convert the object into a dict
product_variant_update_dict = product_variant_update_instance.to_dict()
# create an instance of ProductVariantUpdate from a dict
product_variant_update_from_dict = ProductVariantUpdate.from_dict(product_variant_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


