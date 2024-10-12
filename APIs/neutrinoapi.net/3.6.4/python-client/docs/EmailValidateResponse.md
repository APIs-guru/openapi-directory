# EmailValidateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **str** | The email domain | 
**domain_error** | **bool** | True if this address has a domain error (e.g. no valid mail server records) | 
**email** | **str** | The email address. If you have used the fix-typos option then this will be the fixed address | 
**is_disposable** | **bool** | True if this address is a disposable, temporary or darknet related email address | 
**is_freemail** | **bool** | True if this address is a free-mail address | 
**is_personal** | **bool** | True if this address belongs to a person. False if this is a role based address, e.g. admin@, help@, office@, etc. | 
**provider** | **str** | The email service provider domain | 
**syntax_error** | **bool** | True if this address has a syntax error | 
**typos_fixed** | **bool** | True if typos have been fixed | 
**valid** | **bool** | Is this a valid email | 

## Example

```python
from openapi_client.models.email_validate_response import EmailValidateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of EmailValidateResponse from a JSON string
email_validate_response_instance = EmailValidateResponse.from_json(json)
# print the JSON string representation of the object
print(EmailValidateResponse.to_json())

# convert the object into a dict
email_validate_response_dict = email_validate_response_instance.to_dict()
# create an instance of EmailValidateResponse from a dict
email_validate_response_from_dict = EmailValidateResponse.from_dict(email_validate_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


