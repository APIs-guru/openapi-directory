# Pricing


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comparison_price** | [**UpdatePriceRequestPricingInnerComparisonPrice**](UpdatePriceRequestPricingInnerComparisonPrice.md) |  | [optional] 
**comparison_price_type** | **str** | This is applicable only for promotions | [optional] 
**current_price** | [**UpdatePriceRequestPricingInnerCurrentPrice**](UpdatePriceRequestPricingInnerCurrentPrice.md) |  | 
**current_price_type** | **str** | This is applicable only for both promotions and price | 
**effective_date** | **datetime** | This is applicable only for promotions | [optional] 
**expiration_date** | **datetime** | This is applicable only for promotions | [optional] 
**price_display_codes** | **str** | Represent promo placement. This is applicable only for promotions | [optional] 
**process_mode** | **str** | This is applicable only for promotions | [optional] 
**promo_id** | **str** | This is applicable only for promotions | [optional] 

## Example

```python
from openapi_client.models.pricing import Pricing

# TODO update the JSON string below
json = "{}"
# create an instance of Pricing from a JSON string
pricing_instance = Pricing.from_json(json)
# print the JSON string representation of the object
print(Pricing.to_json())

# convert the object into a dict
pricing_dict = pricing_instance.to_dict()
# create an instance of Pricing from a dict
pricing_from_dict = Pricing.from_dict(pricing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


