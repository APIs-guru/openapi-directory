# MerchantTransfer1Wrapper

Contains the details of the request message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchant_transfer** | [**MerchantTransfer1**](MerchantTransfer1.md) |  | [optional] 

## Example

```python
from openapi_client.models.merchant_transfer1_wrapper import MerchantTransfer1Wrapper

# TODO update the JSON string below
json = "{}"
# create an instance of MerchantTransfer1Wrapper from a JSON string
merchant_transfer1_wrapper_instance = MerchantTransfer1Wrapper.from_json(json)
# print the JSON string representation of the object
print(MerchantTransfer1Wrapper.to_json())

# convert the object into a dict
merchant_transfer1_wrapper_dict = merchant_transfer1_wrapper_instance.to_dict()
# create an instance of MerchantTransfer1Wrapper from a dict
merchant_transfer1_wrapper_from_dict = MerchantTransfer1Wrapper.from_dict(merchant_transfer1_wrapper_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


