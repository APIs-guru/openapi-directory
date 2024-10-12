# ProductUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backorder_status** | **str** | Set backorder status | [optional] 
**barcode** | **str** | A barcode is a unique code composed of numbers used as a product identifier. | [optional] 
**categories_ids** | **str** | Defines product add that is specified by comma-separated categories id | [optional] 
**clear_cache** | **bool** | Is cache clear required | [optional] [default to True]
**cost_price** | **float** | Defines new product&#39;s cost price | [optional] 
**country_of_origin** | **str** | The country where the inventory item was made | [optional] 
**description** | **str** | Defines new product&#39;s description | [optional] 
**disable_report_cache** | **bool** | Disable report cache for current request | [optional] [default to False]
**gtin** | **str** | Global Trade Item Number. An GTIN is an identifier for trade items. | [optional] 
**harmonized_system_code** | **str** | Harmonized System Code. An HSC is a 6-digit identifier that allows participating countries to classify traded goods on a common basis for customs purposes | [optional] 
**height** | **float** | Defines product&#39;s height | [optional] 
**id** | **str** | Defines product id that has to be updated | [optional] 
**in_stock** | **bool** | Set stock status | [optional] 
**increase_quantity** | **float** | Defines the incremental changes in product quantity | [optional] 
**lang_id** | **str** | Language id | [optional] 
**length** | **float** | Defines product&#39;s length | [optional] 
**manage_stock** | **bool** | Defines inventory tracking for product | [optional] 
**manufacturer** | **str** | Defines product&#39;s manufacturer | [optional] 
**manufacturer_id** | **str** | Defines product&#39;s manufacturer by manufacturer_id | [optional] 
**meta_description** | **str** | Defines unique meta description of a entity | [optional] 
**meta_keywords** | **str** | Defines unique meta keywords for each entity | [optional] 
**meta_title** | **str** | Defines unique meta title for each entity | [optional] 
**model** | **str** | Defines product model that has to be updated | [optional] 
**name** | **str** | Defines product&#39;s name that has to be updated | [optional] 
**old_price** | **float** | Defines product&#39;s old price | [optional] 
**price** | **float** | Defines new product&#39;s price | [optional] 
**product_class** | **str** | A categorization for the product | [optional] 
**quantity** | **float** | Defines new product&#39;s quantity | [optional] 
**reduce_quantity** | **float** | Defines the decrement changes in product quantity | [optional] 
**reindex** | **bool** | Is reindex required | [optional] [default to True]
**report_request_id** | **str** | Report request id | [optional] 
**reserve_quantity** | **float** | This parameter allows to reserve/unreserve product quantity. | [optional] 
**retail_price** | **float** | Defines new product&#39;s retail price | [optional] 
**search_keywords** | **str** | Defines unique search keywords | [optional] 
**seo_url** | **str** | Defines unique URL for SEO | [optional] 
**short_description** | **str** | Defines short description | [optional] 
**sku** | **str** | Defines new product&#39;s sku | [optional] 
**special_price** | **float** | Defines new product&#39;s special price | [optional] 
**sprice_create** | **str** | Defines the date of special price creation | [optional] 
**sprice_expire** | **str** | Defines the term of special price offer duration | [optional] 
**status** | **str** | Defines product&#39;s status | [optional] 
**store_id** | **str** | Defines store id where the product should be found | [optional] 
**tags** | **str** | Product tags | [optional] 
**taxable** | **bool** | Specifies whether a tax is charged | [optional] [default to True]
**visible** | **str** | Set visibility status | [optional] 
**warehouse_id** | **str** | This parameter is used for selecting a warehouse where you need to set/modify a product quantity. | [optional] 
**weight** | **float** | Weight | [optional] 
**width** | **float** | Defines product&#39;s width | [optional] 

## Example

```python
from openapi_client.models.product_update import ProductUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of ProductUpdate from a JSON string
product_update_instance = ProductUpdate.from_json(json)
# print the JSON string representation of the object
print(ProductUpdate.to_json())

# convert the object into a dict
product_update_dict = product_update_instance.to_dict()
# create an instance of ProductUpdate from a dict
product_update_from_dict = ProductUpdate.from_dict(product_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


