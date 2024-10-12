# SelectedInventoryDiscount

This type defines the fields that describe the discounts applied to a set of inventory items and the order in which the selection rules are applied.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discount_benefit** | [**DiscountBenefit**](DiscountBenefit.md) |  | [optional] 
**discount_id** | **str** | A unique, eBay-generated ID that you can use to identify the discount. This field is ignored in POST and PUT operations. | [optional] 
**inventory_criterion** | [**InventoryCriterion**](InventoryCriterion.md) |  | [optional] 
**rule_order** | **int** | For markdown promotions, this field is reserved for future use. &lt;!--This field specifies the precedence of this set of inventory criteria, which is taken into account if an item is selected for multiple discounts by different sets of criteria. The criteria with the highest priority (lowest ruleOrder value) takes precedence over criteria with a lower precedence.--&gt; | [optional] 

## Example

```python
from openapi_client.models.selected_inventory_discount import SelectedInventoryDiscount

# TODO update the JSON string below
json = "{}"
# create an instance of SelectedInventoryDiscount from a JSON string
selected_inventory_discount_instance = SelectedInventoryDiscount.from_json(json)
# print the JSON string representation of the object
print(SelectedInventoryDiscount.to_json())

# convert the object into a dict
selected_inventory_discount_dict = selected_inventory_discount_instance.to_dict()
# create an instance of SelectedInventoryDiscount from a dict
selected_inventory_discount_from_dict = SelectedInventoryDiscount.from_dict(selected_inventory_discount_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


