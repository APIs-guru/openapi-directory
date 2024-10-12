# Product


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**advanced_price** | [**List[ProductAdvancedPrice]**](ProductAdvancedPrice.md) |  | [optional] 
**avail_sale** | **bool** |  | [optional] 
**avail_view** | **bool** |  | [optional] 
**backorders** | **str** |  | [optional] 
**categories_ids** | **List[str]** |  | [optional] 
**cost_price** | **float** |  | [optional] 
**create_at** | [**A2CDateTime**](A2CDateTime.md) |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**dimensions_unit** | **str** |  | [optional] 
**discounts** | [**List[Discount]**](Discount.md) |  | [optional] 
**group_items** | [**List[ProductGroupItem]**](ProductGroupItem.md) |  | [optional] 
**group_price** | [**List[ProductGroupPrice]**](ProductGroupPrice.md) |  | [optional] 
**height** | **float** |  | [optional] 
**id** | **str** |  | [optional] 
**images** | [**List[Image]**](Image.md) |  | [optional] 
**in_stock** | **bool** |  | [optional] 
**inventory** | [**List[ProductInventory]**](ProductInventory.md) |  | [optional] 
**is_downloadable** | **bool** |  | [optional] 
**is_stock_managed** | **bool** |  | [optional] 
**is_virtual** | **bool** |  | [optional] 
**length** | **float** |  | [optional] 
**manage_stock** | **str** |  | [optional] 
**meta_description** | **str** |  | [optional] 
**meta_keywords** | **str** |  | [optional] 
**meta_title** | **str** |  | [optional] 
**modified_at** | [**A2CDateTime**](A2CDateTime.md) |  | [optional] 
**name** | **str** |  | [optional] 
**price** | **float** |  | [optional] 
**product_options** | [**List[ProductOption]**](ProductOption.md) |  | [optional] 
**quantity** | **float** |  | [optional] 
**related_products_ids** | **List[str]** |  | [optional] 
**seo_url** | **str** |  | [optional] 
**short_description** | **str** |  | [optional] 
**sort_order** | **int** |  | [optional] 
**special_price** | [**SpecialPrice**](SpecialPrice.md) |  | [optional] 
**stores_ids** | **List[str]** |  | [optional] 
**tax_class_id** | **str** |  | [optional] 
**tier_price** | [**List[ProductTierPrice]**](ProductTierPrice.md) |  | [optional] 
**type** | **str** |  | [optional] 
**u_brand** | **str** |  | [optional] 
**u_brand_id** | **str** |  | [optional] 
**u_model** | **str** |  | [optional] 
**u_mpn** | **str** |  | [optional] 
**u_sku** | **str** |  | [optional] 
**u_upc** | **str** |  | [optional] 
**url** | **str** |  | [optional] 
**weight** | **float** |  | [optional] 
**weight_unit** | **str** |  | [optional] 
**width** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.product import Product

# TODO update the JSON string below
json = "{}"
# create an instance of Product from a JSON string
product_instance = Product.from_json(json)
# print the JSON string representation of the object
print(Product.to_json())

# convert the object into a dict
product_dict = product_instance.to_dict()
# create an instance of Product from a dict
product_from_dict = Product.from_dict(product_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


