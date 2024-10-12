# DiscountRule

This complex type defines a promotion as being either a monetary amount or a percentage of a sales price that's subtracted from the price of an item or order. <p>Set the amount of the discount and the rules that govern when the discount triggers using the <b>discountBenefit</b> and <b>discountSpecification</b> fields.</p>  <p class=\"tablenote\"><b>Note:</b> In <b>volume pricing promotions</b>, you must configure at least two <b>discountRule</b> containers and at most four.</p>

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discount_benefit** | [**DiscountBenefit**](DiscountBenefit.md) |  | [optional] 
**discount_specification** | [**DiscountSpecification**](DiscountSpecification.md) |  | [optional] 
**max_discount_amount** | [**Amount**](Amount.md) |  | [optional] 
**rule_order** | **int** | This field indicates the order in which the &lt;b&gt;discountRules&lt;/b&gt; are presented. The value specified for this field must equal the associated &lt;b&gt;minQuantity&lt;/b&gt; value. &lt;br&gt;&lt;br&gt;&lt;i&gt;Required if &lt;/i&gt; you are creating a volume pricing promotion. | [optional] 

## Example

```python
from openapi_client.models.discount_rule import DiscountRule

# TODO update the JSON string below
json = "{}"
# create an instance of DiscountRule from a JSON string
discount_rule_instance = DiscountRule.from_json(json)
# print the JSON string representation of the object
print(DiscountRule.to_json())

# convert the object into a dict
discount_rule_dict = discount_rule_instance.to_dict()
# create an instance of DiscountRule from a dict
discount_rule_from_dict = DiscountRule.from_dict(discount_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


