# GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo

Information about account verification, used for identity verification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoints** | [**List[GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo]**](GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo.md) | Optional. Endpoints that can be used for identity verification. | [optional] 
**language_code** | **str** | Optional. Language code preference for the verification message, set as a IETF BCP 47 language code. | [optional] 
**latest_verification_result** | **str** | Output only. Result of the latest account verification challenge. | [optional] [readonly] 
**username** | **str** | Username of the account that is being verified. Deprecated. Customers should now provide the &#x60;account_id&#x60; field in &#x60;event.user_info&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_account_verification_info import GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo from a JSON string
google_cloud_recaptchaenterprise_v1_account_verification_info_instance = GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_account_verification_info_dict = google_cloud_recaptchaenterprise_v1_account_verification_info_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo from a dict
google_cloud_recaptchaenterprise_v1_account_verification_info_from_dict = GoogleCloudRecaptchaenterpriseV1AccountVerificationInfo.from_dict(google_cloud_recaptchaenterprise_v1_account_verification_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


