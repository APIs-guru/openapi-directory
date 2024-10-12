# GooglePrivacyDlpV2PrivacyMetric

Privacy metric to compute for reidentification risk analysis.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categorical_stats_config** | [**GooglePrivacyDlpV2CategoricalStatsConfig**](GooglePrivacyDlpV2CategoricalStatsConfig.md) |  | [optional] 
**delta_presence_estimation_config** | [**GooglePrivacyDlpV2DeltaPresenceEstimationConfig**](GooglePrivacyDlpV2DeltaPresenceEstimationConfig.md) |  | [optional] 
**k_anonymity_config** | [**GooglePrivacyDlpV2KAnonymityConfig**](GooglePrivacyDlpV2KAnonymityConfig.md) |  | [optional] 
**k_map_estimation_config** | [**GooglePrivacyDlpV2KMapEstimationConfig**](GooglePrivacyDlpV2KMapEstimationConfig.md) |  | [optional] 
**l_diversity_config** | [**GooglePrivacyDlpV2LDiversityConfig**](GooglePrivacyDlpV2LDiversityConfig.md) |  | [optional] 
**numerical_stats_config** | [**GooglePrivacyDlpV2NumericalStatsConfig**](GooglePrivacyDlpV2NumericalStatsConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_privacy_metric import GooglePrivacyDlpV2PrivacyMetric

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2PrivacyMetric from a JSON string
google_privacy_dlp_v2_privacy_metric_instance = GooglePrivacyDlpV2PrivacyMetric.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2PrivacyMetric.to_json())

# convert the object into a dict
google_privacy_dlp_v2_privacy_metric_dict = google_privacy_dlp_v2_privacy_metric_instance.to_dict()
# create an instance of GooglePrivacyDlpV2PrivacyMetric from a dict
google_privacy_dlp_v2_privacy_metric_from_dict = GooglePrivacyDlpV2PrivacyMetric.from_dict(google_privacy_dlp_v2_privacy_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


