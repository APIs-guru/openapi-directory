# GooglePrivacyDlpV2CloudStorageFileSet

Message representing a set of files in Cloud Storage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | The url, in the format &#x60;gs:///&#x60;. Trailing wildcard in the path is allowed. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_cloud_storage_file_set import GooglePrivacyDlpV2CloudStorageFileSet

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2CloudStorageFileSet from a JSON string
google_privacy_dlp_v2_cloud_storage_file_set_instance = GooglePrivacyDlpV2CloudStorageFileSet.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2CloudStorageFileSet.to_json())

# convert the object into a dict
google_privacy_dlp_v2_cloud_storage_file_set_dict = google_privacy_dlp_v2_cloud_storage_file_set_instance.to_dict()
# create an instance of GooglePrivacyDlpV2CloudStorageFileSet from a dict
google_privacy_dlp_v2_cloud_storage_file_set_from_dict = GooglePrivacyDlpV2CloudStorageFileSet.from_dict(google_privacy_dlp_v2_cloud_storage_file_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


