# GooglePrivacyDlpV2StorageConfig

Shared message indicating Cloud storage type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**big_query_options** | [**GooglePrivacyDlpV2BigQueryOptions**](GooglePrivacyDlpV2BigQueryOptions.md) |  | [optional] 
**cloud_storage_options** | [**GooglePrivacyDlpV2CloudStorageOptions**](GooglePrivacyDlpV2CloudStorageOptions.md) |  | [optional] 
**datastore_options** | [**GooglePrivacyDlpV2DatastoreOptions**](GooglePrivacyDlpV2DatastoreOptions.md) |  | [optional] 
**hybrid_options** | [**GooglePrivacyDlpV2HybridOptions**](GooglePrivacyDlpV2HybridOptions.md) |  | [optional] 
**timespan_config** | [**GooglePrivacyDlpV2TimespanConfig**](GooglePrivacyDlpV2TimespanConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_storage_config import GooglePrivacyDlpV2StorageConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2StorageConfig from a JSON string
google_privacy_dlp_v2_storage_config_instance = GooglePrivacyDlpV2StorageConfig.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2StorageConfig.to_json())

# convert the object into a dict
google_privacy_dlp_v2_storage_config_dict = google_privacy_dlp_v2_storage_config_instance.to_dict()
# create an instance of GooglePrivacyDlpV2StorageConfig from a dict
google_privacy_dlp_v2_storage_config_from_dict = GooglePrivacyDlpV2StorageConfig.from_dict(google_privacy_dlp_v2_storage_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


