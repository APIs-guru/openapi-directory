# RequestPhoneVerificationResponse

Response message for the RequestPhoneVerification method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**verification_id** | **str** | The verification ID to use in subsequent calls to &#x60;verifyphonenumber&#x60;. | [optional] 

## Example

```python
from openapi_client.models.request_phone_verification_response import RequestPhoneVerificationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RequestPhoneVerificationResponse from a JSON string
request_phone_verification_response_instance = RequestPhoneVerificationResponse.from_json(json)
# print the JSON string representation of the object
print(RequestPhoneVerificationResponse.to_json())

# convert the object into a dict
request_phone_verification_response_dict = request_phone_verification_response_instance.to_dict()
# create an instance of RequestPhoneVerificationResponse from a dict
request_phone_verification_response_from_dict = RequestPhoneVerificationResponse.from_dict(request_phone_verification_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


