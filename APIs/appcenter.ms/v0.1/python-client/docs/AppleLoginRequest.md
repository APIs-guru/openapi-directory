# AppleLoginRequest

Apple credentials needed to log into the Apple Developer Portal

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cookie** | **str** | The 30-day session cookie for multi-factor authentication backed accounts. | [optional] 
**password** | **str** | The password for the Apple Developer account. | 
**team_identifier** | **str** | Identifier of the team to use when logged in. | [optional] 
**username** | **str** | The username for the Apple Developer account. | 

## Example

```python
from openapi_client.models.apple_login_request import AppleLoginRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppleLoginRequest from a JSON string
apple_login_request_instance = AppleLoginRequest.from_json(json)
# print the JSON string representation of the object
print(AppleLoginRequest.to_json())

# convert the object into a dict
apple_login_request_dict = apple_login_request_instance.to_dict()
# create an instance of AppleLoginRequest from a dict
apple_login_request_from_dict = AppleLoginRequest.from_dict(apple_login_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


