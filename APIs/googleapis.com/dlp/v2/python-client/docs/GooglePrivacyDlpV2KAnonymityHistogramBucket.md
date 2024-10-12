# GooglePrivacyDlpV2KAnonymityHistogramBucket

Histogram of k-anonymity equivalence classes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket_size** | **str** | Total number of equivalence classes in this bucket. | [optional] 
**bucket_value_count** | **str** | Total number of distinct equivalence classes in this bucket. | [optional] 
**bucket_values** | [**List[GooglePrivacyDlpV2KAnonymityEquivalenceClass]**](GooglePrivacyDlpV2KAnonymityEquivalenceClass.md) | Sample of equivalence classes in this bucket. The total number of classes returned per bucket is capped at 20. | [optional] 
**equivalence_class_size_lower_bound** | **str** | Lower bound on the size of the equivalence classes in this bucket. | [optional] 
**equivalence_class_size_upper_bound** | **str** | Upper bound on the size of the equivalence classes in this bucket. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_k_anonymity_histogram_bucket import GooglePrivacyDlpV2KAnonymityHistogramBucket

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2KAnonymityHistogramBucket from a JSON string
google_privacy_dlp_v2_k_anonymity_histogram_bucket_instance = GooglePrivacyDlpV2KAnonymityHistogramBucket.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2KAnonymityHistogramBucket.to_json())

# convert the object into a dict
google_privacy_dlp_v2_k_anonymity_histogram_bucket_dict = google_privacy_dlp_v2_k_anonymity_histogram_bucket_instance.to_dict()
# create an instance of GooglePrivacyDlpV2KAnonymityHistogramBucket from a dict
google_privacy_dlp_v2_k_anonymity_histogram_bucket_from_dict = GooglePrivacyDlpV2KAnonymityHistogramBucket.from_dict(google_privacy_dlp_v2_k_anonymity_histogram_bucket_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


