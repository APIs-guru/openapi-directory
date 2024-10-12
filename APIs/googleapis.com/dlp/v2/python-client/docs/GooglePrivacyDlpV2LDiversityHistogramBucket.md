# GooglePrivacyDlpV2LDiversityHistogramBucket

Histogram of l-diversity equivalence class sensitive value frequencies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket_size** | **str** | Total number of equivalence classes in this bucket. | [optional] 
**bucket_value_count** | **str** | Total number of distinct equivalence classes in this bucket. | [optional] 
**bucket_values** | [**List[GooglePrivacyDlpV2LDiversityEquivalenceClass]**](GooglePrivacyDlpV2LDiversityEquivalenceClass.md) | Sample of equivalence classes in this bucket. The total number of classes returned per bucket is capped at 20. | [optional] 
**sensitive_value_frequency_lower_bound** | **str** | Lower bound on the sensitive value frequencies of the equivalence classes in this bucket. | [optional] 
**sensitive_value_frequency_upper_bound** | **str** | Upper bound on the sensitive value frequencies of the equivalence classes in this bucket. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_l_diversity_histogram_bucket import GooglePrivacyDlpV2LDiversityHistogramBucket

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2LDiversityHistogramBucket from a JSON string
google_privacy_dlp_v2_l_diversity_histogram_bucket_instance = GooglePrivacyDlpV2LDiversityHistogramBucket.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2LDiversityHistogramBucket.to_json())

# convert the object into a dict
google_privacy_dlp_v2_l_diversity_histogram_bucket_dict = google_privacy_dlp_v2_l_diversity_histogram_bucket_instance.to_dict()
# create an instance of GooglePrivacyDlpV2LDiversityHistogramBucket from a dict
google_privacy_dlp_v2_l_diversity_histogram_bucket_from_dict = GooglePrivacyDlpV2LDiversityHistogramBucket.from_dict(google_privacy_dlp_v2_l_diversity_histogram_bucket_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


