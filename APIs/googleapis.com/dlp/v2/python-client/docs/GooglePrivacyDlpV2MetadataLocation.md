# GooglePrivacyDlpV2MetadataLocation

Metadata Location

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storage_label** | [**GooglePrivacyDlpV2StorageMetadataLabel**](GooglePrivacyDlpV2StorageMetadataLabel.md) |  | [optional] 
**type** | **str** | Type of metadata containing the finding. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_metadata_location import GooglePrivacyDlpV2MetadataLocation

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2MetadataLocation from a JSON string
google_privacy_dlp_v2_metadata_location_instance = GooglePrivacyDlpV2MetadataLocation.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2MetadataLocation.to_json())

# convert the object into a dict
google_privacy_dlp_v2_metadata_location_dict = google_privacy_dlp_v2_metadata_location_instance.to_dict()
# create an instance of GooglePrivacyDlpV2MetadataLocation from a dict
google_privacy_dlp_v2_metadata_location_from_dict = GooglePrivacyDlpV2MetadataLocation.from_dict(google_privacy_dlp_v2_metadata_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


