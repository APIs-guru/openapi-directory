# MerchantPaymentTransfer29Wrapper

Contains the details of the request message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchant_payment_transfer** | [**MerchantPaymentTransfer29**](MerchantPaymentTransfer29.md) |  | [optional] 

## Example

```python
from openapi_client.models.merchant_payment_transfer29_wrapper import MerchantPaymentTransfer29Wrapper

# TODO update the JSON string below
json = "{}"
# create an instance of MerchantPaymentTransfer29Wrapper from a JSON string
merchant_payment_transfer29_wrapper_instance = MerchantPaymentTransfer29Wrapper.from_json(json)
# print the JSON string representation of the object
print(MerchantPaymentTransfer29Wrapper.to_json())

# convert the object into a dict
merchant_payment_transfer29_wrapper_dict = merchant_payment_transfer29_wrapper_instance.to_dict()
# create an instance of MerchantPaymentTransfer29Wrapper from a dict
merchant_payment_transfer29_wrapper_from_dict = MerchantPaymentTransfer29Wrapper.from_dict(merchant_payment_transfer29_wrapper_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


