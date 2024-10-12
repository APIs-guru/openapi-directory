# RequestPhoneVerificationRequest

Request message for the RequestPhoneVerification method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language_code** | **str** | Language code [IETF BCP 47 syntax](https://tools.ietf.org/html/bcp47) (for example, en-US). Language code is used to provide localized &#x60;SMS&#x60; and &#x60;PHONE_CALL&#x60;. Default language used is en-US if not provided. | [optional] 
**phone_number** | **str** | Phone number to be verified. | [optional] 
**phone_region_code** | **str** | Required. Two letter country code for the phone number, for example &#x60;CA&#x60; for Canadian numbers. See the [ISO 3166-1 alpha-2](https://wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) officially assigned codes. | [optional] 
**phone_verification_method** | **str** | Verification method to receive verification code. | [optional] 

## Example

```python
from openapi_client.models.request_phone_verification_request import RequestPhoneVerificationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RequestPhoneVerificationRequest from a JSON string
request_phone_verification_request_instance = RequestPhoneVerificationRequest.from_json(json)
# print the JSON string representation of the object
print(RequestPhoneVerificationRequest.to_json())

# convert the object into a dict
request_phone_verification_request_dict = request_phone_verification_request_instance.to_dict()
# create an instance of RequestPhoneVerificationRequest from a dict
request_phone_verification_request_from_dict = RequestPhoneVerificationRequest.from_dict(request_phone_verification_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


