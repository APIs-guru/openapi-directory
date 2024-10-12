# GooglePrivacyDlpV2HybridInspectJobTriggerRequest

Request to search for potentially sensitive info in a custom location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hybrid_item** | [**GooglePrivacyDlpV2HybridContentItem**](GooglePrivacyDlpV2HybridContentItem.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_hybrid_inspect_job_trigger_request import GooglePrivacyDlpV2HybridInspectJobTriggerRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2HybridInspectJobTriggerRequest from a JSON string
google_privacy_dlp_v2_hybrid_inspect_job_trigger_request_instance = GooglePrivacyDlpV2HybridInspectJobTriggerRequest.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2HybridInspectJobTriggerRequest.to_json())

# convert the object into a dict
google_privacy_dlp_v2_hybrid_inspect_job_trigger_request_dict = google_privacy_dlp_v2_hybrid_inspect_job_trigger_request_instance.to_dict()
# create an instance of GooglePrivacyDlpV2HybridInspectJobTriggerRequest from a dict
google_privacy_dlp_v2_hybrid_inspect_job_trigger_request_from_dict = GooglePrivacyDlpV2HybridInspectJobTriggerRequest.from_dict(google_privacy_dlp_v2_hybrid_inspect_job_trigger_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


