# GetOobConfirmationCodeResponse

Response of getting a code for user confirmation (reset password, change email etc.).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The email address that the email is sent to. | [optional] 
**kind** | **str** | The fixed string \&quot;identitytoolkit#GetOobConfirmationCodeResponse\&quot;. | [optional] [default to 'identitytoolkit#GetOobConfirmationCodeResponse']
**oob_code** | **str** | The code to be send to the user. | [optional] 

## Example

```python
from openapi_client.models.get_oob_confirmation_code_response import GetOobConfirmationCodeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetOobConfirmationCodeResponse from a JSON string
get_oob_confirmation_code_response_instance = GetOobConfirmationCodeResponse.from_json(json)
# print the JSON string representation of the object
print(GetOobConfirmationCodeResponse.to_json())

# convert the object into a dict
get_oob_confirmation_code_response_dict = get_oob_confirmation_code_response_instance.to_dict()
# create an instance of GetOobConfirmationCodeResponse from a dict
get_oob_confirmation_code_response_from_dict = GetOobConfirmationCodeResponse.from_dict(get_oob_confirmation_code_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


