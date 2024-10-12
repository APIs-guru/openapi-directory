# GooglePrivacyDlpV2InfoTypeSummary

The infoType details for this column.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**estimated_prevalence** | **int** | Not populated for predicted infotypes. | [optional] 
**info_type** | [**GooglePrivacyDlpV2InfoType**](GooglePrivacyDlpV2InfoType.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_info_type_summary import GooglePrivacyDlpV2InfoTypeSummary

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2InfoTypeSummary from a JSON string
google_privacy_dlp_v2_info_type_summary_instance = GooglePrivacyDlpV2InfoTypeSummary.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2InfoTypeSummary.to_json())

# convert the object into a dict
google_privacy_dlp_v2_info_type_summary_dict = google_privacy_dlp_v2_info_type_summary_instance.to_dict()
# create an instance of GooglePrivacyDlpV2InfoTypeSummary from a dict
google_privacy_dlp_v2_info_type_summary_from_dict = GooglePrivacyDlpV2InfoTypeSummary.from_dict(google_privacy_dlp_v2_info_type_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


