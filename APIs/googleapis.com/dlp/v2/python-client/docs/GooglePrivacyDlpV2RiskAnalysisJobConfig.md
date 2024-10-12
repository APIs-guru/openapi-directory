# GooglePrivacyDlpV2RiskAnalysisJobConfig

Configuration for a risk analysis job. See https://cloud.google.com/sensitive-data-protection/docs/concepts-risk-analysis to learn more.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**List[GooglePrivacyDlpV2Action]**](GooglePrivacyDlpV2Action.md) | Actions to execute at the completion of the job. Are executed in the order provided. | [optional] 
**privacy_metric** | [**GooglePrivacyDlpV2PrivacyMetric**](GooglePrivacyDlpV2PrivacyMetric.md) |  | [optional] 
**source_table** | [**GooglePrivacyDlpV2BigQueryTable**](GooglePrivacyDlpV2BigQueryTable.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_risk_analysis_job_config import GooglePrivacyDlpV2RiskAnalysisJobConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2RiskAnalysisJobConfig from a JSON string
google_privacy_dlp_v2_risk_analysis_job_config_instance = GooglePrivacyDlpV2RiskAnalysisJobConfig.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2RiskAnalysisJobConfig.to_json())

# convert the object into a dict
google_privacy_dlp_v2_risk_analysis_job_config_dict = google_privacy_dlp_v2_risk_analysis_job_config_instance.to_dict()
# create an instance of GooglePrivacyDlpV2RiskAnalysisJobConfig from a dict
google_privacy_dlp_v2_risk_analysis_job_config_from_dict = GooglePrivacyDlpV2RiskAnalysisJobConfig.from_dict(google_privacy_dlp_v2_risk_analysis_job_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


