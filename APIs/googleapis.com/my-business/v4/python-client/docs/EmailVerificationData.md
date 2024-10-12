# EmailVerificationData

Display data for verifications through email.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain_name** | **str** | Domain name in the email address. e.g. \&quot;gmail.com\&quot; in foo@gmail.com | [optional] 
**is_user_name_editable** | **bool** | Whether client is allowed to provide a different user name. | [optional] 
**user_name** | **str** | User name in the email address. e.g. \&quot;foo\&quot; in foo@gmail.com | [optional] 

## Example

```python
from openapi_client.models.email_verification_data import EmailVerificationData

# TODO update the JSON string below
json = "{}"
# create an instance of EmailVerificationData from a JSON string
email_verification_data_instance = EmailVerificationData.from_json(json)
# print the JSON string representation of the object
print(EmailVerificationData.to_json())

# convert the object into a dict
email_verification_data_dict = email_verification_data_instance.to_dict()
# create an instance of EmailVerificationData from a dict
email_verification_data_from_dict = EmailVerificationData.from_dict(email_verification_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


