# CalculatePriceResponsePropertiesBillingCurrencyTotal

Currency and amount that customer will be charged in customer's local currency. Tax is not included.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** |  | [optional] 
**currency_code** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.calculate_price_response_properties_billing_currency_total import CalculatePriceResponsePropertiesBillingCurrencyTotal

# TODO update the JSON string below
json = "{}"
# create an instance of CalculatePriceResponsePropertiesBillingCurrencyTotal from a JSON string
calculate_price_response_properties_billing_currency_total_instance = CalculatePriceResponsePropertiesBillingCurrencyTotal.from_json(json)
# print the JSON string representation of the object
print(CalculatePriceResponsePropertiesBillingCurrencyTotal.to_json())

# convert the object into a dict
calculate_price_response_properties_billing_currency_total_dict = calculate_price_response_properties_billing_currency_total_instance.to_dict()
# create an instance of CalculatePriceResponsePropertiesBillingCurrencyTotal from a dict
calculate_price_response_properties_billing_currency_total_from_dict = CalculatePriceResponsePropertiesBillingCurrencyTotal.from_dict(calculate_price_response_properties_billing_currency_total_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


