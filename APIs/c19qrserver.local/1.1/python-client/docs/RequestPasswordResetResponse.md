# RequestPasswordResetResponse

This object contains the password reset code for the user

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The user&#39;s email address | [optional] 
**guid** | **str** | The password reset code | [optional] 

## Example

```python
from openapi_client.models.request_password_reset_response import RequestPasswordResetResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RequestPasswordResetResponse from a JSON string
request_password_reset_response_instance = RequestPasswordResetResponse.from_json(json)
# print the JSON string representation of the object
print(RequestPasswordResetResponse.to_json())

# convert the object into a dict
request_password_reset_response_dict = request_password_reset_response_instance.to_dict()
# create an instance of RequestPasswordResetResponse from a dict
request_password_reset_response_from_dict = RequestPasswordResetResponse.from_dict(request_password_reset_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


