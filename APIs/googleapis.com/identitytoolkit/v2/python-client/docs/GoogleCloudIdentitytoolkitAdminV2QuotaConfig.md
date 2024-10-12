# GoogleCloudIdentitytoolkitAdminV2QuotaConfig

Configuration related to quotas.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sign_up_quota_config** | [**GoogleCloudIdentitytoolkitAdminV2TemporaryQuota**](GoogleCloudIdentitytoolkitAdminV2TemporaryQuota.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_quota_config import GoogleCloudIdentitytoolkitAdminV2QuotaConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2QuotaConfig from a JSON string
google_cloud_identitytoolkit_admin_v2_quota_config_instance = GoogleCloudIdentitytoolkitAdminV2QuotaConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2QuotaConfig.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_quota_config_dict = google_cloud_identitytoolkit_admin_v2_quota_config_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2QuotaConfig from a dict
google_cloud_identitytoolkit_admin_v2_quota_config_from_dict = GoogleCloudIdentitytoolkitAdminV2QuotaConfig.from_dict(google_cloud_identitytoolkit_admin_v2_quota_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


