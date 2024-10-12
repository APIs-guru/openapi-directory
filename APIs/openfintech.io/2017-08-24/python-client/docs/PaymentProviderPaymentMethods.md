# PaymentProviderPaymentMethods


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **List[str]** |  | [optional] 
**links** | [**PaymentProviderPaymentMethodsLinks**](PaymentProviderPaymentMethodsLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.payment_provider_payment_methods import PaymentProviderPaymentMethods

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentProviderPaymentMethods from a JSON string
payment_provider_payment_methods_instance = PaymentProviderPaymentMethods.from_json(json)
# print the JSON string representation of the object
print(PaymentProviderPaymentMethods.to_json())

# convert the object into a dict
payment_provider_payment_methods_dict = payment_provider_payment_methods_instance.to_dict()
# create an instance of PaymentProviderPaymentMethods from a dict
payment_provider_payment_methods_from_dict = PaymentProviderPaymentMethods.from_dict(payment_provider_payment_methods_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


