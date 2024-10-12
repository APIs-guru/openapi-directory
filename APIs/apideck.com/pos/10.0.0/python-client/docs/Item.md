# Item


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**abbreviation** | **str** |  | [optional] 
**absent_at_location_ids** | **List[str]** | A list of locations where the object is not present, even if present_at_all_locations is true. This can include locations that are deactivated. | [optional] 
**available** | **bool** |  | [optional] 
**available_for_pickup** | **bool** |  | [optional] 
**available_online** | **bool** |  | [optional] 
**categories** | [**List[CategoriesInner]**](CategoriesInner.md) |  | [optional] 
**code** | **str** | Product code, e.g. UPC or EAN | [optional] 
**cost** | **float** |  | [optional] 
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**created_by** | **str** | The user who created the object. | [optional] [readonly] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**deleted** | **bool** | Flag to indicate if the object is deleted. | [optional] 
**description** | **str** |  | [optional] 
**hidden** | **bool** |  | [optional] 
**id** | **str** |  | [optional] 
**idempotency_key** | **str** | A value you specify that uniquely identifies this request among requests you have sent. | [optional] 
**is_revenue** | **bool** | True if this item should be counted as revenue. For example, gift cards and donations would not be counted as revenue. | [optional] 
**modifier_groups** | [**List[VariationsInner]**](VariationsInner.md) |  | [optional] 
**name** | **str** |  | 
**options** | [**List[ItemOptionsInner]**](ItemOptionsInner.md) | List of options pertaining to this item&#39;s attribute variation | [optional] 
**present_at_all_locations** | **bool** |  | [optional] 
**price_amount** | **float** |  | [optional] 
**price_currency** | [**Currency**](Currency.md) |  | [optional] 
**pricing_type** | **str** |  | [optional] 
**product_type** | **str** |  | [optional] 
**sku** | **str** | SKU of the item | [optional] 
**tax_ids** | **List[str]** | A list of Tax IDs for the product. | [optional] 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 
**updated_by** | **str** | The user who last updated the object. | [optional] [readonly] 
**use_default_tax_rates** | **bool** |  | [optional] 
**variations** | [**List[VariationsInner1]**](VariationsInner1.md) |  | [optional] 
**version** | **str** | The user who last updated the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.item import Item

# TODO update the JSON string below
json = "{}"
# create an instance of Item from a JSON string
item_instance = Item.from_json(json)
# print the JSON string representation of the object
print(Item.to_json())

# convert the object into a dict
item_dict = item_instance.to_dict()
# create an instance of Item from a dict
item_from_dict = Item.from_dict(item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


