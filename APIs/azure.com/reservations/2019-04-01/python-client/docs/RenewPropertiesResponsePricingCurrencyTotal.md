# RenewPropertiesResponsePricingCurrencyTotal

Amount that Microsoft uses for record. Used during refund for calculating refund limit. Tax is not included. This is locked price 30 days before expiry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** |  | [optional] 
**currency_code** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.renew_properties_response_pricing_currency_total import RenewPropertiesResponsePricingCurrencyTotal

# TODO update the JSON string below
json = "{}"
# create an instance of RenewPropertiesResponsePricingCurrencyTotal from a JSON string
renew_properties_response_pricing_currency_total_instance = RenewPropertiesResponsePricingCurrencyTotal.from_json(json)
# print the JSON string representation of the object
print(RenewPropertiesResponsePricingCurrencyTotal.to_json())

# convert the object into a dict
renew_properties_response_pricing_currency_total_dict = renew_properties_response_pricing_currency_total_instance.to_dict()
# create an instance of RenewPropertiesResponsePricingCurrencyTotal from a dict
renew_properties_response_pricing_currency_total_from_dict = RenewPropertiesResponsePricingCurrencyTotal.from_dict(renew_properties_response_pricing_currency_total_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


