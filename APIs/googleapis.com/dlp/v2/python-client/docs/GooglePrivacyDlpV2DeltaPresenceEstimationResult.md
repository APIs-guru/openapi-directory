# GooglePrivacyDlpV2DeltaPresenceEstimationResult

Result of the δ-presence computation. Note that these results are an estimation, not exact values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delta_presence_estimation_histogram** | [**List[GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket]**](GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket.md) | The intervals [min_probability, max_probability) do not overlap. If a value doesn&#39;t correspond to any such interval, the associated frequency is zero. For example, the following records: {min_probability: 0, max_probability: 0.1, frequency: 17} {min_probability: 0.2, max_probability: 0.3, frequency: 42} {min_probability: 0.3, max_probability: 0.4, frequency: 99} mean that there are no record with an estimated probability in [0.1, 0.2) nor larger or equal to 0.4. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_delta_presence_estimation_result import GooglePrivacyDlpV2DeltaPresenceEstimationResult

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2DeltaPresenceEstimationResult from a JSON string
google_privacy_dlp_v2_delta_presence_estimation_result_instance = GooglePrivacyDlpV2DeltaPresenceEstimationResult.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2DeltaPresenceEstimationResult.to_json())

# convert the object into a dict
google_privacy_dlp_v2_delta_presence_estimation_result_dict = google_privacy_dlp_v2_delta_presence_estimation_result_instance.to_dict()
# create an instance of GooglePrivacyDlpV2DeltaPresenceEstimationResult from a dict
google_privacy_dlp_v2_delta_presence_estimation_result_from_dict = GooglePrivacyDlpV2DeltaPresenceEstimationResult.from_dict(google_privacy_dlp_v2_delta_presence_estimation_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


