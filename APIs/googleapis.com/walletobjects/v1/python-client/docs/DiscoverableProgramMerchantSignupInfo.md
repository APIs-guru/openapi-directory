# DiscoverableProgramMerchantSignupInfo

Information about the merchant hosted signup flow for a program.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signup_shared_datas** | **List[str]** |  User data that is sent in a POST request to the signup website URL. This information is encoded and then shared so that the merchant&#39;s website can prefill fields used to enroll the user for the discoverable program. | [optional] 
**signup_website** | [**Uri**](Uri.md) |  | [optional] 

## Example

```python
from openapi_client.models.discoverable_program_merchant_signup_info import DiscoverableProgramMerchantSignupInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DiscoverableProgramMerchantSignupInfo from a JSON string
discoverable_program_merchant_signup_info_instance = DiscoverableProgramMerchantSignupInfo.from_json(json)
# print the JSON string representation of the object
print(DiscoverableProgramMerchantSignupInfo.to_json())

# convert the object into a dict
discoverable_program_merchant_signup_info_dict = discoverable_program_merchant_signup_info_instance.to_dict()
# create an instance of DiscoverableProgramMerchantSignupInfo from a dict
discoverable_program_merchant_signup_info_from_dict = DiscoverableProgramMerchantSignupInfo.from_dict(discoverable_program_merchant_signup_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


