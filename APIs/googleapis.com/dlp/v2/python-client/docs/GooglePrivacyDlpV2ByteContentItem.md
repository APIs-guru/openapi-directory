# GooglePrivacyDlpV2ByteContentItem

Container for bytes to inspect or redact.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **bytearray** | Content data to inspect or redact. | [optional] 
**type** | **str** | The type of data stored in the bytes string. Default will be TEXT_UTF8. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_byte_content_item import GooglePrivacyDlpV2ByteContentItem

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2ByteContentItem from a JSON string
google_privacy_dlp_v2_byte_content_item_instance = GooglePrivacyDlpV2ByteContentItem.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2ByteContentItem.to_json())

# convert the object into a dict
google_privacy_dlp_v2_byte_content_item_dict = google_privacy_dlp_v2_byte_content_item_instance.to_dict()
# create an instance of GooglePrivacyDlpV2ByteContentItem from a dict
google_privacy_dlp_v2_byte_content_item_from_dict = GooglePrivacyDlpV2ByteContentItem.from_dict(google_privacy_dlp_v2_byte_content_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


