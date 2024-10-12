# GooglePrivacyDlpV2RequestedRiskAnalysisOptions

Risk analysis options.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_config** | [**GooglePrivacyDlpV2RiskAnalysisJobConfig**](GooglePrivacyDlpV2RiskAnalysisJobConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_requested_risk_analysis_options import GooglePrivacyDlpV2RequestedRiskAnalysisOptions

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2RequestedRiskAnalysisOptions from a JSON string
google_privacy_dlp_v2_requested_risk_analysis_options_instance = GooglePrivacyDlpV2RequestedRiskAnalysisOptions.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2RequestedRiskAnalysisOptions.to_json())

# convert the object into a dict
google_privacy_dlp_v2_requested_risk_analysis_options_dict = google_privacy_dlp_v2_requested_risk_analysis_options_instance.to_dict()
# create an instance of GooglePrivacyDlpV2RequestedRiskAnalysisOptions from a dict
google_privacy_dlp_v2_requested_risk_analysis_options_from_dict = GooglePrivacyDlpV2RequestedRiskAnalysisOptions.from_dict(google_privacy_dlp_v2_requested_risk_analysis_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


