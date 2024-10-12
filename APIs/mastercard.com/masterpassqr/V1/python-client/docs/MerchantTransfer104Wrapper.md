# MerchantTransfer104Wrapper

Response details for a merchant transfer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchant_transfer** | [**MerchantTransfer104**](MerchantTransfer104.md) |  | [optional] 

## Example

```python
from openapi_client.models.merchant_transfer104_wrapper import MerchantTransfer104Wrapper

# TODO update the JSON string below
json = "{}"
# create an instance of MerchantTransfer104Wrapper from a JSON string
merchant_transfer104_wrapper_instance = MerchantTransfer104Wrapper.from_json(json)
# print the JSON string representation of the object
print(MerchantTransfer104Wrapper.to_json())

# convert the object into a dict
merchant_transfer104_wrapper_dict = merchant_transfer104_wrapper_instance.to_dict()
# create an instance of MerchantTransfer104Wrapper from a dict
merchant_transfer104_wrapper_from_dict = MerchantTransfer104Wrapper.from_dict(merchant_transfer104_wrapper_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


