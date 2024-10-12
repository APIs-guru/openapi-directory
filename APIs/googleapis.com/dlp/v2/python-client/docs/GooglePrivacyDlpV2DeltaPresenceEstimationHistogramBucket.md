# GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket

A DeltaPresenceEstimationHistogramBucket message with the following values: min_probability: 0.1 max_probability: 0.2 frequency: 42 means that there are 42 records for which δ is in [0.1, 0.2). An important particular case is when min_probability = max_probability = 1: then, every individual who shares this quasi-identifier combination is in the dataset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket_size** | **str** | Number of records within these probability bounds. | [optional] 
**bucket_value_count** | **str** | Total number of distinct quasi-identifier tuple values in this bucket. | [optional] 
**bucket_values** | [**List[GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValues]**](GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValues.md) | Sample of quasi-identifier tuple values in this bucket. The total number of classes returned per bucket is capped at 20. | [optional] 
**max_probability** | **float** | Always greater than or equal to min_probability. | [optional] 
**min_probability** | **float** | Between 0 and 1. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_delta_presence_estimation_histogram_bucket import GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket from a JSON string
google_privacy_dlp_v2_delta_presence_estimation_histogram_bucket_instance = GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket.to_json())

# convert the object into a dict
google_privacy_dlp_v2_delta_presence_estimation_histogram_bucket_dict = google_privacy_dlp_v2_delta_presence_estimation_histogram_bucket_instance.to_dict()
# create an instance of GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket from a dict
google_privacy_dlp_v2_delta_presence_estimation_histogram_bucket_from_dict = GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket.from_dict(google_privacy_dlp_v2_delta_presence_estimation_histogram_bucket_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


