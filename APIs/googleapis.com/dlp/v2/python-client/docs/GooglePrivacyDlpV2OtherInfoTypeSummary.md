# GooglePrivacyDlpV2OtherInfoTypeSummary

Infotype details for other infoTypes found within a column.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**estimated_prevalence** | **int** | Approximate percentage of non-null rows that contained data detected by this infotype. | [optional] 
**excluded_from_analysis** | **bool** | Whether this infoType was excluded from sensitivity and risk analysis due to factors such as low prevalence (subject to change). | [optional] 
**info_type** | [**GooglePrivacyDlpV2InfoType**](GooglePrivacyDlpV2InfoType.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_other_info_type_summary import GooglePrivacyDlpV2OtherInfoTypeSummary

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2OtherInfoTypeSummary from a JSON string
google_privacy_dlp_v2_other_info_type_summary_instance = GooglePrivacyDlpV2OtherInfoTypeSummary.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2OtherInfoTypeSummary.to_json())

# convert the object into a dict
google_privacy_dlp_v2_other_info_type_summary_dict = google_privacy_dlp_v2_other_info_type_summary_instance.to_dict()
# create an instance of GooglePrivacyDlpV2OtherInfoTypeSummary from a dict
google_privacy_dlp_v2_other_info_type_summary_from_dict = GooglePrivacyDlpV2OtherInfoTypeSummary.from_dict(google_privacy_dlp_v2_other_info_type_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


