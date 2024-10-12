# GooglePrivacyDlpV2HybridContentItem

An individual hybrid item to inspect. Will be stored temporarily during processing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**finding_details** | [**GooglePrivacyDlpV2HybridFindingDetails**](GooglePrivacyDlpV2HybridFindingDetails.md) |  | [optional] 
**item** | [**GooglePrivacyDlpV2ContentItem**](GooglePrivacyDlpV2ContentItem.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_hybrid_content_item import GooglePrivacyDlpV2HybridContentItem

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2HybridContentItem from a JSON string
google_privacy_dlp_v2_hybrid_content_item_instance = GooglePrivacyDlpV2HybridContentItem.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2HybridContentItem.to_json())

# convert the object into a dict
google_privacy_dlp_v2_hybrid_content_item_dict = google_privacy_dlp_v2_hybrid_content_item_instance.to_dict()
# create an instance of GooglePrivacyDlpV2HybridContentItem from a dict
google_privacy_dlp_v2_hybrid_content_item_from_dict = GooglePrivacyDlpV2HybridContentItem.from_dict(google_privacy_dlp_v2_hybrid_content_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


