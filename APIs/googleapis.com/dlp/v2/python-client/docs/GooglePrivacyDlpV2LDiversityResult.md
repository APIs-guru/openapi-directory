# GooglePrivacyDlpV2LDiversityResult

Result of the l-diversity computation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sensitive_value_frequency_histogram_buckets** | [**List[GooglePrivacyDlpV2LDiversityHistogramBucket]**](GooglePrivacyDlpV2LDiversityHistogramBucket.md) | Histogram of l-diversity equivalence class sensitive value frequencies. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_l_diversity_result import GooglePrivacyDlpV2LDiversityResult

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2LDiversityResult from a JSON string
google_privacy_dlp_v2_l_diversity_result_instance = GooglePrivacyDlpV2LDiversityResult.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2LDiversityResult.to_json())

# convert the object into a dict
google_privacy_dlp_v2_l_diversity_result_dict = google_privacy_dlp_v2_l_diversity_result_instance.to_dict()
# create an instance of GooglePrivacyDlpV2LDiversityResult from a dict
google_privacy_dlp_v2_l_diversity_result_from_dict = GooglePrivacyDlpV2LDiversityResult.from_dict(google_privacy_dlp_v2_l_diversity_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


