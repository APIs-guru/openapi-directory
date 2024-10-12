# DiscoverableProgramMerchantSigninInfo

Information about the merchant hosted signin flow for a program.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signin_website** | [**Uri**](Uri.md) |  | [optional] 

## Example

```python
from openapi_client.models.discoverable_program_merchant_signin_info import DiscoverableProgramMerchantSigninInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DiscoverableProgramMerchantSigninInfo from a JSON string
discoverable_program_merchant_signin_info_instance = DiscoverableProgramMerchantSigninInfo.from_json(json)
# print the JSON string representation of the object
print(DiscoverableProgramMerchantSigninInfo.to_json())

# convert the object into a dict
discoverable_program_merchant_signin_info_dict = discoverable_program_merchant_signin_info_instance.to_dict()
# create an instance of DiscoverableProgramMerchantSigninInfo from a dict
discoverable_program_merchant_signin_info_from_dict = DiscoverableProgramMerchantSigninInfo.from_dict(discoverable_program_merchant_signin_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


