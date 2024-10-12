# TerminatedMerchant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchant** | [**Merchant**](Merchant.md) |  | [optional] 
**merchant_match** | [**MerchantMatch**](MerchantMatch.md) |  | [optional] 

## Example

```python
from openapi_client.models.terminated_merchant import TerminatedMerchant

# TODO update the JSON string below
json = "{}"
# create an instance of TerminatedMerchant from a JSON string
terminated_merchant_instance = TerminatedMerchant.from_json(json)
# print the JSON string representation of the object
print(TerminatedMerchant.to_json())

# convert the object into a dict
terminated_merchant_dict = terminated_merchant_instance.to_dict()
# create an instance of TerminatedMerchant from a dict
terminated_merchant_from_dict = TerminatedMerchant.from_dict(terminated_merchant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


