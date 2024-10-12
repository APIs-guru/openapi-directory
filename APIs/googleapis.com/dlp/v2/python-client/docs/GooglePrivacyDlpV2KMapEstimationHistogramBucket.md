# GooglePrivacyDlpV2KMapEstimationHistogramBucket

A KMapEstimationHistogramBucket message with the following values: min_anonymity: 3 max_anonymity: 5 frequency: 42 means that there are 42 records whose quasi-identifier values correspond to 3, 4 or 5 people in the overlying population. An important particular case is when min_anonymity = max_anonymity = 1: the frequency field then corresponds to the number of uniquely identifiable records.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket_size** | **str** | Number of records within these anonymity bounds. | [optional] 
**bucket_value_count** | **str** | Total number of distinct quasi-identifier tuple values in this bucket. | [optional] 
**bucket_values** | [**List[GooglePrivacyDlpV2KMapEstimationQuasiIdValues]**](GooglePrivacyDlpV2KMapEstimationQuasiIdValues.md) | Sample of quasi-identifier tuple values in this bucket. The total number of classes returned per bucket is capped at 20. | [optional] 
**max_anonymity** | **str** | Always greater than or equal to min_anonymity. | [optional] 
**min_anonymity** | **str** | Always positive. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_k_map_estimation_histogram_bucket import GooglePrivacyDlpV2KMapEstimationHistogramBucket

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2KMapEstimationHistogramBucket from a JSON string
google_privacy_dlp_v2_k_map_estimation_histogram_bucket_instance = GooglePrivacyDlpV2KMapEstimationHistogramBucket.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2KMapEstimationHistogramBucket.to_json())

# convert the object into a dict
google_privacy_dlp_v2_k_map_estimation_histogram_bucket_dict = google_privacy_dlp_v2_k_map_estimation_histogram_bucket_instance.to_dict()
# create an instance of GooglePrivacyDlpV2KMapEstimationHistogramBucket from a dict
google_privacy_dlp_v2_k_map_estimation_histogram_bucket_from_dict = GooglePrivacyDlpV2KMapEstimationHistogramBucket.from_dict(google_privacy_dlp_v2_k_map_estimation_histogram_bucket_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


