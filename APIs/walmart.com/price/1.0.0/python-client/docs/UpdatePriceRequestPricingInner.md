# UpdatePriceRequestPricingInner


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
from openapi_client.models.update_price_request_pricing_inner import UpdatePriceRequestPricingInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdatePriceRequestPricingInner from a JSON string
update_price_request_pricing_inner_instance = UpdatePriceRequestPricingInner.from_json(json)
# print the JSON string representation of the object
print(UpdatePriceRequestPricingInner.to_json())

# convert the object into a dict
update_price_request_pricing_inner_dict = update_price_request_pricing_inner_instance.to_dict()
# create an instance of UpdatePriceRequestPricingInner from a dict
update_price_request_pricing_inner_from_dict = UpdatePriceRequestPricingInner.from_dict(update_price_request_pricing_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


