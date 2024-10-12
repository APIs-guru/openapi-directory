# ResetPasswordResponse

Response of resetting the password.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The user&#39;s email. If the out-of-band code is for email recovery, the user&#39;s original email. | [optional] 
**kind** | **str** | The fixed string \&quot;identitytoolkit#ResetPasswordResponse\&quot;. | [optional] [default to 'identitytoolkit#ResetPasswordResponse']
**new_email** | **str** | If the out-of-band code is for email recovery, the user&#39;s new email. | [optional] 
**request_type** | **str** | The request type. | [optional] 

## Example

```python
from openapi_client.models.reset_password_response import ResetPasswordResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ResetPasswordResponse from a JSON string
reset_password_response_instance = ResetPasswordResponse.from_json(json)
# print the JSON string representation of the object
print(ResetPasswordResponse.to_json())

# convert the object into a dict
reset_password_response_dict = reset_password_response_instance.to_dict()
# create an instance of ResetPasswordResponse from a dict
reset_password_response_from_dict = ResetPasswordResponse.from_dict(reset_password_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


