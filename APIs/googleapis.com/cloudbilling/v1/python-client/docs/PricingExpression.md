# PricingExpression

Expresses a mathematical pricing formula. For Example:- `usage_unit: GBy` `tiered_rates:` `[start_usage_amount: 20, unit_price: $10]` `[start_usage_amount: 100, unit_price: $5]` The above expresses a pricing formula where the first 20GB is free, the next 80GB is priced at $10 per GB followed by $5 per GB for additional usage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_unit** | **str** | The base unit for the SKU which is the unit used in usage exports. Example: \&quot;By\&quot; | [optional] 
**base_unit_conversion_factor** | **float** | Conversion factor for converting from price per usage_unit to price per base_unit, and start_usage_amount to start_usage_amount in base_unit. unit_price / base_unit_conversion_factor &#x3D; price per base_unit. start_usage_amount * base_unit_conversion_factor &#x3D; start_usage_amount in base_unit. | [optional] 
**base_unit_description** | **str** | The base unit in human readable form. Example: \&quot;byte\&quot;. | [optional] 
**display_quantity** | **float** | The recommended quantity of units for displaying pricing info. When displaying pricing info it is recommended to display: (unit_price * display_quantity) per display_quantity usage_unit. This field does not affect the pricing formula and is for display purposes only. Example: If the unit_price is \&quot;0.0001 USD\&quot;, the usage_unit is \&quot;GB\&quot; and the display_quantity is \&quot;1000\&quot; then the recommended way of displaying the pricing info is \&quot;0.10 USD per 1000 GB\&quot; | [optional] 
**tiered_rates** | [**List[TierRate]**](TierRate.md) | The list of tiered rates for this pricing. The total cost is computed by applying each of the tiered rates on usage. This repeated list is sorted by ascending order of start_usage_amount. | [optional] 
**usage_unit** | **str** | The short hand for unit of usage this pricing is specified in. Example: usage_unit of \&quot;GiBy\&quot; means that usage is specified in \&quot;Gibi Byte\&quot;. | [optional] 
**usage_unit_description** | **str** | The unit of usage in human readable form. Example: \&quot;gibi byte\&quot;. | [optional] 

## Example

```python
from openapi_client.models.pricing_expression import PricingExpression

# TODO update the JSON string below
json = "{}"
# create an instance of PricingExpression from a JSON string
pricing_expression_instance = PricingExpression.from_json(json)
# print the JSON string representation of the object
print(PricingExpression.to_json())

# convert the object into a dict
pricing_expression_dict = pricing_expression_instance.to_dict()
# create an instance of PricingExpression from a dict
pricing_expression_from_dict = PricingExpression.from_dict(pricing_expression_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


