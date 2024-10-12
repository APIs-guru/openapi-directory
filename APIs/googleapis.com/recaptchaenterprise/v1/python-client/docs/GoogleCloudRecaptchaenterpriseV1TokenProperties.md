# GoogleCloudRecaptchaenterpriseV1TokenProperties

Properties of the provided event token.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | Output only. Action name provided at token generation. | [optional] [readonly] 
**android_package_name** | **str** | Output only. The name of the Android package with which the token was generated (Android keys only). | [optional] [readonly] 
**create_time** | **str** | Output only. The timestamp corresponding to the generation of the token. | [optional] [readonly] 
**hostname** | **str** | Output only. The hostname of the page on which the token was generated (Web keys only). | [optional] [readonly] 
**invalid_reason** | **str** | Output only. Reason associated with the response when valid &#x3D; false. | [optional] [readonly] 
**ios_bundle_id** | **str** | Output only. The ID of the iOS bundle with which the token was generated (iOS keys only). | [optional] [readonly] 
**valid** | **bool** | Output only. Whether the provided user response token is valid. When valid &#x3D; false, the reason could be specified in invalid_reason or it could also be due to a user failing to solve a challenge or a sitekey mismatch (i.e the sitekey used to generate the token was different than the one specified in the assessment). | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_token_properties import GoogleCloudRecaptchaenterpriseV1TokenProperties

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1TokenProperties from a JSON string
google_cloud_recaptchaenterprise_v1_token_properties_instance = GoogleCloudRecaptchaenterpriseV1TokenProperties.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1TokenProperties.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_token_properties_dict = google_cloud_recaptchaenterprise_v1_token_properties_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1TokenProperties from a dict
google_cloud_recaptchaenterprise_v1_token_properties_from_dict = GoogleCloudRecaptchaenterpriseV1TokenProperties.from_dict(google_cloud_recaptchaenterprise_v1_token_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


