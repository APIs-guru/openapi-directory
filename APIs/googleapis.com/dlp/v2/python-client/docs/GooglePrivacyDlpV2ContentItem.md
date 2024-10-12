# GooglePrivacyDlpV2ContentItem

Type of content to inspect.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**byte_item** | [**GooglePrivacyDlpV2ByteContentItem**](GooglePrivacyDlpV2ByteContentItem.md) |  | [optional] 
**table** | [**GooglePrivacyDlpV2Table**](GooglePrivacyDlpV2Table.md) |  | [optional] 
**value** | **str** | String data to inspect or redact. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_content_item import GooglePrivacyDlpV2ContentItem

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2ContentItem from a JSON string
google_privacy_dlp_v2_content_item_instance = GooglePrivacyDlpV2ContentItem.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2ContentItem.to_json())

# convert the object into a dict
google_privacy_dlp_v2_content_item_dict = google_privacy_dlp_v2_content_item_instance.to_dict()
# create an instance of GooglePrivacyDlpV2ContentItem from a dict
google_privacy_dlp_v2_content_item_from_dict = GooglePrivacyDlpV2ContentItem.from_dict(google_privacy_dlp_v2_content_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


