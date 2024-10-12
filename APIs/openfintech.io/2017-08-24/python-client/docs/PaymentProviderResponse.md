# PaymentProviderResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**PaymentProvider**](PaymentProvider.md) |  | [optional] 

## Example

```python
from openapi_client.models.payment_provider_response import PaymentProviderResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentProviderResponse from a JSON string
payment_provider_response_instance = PaymentProviderResponse.from_json(json)
# print the JSON string representation of the object
print(PaymentProviderResponse.to_json())

# convert the object into a dict
payment_provider_response_dict = payment_provider_response_instance.to_dict()
# create an instance of PaymentProviderResponse from a dict
payment_provider_response_from_dict = PaymentProviderResponse.from_dict(payment_provider_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


