# GooglePrivacyDlpV2StorageMetadataLabel

Storage metadata label to indicate which metadata entry contains findings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Label name. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_storage_metadata_label import GooglePrivacyDlpV2StorageMetadataLabel

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2StorageMetadataLabel from a JSON string
google_privacy_dlp_v2_storage_metadata_label_instance = GooglePrivacyDlpV2StorageMetadataLabel.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2StorageMetadataLabel.to_json())

# convert the object into a dict
google_privacy_dlp_v2_storage_metadata_label_dict = google_privacy_dlp_v2_storage_metadata_label_instance.to_dict()
# create an instance of GooglePrivacyDlpV2StorageMetadataLabel from a dict
google_privacy_dlp_v2_storage_metadata_label_from_dict = GooglePrivacyDlpV2StorageMetadataLabel.from_dict(google_privacy_dlp_v2_storage_metadata_label_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


