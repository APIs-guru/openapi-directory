# DiscountBenefit

This container defines the promotional discount as either a monetary amount or a percentage of the sales price.  <p class=\"tablenote\"><b>Important!:</b> You must populate one and only one of the fields in this container: <ul><li><b>amountOffItem</b></li> <li><b>amountOffOrder</b></li> <li><b>percentageOffItem</b></li> <li><b>percentageOffOrder</b></li></ul></p>  <p class=\"tablenote\"><b>Tip:</b> Refer to <a href=\"/api-docs/sell/static/marketing/pm-specifying-discounts.html\">Configuring discounts for threshold promotions</a> for information and examples on how to combine <b>discountBenefit</b> and <b>discountSpecification</b> values to create different types of promotions.</p>

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount_off_item** | [**Amount**](Amount.md) |  | [optional] 
**amount_off_order** | [**Amount**](Amount.md) |  | [optional] 
**percentage_off_item** | **str** | The percentage applied to the sales price that is discounted off the promoted item (or items) when the promotion criteria is met.  &lt;br&gt;&lt;br&gt;Valid integer values for percentage off: &amp;nbsp;&amp;nbsp;&lt;b&gt;Min:&lt;/b&gt; &lt;code&gt;5&lt;/code&gt; &amp;nbsp;&amp;nbsp;&lt;b&gt;Max:&lt;/b&gt; &lt;code&gt;80&lt;/code&gt; | [optional] 
**percentage_off_order** | **str** | Used for threshold promotions, this is the percentage of the order price that is discounted off the order when the promotion criteria is met. This field is not value for markdown promotions.  &lt;br&gt;&lt;br&gt;Valid integer values for ORDER_DISCOUNT promotions: &amp;nbsp;&amp;nbsp;&lt;b&gt;Min:&lt;/b&gt; &lt;code&gt;5&lt;/code&gt; &amp;nbsp;&amp;nbsp;&lt;b&gt;Max:&lt;/b&gt; &lt;code&gt;80&lt;/code&gt;  &lt;br&gt;&lt;br&gt;For VOLUME_DISCOUNT promotions: Must be set to &lt;code&gt;0&lt;/code&gt; for the first discount rule. | [optional] 

## Example

```python
from openapi_client.models.discount_benefit import DiscountBenefit

# TODO update the JSON string below
json = "{}"
# create an instance of DiscountBenefit from a JSON string
discount_benefit_instance = DiscountBenefit.from_json(json)
# print the JSON string representation of the object
print(DiscountBenefit.to_json())

# convert the object into a dict
discount_benefit_dict = discount_benefit_instance.to_dict()
# create an instance of DiscountBenefit from a dict
discount_benefit_from_dict = DiscountBenefit.from_dict(discount_benefit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


