# GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo

Information about a verification endpoint that can be used for 2FA.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_address** | **str** | Email address for which to trigger a verification request. | [optional] 
**last_verification_time** | **str** | Output only. Timestamp of the last successful verification for the endpoint, if any. | [optional] [readonly] 
**phone_number** | **str** | Phone number for which to trigger a verification request. Should be given in E.164 format. | [optional] 
**request_token** | **str** | Output only. Token to provide to the client to trigger endpoint verification. It must be used within 15 minutes. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_endpoint_verification_info import GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo from a JSON string
google_cloud_recaptchaenterprise_v1_endpoint_verification_info_instance = GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_endpoint_verification_info_dict = google_cloud_recaptchaenterprise_v1_endpoint_verification_info_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo from a dict
google_cloud_recaptchaenterprise_v1_endpoint_verification_info_from_dict = GoogleCloudRecaptchaenterpriseV1EndpointVerificationInfo.from_dict(google_cloud_recaptchaenterprise_v1_endpoint_verification_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


