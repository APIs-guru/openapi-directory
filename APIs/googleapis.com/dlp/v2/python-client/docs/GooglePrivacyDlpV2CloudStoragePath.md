# GooglePrivacyDlpV2CloudStoragePath

Message representing a single file or path in Cloud Storage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** | A URL representing a file or path (no wildcards) in Cloud Storage. Example: &#x60;gs://[BUCKET_NAME]/dictionary.txt&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_cloud_storage_path import GooglePrivacyDlpV2CloudStoragePath

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2CloudStoragePath from a JSON string
google_privacy_dlp_v2_cloud_storage_path_instance = GooglePrivacyDlpV2CloudStoragePath.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2CloudStoragePath.to_json())

# convert the object into a dict
google_privacy_dlp_v2_cloud_storage_path_dict = google_privacy_dlp_v2_cloud_storage_path_instance.to_dict()
# create an instance of GooglePrivacyDlpV2CloudStoragePath from a dict
google_privacy_dlp_v2_cloud_storage_path_from_dict = GooglePrivacyDlpV2CloudStoragePath.from_dict(google_privacy_dlp_v2_cloud_storage_path_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


