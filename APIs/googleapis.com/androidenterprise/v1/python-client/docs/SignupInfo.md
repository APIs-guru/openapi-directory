# SignupInfo

A resource returned by the GenerateSignupUrl API, which contains the Signup URL and Completion Token.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completion_token** | **str** | An opaque token that will be required, along with the Enterprise Token, for obtaining the enterprise resource from CompleteSignup. | [optional] 
**kind** | **str** | Deprecated. | [optional] 
**url** | **str** | A URL under which the Admin can sign up for an enterprise. The page pointed to cannot be rendered in an iframe. | [optional] 

## Example

```python
from openapi_client.models.signup_info import SignupInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SignupInfo from a JSON string
signup_info_instance = SignupInfo.from_json(json)
# print the JSON string representation of the object
print(SignupInfo.to_json())

# convert the object into a dict
signup_info_dict = signup_info_instance.to_dict()
# create an instance of SignupInfo from a dict
signup_info_from_dict = SignupInfo.from_dict(signup_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


