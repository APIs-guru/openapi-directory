# GooglePrivacyDlpV2CategoricalStatsResult

Result of the categorical stats computation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value_frequency_histogram_buckets** | [**List[GooglePrivacyDlpV2CategoricalStatsHistogramBucket]**](GooglePrivacyDlpV2CategoricalStatsHistogramBucket.md) | Histogram of value frequencies in the column. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_categorical_stats_result import GooglePrivacyDlpV2CategoricalStatsResult

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2CategoricalStatsResult from a JSON string
google_privacy_dlp_v2_categorical_stats_result_instance = GooglePrivacyDlpV2CategoricalStatsResult.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2CategoricalStatsResult.to_json())

# convert the object into a dict
google_privacy_dlp_v2_categorical_stats_result_dict = google_privacy_dlp_v2_categorical_stats_result_instance.to_dict()
# create an instance of GooglePrivacyDlpV2CategoricalStatsResult from a dict
google_privacy_dlp_v2_categorical_stats_result_from_dict = GooglePrivacyDlpV2CategoricalStatsResult.from_dict(google_privacy_dlp_v2_categorical_stats_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


