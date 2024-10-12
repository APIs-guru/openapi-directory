# AppleLoginResponse

Indicates if login was successful.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**successful** | **bool** | True when login was successful. | [optional] 

## Example

```python
from openapi_client.models.apple_login_response import AppleLoginResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppleLoginResponse from a JSON string
apple_login_response_instance = AppleLoginResponse.from_json(json)
# print the JSON string representation of the object
print(AppleLoginResponse.to_json())

# convert the object into a dict
apple_login_response_dict = apple_login_response_instance.to_dict()
# create an instance of AppleLoginResponse from a dict
apple_login_response_from_dict = AppleLoginResponse.from_dict(apple_login_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


