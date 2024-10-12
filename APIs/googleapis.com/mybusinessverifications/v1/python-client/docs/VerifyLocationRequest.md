# VerifyLocationRequest

Request message for Verifications.VerifyLocation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**ServiceBusinessContext**](ServiceBusinessContext.md) |  | [optional] 
**email_address** | **str** | Optional. The input for EMAIL method. Email address where the PIN should be sent to. An email address is accepted only if it is one of the addresses provided by FetchVerificationOptions. If the EmailVerificationData has is_user_name_editable set to true, the client may specify a different user name (local-part) but must match the domain name. | [optional] 
**language_code** | **str** | Optional. The BCP 47 language code representing the language that is to be used for the verification process. | [optional] 
**mailer_contact** | **str** | Optional. The input for ADDRESS method. Contact name the mail should be sent to. | [optional] 
**method** | **str** | Required. Verification method. | [optional] 
**phone_number** | **str** | Optional. The input for PHONE_CALL/SMS method The phone number that should be called or be sent SMS to. It must be one of the phone numbers in the eligible options. | [optional] 
**token** | [**VerificationToken**](VerificationToken.md) |  | [optional] 

## Example

```python
from openapi_client.models.verify_location_request import VerifyLocationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of VerifyLocationRequest from a JSON string
verify_location_request_instance = VerifyLocationRequest.from_json(json)
# print the JSON string representation of the object
print(VerifyLocationRequest.to_json())

# convert the object into a dict
verify_location_request_dict = verify_location_request_instance.to_dict()
# create an instance of VerifyLocationRequest from a dict
verify_location_request_from_dict = VerifyLocationRequest.from_dict(verify_location_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


