# MerchantRefundTransfer93Wrapper

Contains the details of the request message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchant_refund_transfer** | [**MerchantRefundTransfer93**](MerchantRefundTransfer93.md) |  | [optional] 

## Example

```python
from openapi_client.models.merchant_refund_transfer93_wrapper import MerchantRefundTransfer93Wrapper

# TODO update the JSON string below
json = "{}"
# create an instance of MerchantRefundTransfer93Wrapper from a JSON string
merchant_refund_transfer93_wrapper_instance = MerchantRefundTransfer93Wrapper.from_json(json)
# print the JSON string representation of the object
print(MerchantRefundTransfer93Wrapper.to_json())

# convert the object into a dict
merchant_refund_transfer93_wrapper_dict = merchant_refund_transfer93_wrapper_instance.to_dict()
# create an instance of MerchantRefundTransfer93Wrapper from a dict
merchant_refund_transfer93_wrapper_from_dict = MerchantRefundTransfer93Wrapper.from_dict(merchant_refund_transfer93_wrapper_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


