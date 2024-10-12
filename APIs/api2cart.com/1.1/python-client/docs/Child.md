# Child


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**advanced_price** | [**List[ProductAdvancedPrice]**](ProductAdvancedPrice.md) |  | [optional] 
**allow_backorders** | **bool** |  | [optional] 
**avail_for_sale** | **bool** |  | [optional] 
**combination** | [**List[ProductChildItemCombination]**](ProductChildItemCombination.md) |  | [optional] 
**cost_price** | **float** |  | [optional] 
**created_time** | [**A2CDateTime**](A2CDateTime.md) |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**default_price** | **float** |  | [optional] 
**default_qty_in_pack** | **float** |  | [optional] 
**dimensions_unit** | **str** |  | [optional] 
**discounts** | [**List[Discount]**](Discount.md) |  | [optional] 
**ean** | **str** |  | [optional] 
**full_description** | **str** |  | [optional] 
**gtin** | **str** |  | [optional] 
**height** | **float** |  | [optional] 
**id** | **str** |  | [optional] 
**images** | [**List[Image]**](Image.md) |  | [optional] 
**in_stock** | **bool** |  | [optional] 
**inventory** | [**List[ProductInventory]**](ProductInventory.md) |  | [optional] 
**inventory_level** | **float** |  | [optional] 
**is_qty_in_pack_fixed** | **bool** |  | [optional] 
**isbn** | **str** |  | [optional] 
**length** | **float** |  | [optional] 
**list_price** | **float** |  | [optional] 
**manage_stock** | **bool** |  | [optional] 
**meta_description** | **str** |  | [optional] 
**meta_keywords** | **str** |  | [optional] 
**meta_title** | **str** |  | [optional] 
**min_quantity** | **float** |  | [optional] 
**modified_time** | [**A2CDateTime**](A2CDateTime.md) |  | [optional] 
**mpn** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**parent_id** | **str** |  | [optional] 
**short_description** | **str** |  | [optional] 
**sku** | **str** |  | [optional] 
**sort_order** | **int** |  | [optional] 
**tax_class_id** | **str** |  | [optional] 
**upc** | **str** |  | [optional] 
**url** | **str** |  | [optional] 
**weight** | **float** |  | [optional] 
**weight_unit** | **str** |  | [optional] 
**wholesale_price** | **float** |  | [optional] 
**width** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.child import Child

# TODO update the JSON string below
json = "{}"
# create an instance of Child from a JSON string
child_instance = Child.from_json(json)
# print the JSON string representation of the object
print(Child.to_json())

# convert the object into a dict
child_dict = child_instance.to_dict()
# create an instance of Child from a dict
child_from_dict = Child.from_dict(child_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


