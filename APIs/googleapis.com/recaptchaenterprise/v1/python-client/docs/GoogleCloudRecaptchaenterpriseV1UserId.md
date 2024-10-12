# GoogleCloudRecaptchaenterpriseV1UserId

An identifier associated with a user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Optional. An email address. | [optional] 
**phone_number** | **str** | Optional. A phone number. Should use the E.164 format. | [optional] 
**username** | **str** | Optional. A unique username, if different from all the other identifiers and &#x60;account_id&#x60; that are provided. Can be a unique login handle or display name for a user. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_user_id import GoogleCloudRecaptchaenterpriseV1UserId

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1UserId from a JSON string
google_cloud_recaptchaenterprise_v1_user_id_instance = GoogleCloudRecaptchaenterpriseV1UserId.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1UserId.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_user_id_dict = google_cloud_recaptchaenterprise_v1_user_id_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1UserId from a dict
google_cloud_recaptchaenterprise_v1_user_id_from_dict = GoogleCloudRecaptchaenterpriseV1UserId.from_dict(google_cloud_recaptchaenterprise_v1_user_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


