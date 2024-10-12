# GoogleCloudRecaptchaenterpriseV1UserInfo

User information associated with a request protected by reCAPTCHA Enterprise.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Optional. For logged-in requests or login/registration requests, the unique account identifier associated with this user. You can use the username if it is stable (meaning it is the same for every request associated with the same user), or any stable user ID of your choice. Leave blank for non logged-in actions or guest checkout. | [optional] 
**create_account_time** | **str** | Optional. Creation time for this account associated with this user. Leave blank for non logged-in actions, guest checkout, or when there is no account associated with the current user. | [optional] 
**user_ids** | [**List[GoogleCloudRecaptchaenterpriseV1UserId]**](GoogleCloudRecaptchaenterpriseV1UserId.md) | Optional. Identifiers associated with this user or request. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_user_info import GoogleCloudRecaptchaenterpriseV1UserInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1UserInfo from a JSON string
google_cloud_recaptchaenterprise_v1_user_info_instance = GoogleCloudRecaptchaenterpriseV1UserInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1UserInfo.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_user_info_dict = google_cloud_recaptchaenterprise_v1_user_info_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1UserInfo from a dict
google_cloud_recaptchaenterprise_v1_user_info_from_dict = GoogleCloudRecaptchaenterpriseV1UserInfo.from_dict(google_cloud_recaptchaenterprise_v1_user_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


