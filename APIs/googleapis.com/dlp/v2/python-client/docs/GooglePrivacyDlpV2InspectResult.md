# GooglePrivacyDlpV2InspectResult

All the findings for a single scanned item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**findings** | [**List[GooglePrivacyDlpV2Finding]**](GooglePrivacyDlpV2Finding.md) | List of findings for an item. | [optional] 
**findings_truncated** | **bool** | If true, then this item might have more findings than were returned, and the findings returned are an arbitrary subset of all findings. The findings list might be truncated because the input items were too large, or because the server reached the maximum amount of resources allowed for a single API call. For best results, divide the input into smaller batches. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_inspect_result import GooglePrivacyDlpV2InspectResult

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2InspectResult from a JSON string
google_privacy_dlp_v2_inspect_result_instance = GooglePrivacyDlpV2InspectResult.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2InspectResult.to_json())

# convert the object into a dict
google_privacy_dlp_v2_inspect_result_dict = google_privacy_dlp_v2_inspect_result_instance.to_dict()
# create an instance of GooglePrivacyDlpV2InspectResult from a dict
google_privacy_dlp_v2_inspect_result_from_dict = GooglePrivacyDlpV2InspectResult.from_dict(google_privacy_dlp_v2_inspect_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


