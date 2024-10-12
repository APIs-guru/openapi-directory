# GooglePrivacyDlpV2HybridInspectStatistics

Statistics related to processing hybrid inspect requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aborted_count** | **str** | The number of hybrid inspection requests aborted because the job ran out of quota or was ended before they could be processed. | [optional] 
**pending_count** | **str** | The number of hybrid requests currently being processed. Only populated when called via method &#x60;getDlpJob&#x60;. A burst of traffic may cause hybrid inspect requests to be enqueued. Processing will take place as quickly as possible, but resource limitations may impact how long a request is enqueued for. | [optional] 
**processed_count** | **str** | The number of hybrid inspection requests processed within this job. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_hybrid_inspect_statistics import GooglePrivacyDlpV2HybridInspectStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2HybridInspectStatistics from a JSON string
google_privacy_dlp_v2_hybrid_inspect_statistics_instance = GooglePrivacyDlpV2HybridInspectStatistics.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2HybridInspectStatistics.to_json())

# convert the object into a dict
google_privacy_dlp_v2_hybrid_inspect_statistics_dict = google_privacy_dlp_v2_hybrid_inspect_statistics_instance.to_dict()
# create an instance of GooglePrivacyDlpV2HybridInspectStatistics from a dict
google_privacy_dlp_v2_hybrid_inspect_statistics_from_dict = GooglePrivacyDlpV2HybridInspectStatistics.from_dict(google_privacy_dlp_v2_hybrid_inspect_statistics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


