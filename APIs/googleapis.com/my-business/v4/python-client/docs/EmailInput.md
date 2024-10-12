# EmailInput

Input for EMAIL verification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_address** | **str** | Email address where the PIN should be sent to. An email address is accepted only if it is one of the addresses provided by FetchVerificationOptions. If the EmailVerificationData has is_user_name_editable set to true, the client may specify a different user name (local-part) but must match the domain name. | [optional] 

## Example

```python
from openapi_client.models.email_input import EmailInput

# TODO update the JSON string below
json = "{}"
# create an instance of EmailInput from a JSON string
email_input_instance = EmailInput.from_json(json)
# print the JSON string representation of the object
print(EmailInput.to_json())

# convert the object into a dict
email_input_dict = email_input_instance.to_dict()
# create an instance of EmailInput from a dict
email_input_from_dict = EmailInput.from_dict(email_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


