# DiscoverableProgram

Information about how a class may be discovered and instantiated from within the Android Pay app. This is done by searching for a loyalty or gift card program and scanning or manually entering.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchant_signin_info** | [**DiscoverableProgramMerchantSigninInfo**](DiscoverableProgramMerchantSigninInfo.md) |  | [optional] 
**merchant_signup_info** | [**DiscoverableProgramMerchantSignupInfo**](DiscoverableProgramMerchantSignupInfo.md) |  | [optional] 
**state** | **str** | Visibility state of the discoverable program. | [optional] 

## Example

```python
from openapi_client.models.discoverable_program import DiscoverableProgram

# TODO update the JSON string below
json = "{}"
# create an instance of DiscoverableProgram from a JSON string
discoverable_program_instance = DiscoverableProgram.from_json(json)
# print the JSON string representation of the object
print(DiscoverableProgram.to_json())

# convert the object into a dict
discoverable_program_dict = discoverable_program_instance.to_dict()
# create an instance of DiscoverableProgram from a dict
discoverable_program_from_dict = DiscoverableProgram.from_dict(discoverable_program_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


