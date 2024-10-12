# GoogleCloudRecaptchaenterpriseV1AppleDeveloperId

Contains fields that are required to perform Apple-specific integrity checks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_id** | **str** | Required. The Apple developer key ID (10-character string). | [optional] 
**private_key** | **str** | Required. Input only. A private key (downloaded as a text file with a .p8 file extension) generated for your Apple Developer account. Ensure that Apple DeviceCheck is enabled for the private key. | [optional] 
**team_id** | **str** | Required. The Apple team ID (10-character string) owning the provisioning profile used to build your application. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recaptchaenterprise_v1_apple_developer_id import GoogleCloudRecaptchaenterpriseV1AppleDeveloperId

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecaptchaenterpriseV1AppleDeveloperId from a JSON string
google_cloud_recaptchaenterprise_v1_apple_developer_id_instance = GoogleCloudRecaptchaenterpriseV1AppleDeveloperId.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecaptchaenterpriseV1AppleDeveloperId.to_json())

# convert the object into a dict
google_cloud_recaptchaenterprise_v1_apple_developer_id_dict = google_cloud_recaptchaenterprise_v1_apple_developer_id_instance.to_dict()
# create an instance of GoogleCloudRecaptchaenterpriseV1AppleDeveloperId from a dict
google_cloud_recaptchaenterprise_v1_apple_developer_id_from_dict = GoogleCloudRecaptchaenterpriseV1AppleDeveloperId.from_dict(google_cloud_recaptchaenterprise_v1_apple_developer_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


