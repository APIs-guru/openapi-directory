# GooglePrivacyDlpV2DocumentLocation

Location of a finding within a document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_offset** | **str** | Offset of the line, from the beginning of the file, where the finding is located. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_document_location import GooglePrivacyDlpV2DocumentLocation

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2DocumentLocation from a JSON string
google_privacy_dlp_v2_document_location_instance = GooglePrivacyDlpV2DocumentLocation.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2DocumentLocation.to_json())

# convert the object into a dict
google_privacy_dlp_v2_document_location_dict = google_privacy_dlp_v2_document_location_instance.to_dict()
# create an instance of GooglePrivacyDlpV2DocumentLocation from a dict
google_privacy_dlp_v2_document_location_from_dict = GooglePrivacyDlpV2DocumentLocation.from_dict(google_privacy_dlp_v2_document_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


