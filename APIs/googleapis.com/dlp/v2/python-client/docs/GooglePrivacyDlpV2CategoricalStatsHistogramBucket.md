# GooglePrivacyDlpV2CategoricalStatsHistogramBucket

Histogram of value frequencies in the column.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket_size** | **str** | Total number of values in this bucket. | [optional] 
**bucket_value_count** | **str** | Total number of distinct values in this bucket. | [optional] 
**bucket_values** | [**List[GooglePrivacyDlpV2ValueFrequency]**](GooglePrivacyDlpV2ValueFrequency.md) | Sample of value frequencies in this bucket. The total number of values returned per bucket is capped at 20. | [optional] 
**value_frequency_lower_bound** | **str** | Lower bound on the value frequency of the values in this bucket. | [optional] 
**value_frequency_upper_bound** | **str** | Upper bound on the value frequency of the values in this bucket. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_categorical_stats_histogram_bucket import GooglePrivacyDlpV2CategoricalStatsHistogramBucket

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2CategoricalStatsHistogramBucket from a JSON string
google_privacy_dlp_v2_categorical_stats_histogram_bucket_instance = GooglePrivacyDlpV2CategoricalStatsHistogramBucket.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2CategoricalStatsHistogramBucket.to_json())

# convert the object into a dict
google_privacy_dlp_v2_categorical_stats_histogram_bucket_dict = google_privacy_dlp_v2_categorical_stats_histogram_bucket_instance.to_dict()
# create an instance of GooglePrivacyDlpV2CategoricalStatsHistogramBucket from a dict
google_privacy_dlp_v2_categorical_stats_histogram_bucket_from_dict = GooglePrivacyDlpV2CategoricalStatsHistogramBucket.from_dict(google_privacy_dlp_v2_categorical_stats_histogram_bucket_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


