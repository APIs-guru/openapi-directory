# GooglePrivacyDlpV2KAnonymityResult

Result of the k-anonymity computation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**equivalence_class_histogram_buckets** | [**List[GooglePrivacyDlpV2KAnonymityHistogramBucket]**](GooglePrivacyDlpV2KAnonymityHistogramBucket.md) | Histogram of k-anonymity equivalence classes. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_k_anonymity_result import GooglePrivacyDlpV2KAnonymityResult

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2KAnonymityResult from a JSON string
google_privacy_dlp_v2_k_anonymity_result_instance = GooglePrivacyDlpV2KAnonymityResult.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2KAnonymityResult.to_json())

# convert the object into a dict
google_privacy_dlp_v2_k_anonymity_result_dict = google_privacy_dlp_v2_k_anonymity_result_instance.to_dict()
# create an instance of GooglePrivacyDlpV2KAnonymityResult from a dict
google_privacy_dlp_v2_k_anonymity_result_from_dict = GooglePrivacyDlpV2KAnonymityResult.from_dict(google_privacy_dlp_v2_k_anonymity_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


