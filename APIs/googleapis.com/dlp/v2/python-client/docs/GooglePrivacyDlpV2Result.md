# GooglePrivacyDlpV2Result

All result fields mentioned below are updated while the job is processing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hybrid_stats** | [**GooglePrivacyDlpV2HybridInspectStatistics**](GooglePrivacyDlpV2HybridInspectStatistics.md) |  | [optional] 
**info_type_stats** | [**List[GooglePrivacyDlpV2InfoTypeStats]**](GooglePrivacyDlpV2InfoTypeStats.md) | Statistics of how many instances of each info type were found during inspect job. | [optional] 
**processed_bytes** | **str** | Total size in bytes that were processed. | [optional] 
**total_estimated_bytes** | **str** | Estimate of the number of bytes to process. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_result import GooglePrivacyDlpV2Result

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2Result from a JSON string
google_privacy_dlp_v2_result_instance = GooglePrivacyDlpV2Result.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2Result.to_json())

# convert the object into a dict
google_privacy_dlp_v2_result_dict = google_privacy_dlp_v2_result_instance.to_dict()
# create an instance of GooglePrivacyDlpV2Result from a dict
google_privacy_dlp_v2_result_from_dict = GooglePrivacyDlpV2Result.from_dict(google_privacy_dlp_v2_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


