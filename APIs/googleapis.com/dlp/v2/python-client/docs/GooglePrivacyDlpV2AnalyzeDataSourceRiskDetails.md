# GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails

Result of a risk analysis operation request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categorical_stats_result** | [**GooglePrivacyDlpV2CategoricalStatsResult**](GooglePrivacyDlpV2CategoricalStatsResult.md) |  | [optional] 
**delta_presence_estimation_result** | [**GooglePrivacyDlpV2DeltaPresenceEstimationResult**](GooglePrivacyDlpV2DeltaPresenceEstimationResult.md) |  | [optional] 
**k_anonymity_result** | [**GooglePrivacyDlpV2KAnonymityResult**](GooglePrivacyDlpV2KAnonymityResult.md) |  | [optional] 
**k_map_estimation_result** | [**GooglePrivacyDlpV2KMapEstimationResult**](GooglePrivacyDlpV2KMapEstimationResult.md) |  | [optional] 
**l_diversity_result** | [**GooglePrivacyDlpV2LDiversityResult**](GooglePrivacyDlpV2LDiversityResult.md) |  | [optional] 
**numerical_stats_result** | [**GooglePrivacyDlpV2NumericalStatsResult**](GooglePrivacyDlpV2NumericalStatsResult.md) |  | [optional] 
**requested_options** | [**GooglePrivacyDlpV2RequestedRiskAnalysisOptions**](GooglePrivacyDlpV2RequestedRiskAnalysisOptions.md) |  | [optional] 
**requested_privacy_metric** | [**GooglePrivacyDlpV2PrivacyMetric**](GooglePrivacyDlpV2PrivacyMetric.md) |  | [optional] 
**requested_source_table** | [**GooglePrivacyDlpV2BigQueryTable**](GooglePrivacyDlpV2BigQueryTable.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_analyze_data_source_risk_details import GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails from a JSON string
google_privacy_dlp_v2_analyze_data_source_risk_details_instance = GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails.to_json())

# convert the object into a dict
google_privacy_dlp_v2_analyze_data_source_risk_details_dict = google_privacy_dlp_v2_analyze_data_source_risk_details_instance.to_dict()
# create an instance of GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails from a dict
google_privacy_dlp_v2_analyze_data_source_risk_details_from_dict = GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails.from_dict(google_privacy_dlp_v2_analyze_data_source_risk_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


