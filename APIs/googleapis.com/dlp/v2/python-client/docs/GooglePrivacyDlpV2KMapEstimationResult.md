# GooglePrivacyDlpV2KMapEstimationResult

Result of the reidentifiability analysis. Note that these results are an estimation, not exact values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**k_map_estimation_histogram** | [**List[GooglePrivacyDlpV2KMapEstimationHistogramBucket]**](GooglePrivacyDlpV2KMapEstimationHistogramBucket.md) | The intervals [min_anonymity, max_anonymity] do not overlap. If a value doesn&#39;t correspond to any such interval, the associated frequency is zero. For example, the following records: {min_anonymity: 1, max_anonymity: 1, frequency: 17} {min_anonymity: 2, max_anonymity: 3, frequency: 42} {min_anonymity: 5, max_anonymity: 10, frequency: 99} mean that there are no record with an estimated anonymity of 4, 5, or larger than 10. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_k_map_estimation_result import GooglePrivacyDlpV2KMapEstimationResult

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2KMapEstimationResult from a JSON string
google_privacy_dlp_v2_k_map_estimation_result_instance = GooglePrivacyDlpV2KMapEstimationResult.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2KMapEstimationResult.to_json())

# convert the object into a dict
google_privacy_dlp_v2_k_map_estimation_result_dict = google_privacy_dlp_v2_k_map_estimation_result_instance.to_dict()
# create an instance of GooglePrivacyDlpV2KMapEstimationResult from a dict
google_privacy_dlp_v2_k_map_estimation_result_from_dict = GooglePrivacyDlpV2KMapEstimationResult.from_dict(google_privacy_dlp_v2_k_map_estimation_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


