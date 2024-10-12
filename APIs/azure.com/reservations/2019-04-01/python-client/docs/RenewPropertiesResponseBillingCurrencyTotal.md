# RenewPropertiesResponseBillingCurrencyTotal

Currency and amount that customer will be charged in customer's local currency for renewal purchase. Tax is not included.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** |  | [optional] 
**currency_code** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.renew_properties_response_billing_currency_total import RenewPropertiesResponseBillingCurrencyTotal

# TODO update the JSON string below
json = "{}"
# create an instance of RenewPropertiesResponseBillingCurrencyTotal from a JSON string
renew_properties_response_billing_currency_total_instance = RenewPropertiesResponseBillingCurrencyTotal.from_json(json)
# print the JSON string representation of the object
print(RenewPropertiesResponseBillingCurrencyTotal.to_json())

# convert the object into a dict
renew_properties_response_billing_currency_total_dict = renew_properties_response_billing_currency_total_instance.to_dict()
# create an instance of RenewPropertiesResponseBillingCurrencyTotal from a dict
renew_properties_response_billing_currency_total_from_dict = RenewPropertiesResponseBillingCurrencyTotal.from_dict(renew_properties_response_billing_currency_total_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


