# PaymentMethodCurrencies


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **List[str]** |  | [optional] 
**links** | [**PaymentMethodCurrenciesLinks**](PaymentMethodCurrenciesLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.payment_method_currencies import PaymentMethodCurrencies

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentMethodCurrencies from a JSON string
payment_method_currencies_instance = PaymentMethodCurrencies.from_json(json)
# print the JSON string representation of the object
print(PaymentMethodCurrencies.to_json())

# convert the object into a dict
payment_method_currencies_dict = payment_method_currencies_instance.to_dict()
# create an instance of PaymentMethodCurrencies from a dict
payment_method_currencies_from_dict = PaymentMethodCurrencies.from_dict(payment_method_currencies_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


