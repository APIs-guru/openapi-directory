# AppleMutifactorLoginRequest

Apple credentials needed to log into the Apple Developer Portal

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authcode** | **str** | This is the six digit OTP used for completing the multi-factor authentication | 
**username** | **str** | The username for the Apple Developer account. | 

## Example

```python
from openapi_client.models.apple_mutifactor_login_request import AppleMutifactorLoginRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppleMutifactorLoginRequest from a JSON string
apple_mutifactor_login_request_instance = AppleMutifactorLoginRequest.from_json(json)
# print the JSON string representation of the object
print(AppleMutifactorLoginRequest.to_json())

# convert the object into a dict
apple_mutifactor_login_request_dict = apple_mutifactor_login_request_instance.to_dict()
# create an instance of AppleMutifactorLoginRequest from a dict
apple_mutifactor_login_request_from_dict = AppleMutifactorLoginRequest.from_dict(apple_mutifactor_login_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


