# ProductVariantAdd


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**List[ProductVariantAddAttributesInner]**](ProductVariantAddAttributesInner.md) | Defines variant&#39;s attributes list | [optional] 
**available_for_sale** | **bool** | Specifies the set of visible/invisible product&#39;s variants for sale | [optional] [default to True]
**available_for_view** | **bool** | Specifies the set of visible/invisible product&#39;s variants for users | [optional] [default to True]
**barcode** | **str** | A barcode is a unique code composed of numbers used as a product identifier. | [optional] 
**clear_cache** | **bool** | Is cache clear required | [optional] [default to True]
**cost_price** | **float** | Defines new product&#39;s cost price | [optional] 
**country_of_origin** | **str** | The country where the inventory item was made | [optional] 
**created_at** | **str** | Defines the date of entity creation | [optional] 
**description** | **str** | Specifies variant&#39;s description | [optional] 
**harmonized_system_code** | **str** | Harmonized System Code. An HSC is a 6-digit identifier that allows participating countries to classify traded goods on a common basis for customs purposes | [optional] 
**height** | **float** | Defines product&#39;s height | [optional] 
**lang_id** | **str** | Language id | [optional] 
**length** | **float** | Defines product&#39;s length | [optional] 
**manage_stock** | **bool** | Defines inventory tracking for product variant | [optional] 
**manufacturer** | **str** | Specifies the product variant&#39;s manufacturer | [optional] 
**meta_description** | **str** | Defines unique meta description of a entity | [optional] 
**meta_keywords** | **str** | Defines unique meta keywords for each entity | [optional] 
**meta_title** | **str** | Defines unique meta title for each entity | [optional] 
**model** | **str** | Specifies variant&#39;s model that has to be added | 
**name** | **str** | Defines variant&#39;s name that has to be added | [optional] 
**price** | **float** | Defines new product&#39;s variant price | [optional] 
**product_id** | **str** | Defines product&#39;s id where the variant has to be added | [optional] 
**quantity** | **float** | Defines product variant&#39;s quantity that has to be added | [optional] [default to 0]
**short_description** | **str** | Defines short description | [optional] 
**sku** | **str** | Defines variant&#39;s sku that has to be added | [optional] 
**special_price** | **float** | Specifies variant&#39;s model that has to be added | [optional] 
**sprice_create** | **str** | Defines the date of special price creation | [optional] 
**sprice_expire** | **str** | Defines the term of special price offer duration | [optional] 
**sprice_modified** | **str** | Defines the date of special price modification | [optional] 
**store_id** | **str** | Add variants specified by store id | [optional] 
**tax_class_id** | **str** | Defines tax classes where entity has to be added | [optional] 
**taxable** | **bool** | Specifies whether a tax is charged | [optional] [default to True]
**url** | **str** | Defines unique product variant&#39;s URL | [optional] 
**warehouse_id** | **str** | This parameter is used for selecting a warehouse where you need to set/modify a product quantity. | [optional] 
**weight** | **float** | Weight | [optional] [default to 0]
**weight_unit** | **str** | Weight Unit | [optional] 
**width** | **float** | Defines product&#39;s width | [optional] 

## Example

```python
from openapi_client.models.product_variant_add import ProductVariantAdd

# TODO update the JSON string below
json = "{}"
# create an instance of ProductVariantAdd from a JSON string
product_variant_add_instance = ProductVariantAdd.from_json(json)
# print the JSON string representation of the object
print(ProductVariantAdd.to_json())

# convert the object into a dict
product_variant_add_dict = product_variant_add_instance.to_dict()
# create an instance of ProductVariantAdd from a dict
product_variant_add_from_dict = ProductVariantAdd.from_dict(product_variant_add_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


