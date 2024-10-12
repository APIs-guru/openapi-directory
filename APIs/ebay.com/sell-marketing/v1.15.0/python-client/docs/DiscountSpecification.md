# DiscountSpecification

This container defines the criteria for when the discounts of a promotion trigger, such as the minimum quantity the buyer must purchase before the promotion kicks in. The promotional discount is applied each time the criteria defined by this container is met.  <p><b>Note:</b> When configuring the rules that govern when the discounts are applied, populate just one of the following fields in the <b>discountSpecification</b> container:</p>  <ul><li><b>minAmount</b></li> <li><b>minQuantity</b></li> <li><b>forEachQuantity</b></li> <li><b>forEachAmount</b></li></ul> <p class=\"tablenote\"><b>Tip:</b> Refer to <a href=\"/api-docs/sell/static/marketing/pm-specifying-discounts.html\">Configuring discounts for threshold promotions</a> for information and examples on how to combine <b>discountBenefit</b> and <b>discountSpecification</b> to create different types of promotions.</p>

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**for_each_amount** | [**Amount**](Amount.md) |  | [optional] 
**for_each_quantity** | **int** | The number of items that must be purchased in order to qualify for the discount.  &lt;br&gt;&lt;br&gt;&lt;b&gt;Valid values:&lt;/b&gt; &lt;br&gt;&lt;code&gt; &amp;nbsp; 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, &lt;br&gt; &amp;nbsp; 12, 13, 14, 15, 16, 17, 18, 19 &lt;br&gt; &amp;nbsp; 20, 25, 50, 75, 100&lt;/code&gt; | [optional] 
**min_amount** | [**Amount**](Amount.md) |  | [optional] 
**min_quantity** | **int** | The minimum quantity of promoted items that needs to be bought in order to qualify for the promotion&#39;s discount.  &lt;br&gt;&lt;br&gt;&lt;b&gt;Valid values:&lt;/b&gt; &lt;br&gt;&lt;code&gt; &amp;nbsp; 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, &lt;br&gt; &amp;nbsp; 12, 13, 14, 15, 16, 17, 18, 19 &lt;br&gt; &amp;nbsp; 20, 25, 50, 75, 100&lt;/code&gt; | [optional] 
**number_of_discounted_items** | **int** | Use this field to configure \&quot;Buy One Get One\&quot; (or &lt;b&gt;BOGO&lt;/b&gt;) promotions.  &lt;br&gt;&lt;br&gt;You must couple this field with &lt;b&gt;forEachQuantity&lt;/b&gt; and an &lt;b&gt;amountOffItem&lt;/b&gt; or &lt;b&gt;percentOffItem&lt;/b&gt; field to configure your BOGO promotion. This field is not valid with order-based promotions. &lt;br&gt;&lt;br&gt;The value of this field represents the number of items to be discounted when other promotion criteria is met. For example, when the buyer adds the number of items identified by the &lt;b&gt;forEachQuantity&lt;/b&gt; value to their cart, they are then eligible to receive the stated discount from an additional number of like items (the number of which is identified by this field) when they add those items to their cart. To receive the discount, the buyer must purchase the number of items indicated by  &lt;b&gt;forEachQuantity&lt;/b&gt; &lt;i&gt;plus&lt;/i&gt; the number indicated by this field.  &lt;br&gt;&lt;br&gt;&lt;b&gt;Valid values:&lt;/b&gt; &lt;br&gt;&lt;code&gt; &amp;nbsp; 1, 2, 3, 4, 5, 6, 7, 8, 9, 10&lt;/code&gt; | [optional] 

## Example

```python
from openapi_client.models.discount_specification import DiscountSpecification

# TODO update the JSON string below
json = "{}"
# create an instance of DiscountSpecification from a JSON string
discount_specification_instance = DiscountSpecification.from_json(json)
# print the JSON string representation of the object
print(DiscountSpecification.to_json())

# convert the object into a dict
discount_specification_dict = discount_specification_instance.to_dict()
# create an instance of DiscountSpecification from a dict
discount_specification_from_dict = DiscountSpecification.from_dict(discount_specification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


