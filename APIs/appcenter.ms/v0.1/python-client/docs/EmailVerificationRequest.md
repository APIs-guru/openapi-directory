# EmailVerificationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | **str** | The verification token that was sent to the user | 

## Example

```python
from openapi_client.models.email_verification_request import EmailVerificationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EmailVerificationRequest from a JSON string
email_verification_request_instance = EmailVerificationRequest.from_json(json)
# print the JSON string representation of the object
print(EmailVerificationRequest.to_json())

# convert the object into a dict
email_verification_request_dict = email_verification_request_instance.to_dict()
# create an instance of EmailVerificationRequest from a dict
email_verification_request_from_dict = EmailVerificationRequest.from_dict(email_verification_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


