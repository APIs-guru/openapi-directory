# GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig

Configures the regions where users are allowed to send verification SMS for the project or tenant. This is based on the calling code of the destination phone number.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_by_default** | [**GoogleCloudIdentitytoolkitAdminV2AllowByDefault**](GoogleCloudIdentitytoolkitAdminV2AllowByDefault.md) |  | [optional] 
**allowlist_only** | [**GoogleCloudIdentitytoolkitAdminV2AllowlistOnly**](GoogleCloudIdentitytoolkitAdminV2AllowlistOnly.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_sms_region_config import GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig from a JSON string
google_cloud_identitytoolkit_admin_v2_sms_region_config_instance = GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_sms_region_config_dict = google_cloud_identitytoolkit_admin_v2_sms_region_config_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig from a dict
google_cloud_identitytoolkit_admin_v2_sms_region_config_from_dict = GoogleCloudIdentitytoolkitAdminV2SmsRegionConfig.from_dict(google_cloud_identitytoolkit_admin_v2_sms_region_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


