# LookupInvoiceCurrencyResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency_code** | **str** | Currency used by the advertiser in ISO 4217 format. | [optional] 

## Example

```python
from openapi_client.models.lookup_invoice_currency_response import LookupInvoiceCurrencyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LookupInvoiceCurrencyResponse from a JSON string
lookup_invoice_currency_response_instance = LookupInvoiceCurrencyResponse.from_json(json)
# print the JSON string representation of the object
print(LookupInvoiceCurrencyResponse.to_json())

# convert the object into a dict
lookup_invoice_currency_response_dict = lookup_invoice_currency_response_instance.to_dict()
# create an instance of LookupInvoiceCurrencyResponse from a dict
lookup_invoice_currency_response_from_dict = LookupInvoiceCurrencyResponse.from_dict(lookup_invoice_currency_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


