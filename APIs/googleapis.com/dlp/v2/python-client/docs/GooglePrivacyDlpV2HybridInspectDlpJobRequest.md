# GooglePrivacyDlpV2HybridInspectDlpJobRequest

Request to search for potentially sensitive info in a custom location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hybrid_item** | [**GooglePrivacyDlpV2HybridContentItem**](GooglePrivacyDlpV2HybridContentItem.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_hybrid_inspect_dlp_job_request import GooglePrivacyDlpV2HybridInspectDlpJobRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2HybridInspectDlpJobRequest from a JSON string
google_privacy_dlp_v2_hybrid_inspect_dlp_job_request_instance = GooglePrivacyDlpV2HybridInspectDlpJobRequest.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2HybridInspectDlpJobRequest.to_json())

# convert the object into a dict
google_privacy_dlp_v2_hybrid_inspect_dlp_job_request_dict = google_privacy_dlp_v2_hybrid_inspect_dlp_job_request_instance.to_dict()
# create an instance of GooglePrivacyDlpV2HybridInspectDlpJobRequest from a dict
google_privacy_dlp_v2_hybrid_inspect_dlp_job_request_from_dict = GooglePrivacyDlpV2HybridInspectDlpJobRequest.from_dict(google_privacy_dlp_v2_hybrid_inspect_dlp_job_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


