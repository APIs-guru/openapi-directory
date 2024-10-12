# CalculatePriceResponseProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_currency_total** | [**CalculatePriceResponsePropertiesBillingCurrencyTotal**](CalculatePriceResponsePropertiesBillingCurrencyTotal.md) |  | [optional] 
**is_billing_partner_managed** | **bool** | True if billing is managed by Microsoft Partner. Used only for CSP accounts. | [optional] 
**payment_schedule** | [**List[PaymentDetail]**](PaymentDetail.md) |  | [optional] 
**pricing_currency_total** | [**CalculatePriceResponsePropertiesPricingCurrencyTotal**](CalculatePriceResponsePropertiesPricingCurrencyTotal.md) |  | [optional] 
**reservation_order_id** | **str** | GUID that represents reservation order that can be placed after calculating price. | [optional] 
**sku_description** | **str** | Description of SKU that is being purchased. | [optional] 
**sku_title** | **str** | Title of SKU that is being purchased. | [optional] 

## Example

```python
from openapi_client.models.calculate_price_response_properties import CalculatePriceResponseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CalculatePriceResponseProperties from a JSON string
calculate_price_response_properties_instance = CalculatePriceResponseProperties.from_json(json)
# print the JSON string representation of the object
print(CalculatePriceResponseProperties.to_json())

# convert the object into a dict
calculate_price_response_properties_dict = calculate_price_response_properties_instance.to_dict()
# create an instance of CalculatePriceResponseProperties from a dict
calculate_price_response_properties_from_dict = CalculatePriceResponseProperties.from_dict(calculate_price_response_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


