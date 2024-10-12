# GoogleCloudIdentitytoolkitAdminV2TemporaryQuota

Temporary quota increase / decrease

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quota** | **str** | Corresponds to the &#39;refill_token_count&#39; field in QuotaServer config | [optional] 
**quota_duration** | **str** | How long this quota will be active for | [optional] 
**start_time** | **str** | When this quota will take effect | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_admin_v2_temporary_quota import GoogleCloudIdentitytoolkitAdminV2TemporaryQuota

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitAdminV2TemporaryQuota from a JSON string
google_cloud_identitytoolkit_admin_v2_temporary_quota_instance = GoogleCloudIdentitytoolkitAdminV2TemporaryQuota.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitAdminV2TemporaryQuota.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_admin_v2_temporary_quota_dict = google_cloud_identitytoolkit_admin_v2_temporary_quota_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitAdminV2TemporaryQuota from a dict
google_cloud_identitytoolkit_admin_v2_temporary_quota_from_dict = GoogleCloudIdentitytoolkitAdminV2TemporaryQuota.from_dict(google_cloud_identitytoolkit_admin_v2_temporary_quota_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


