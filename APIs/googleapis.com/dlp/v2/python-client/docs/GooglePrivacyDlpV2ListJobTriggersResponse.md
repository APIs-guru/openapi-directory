# GooglePrivacyDlpV2ListJobTriggersResponse

Response message for ListJobTriggers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_triggers** | [**List[GooglePrivacyDlpV2JobTrigger]**](GooglePrivacyDlpV2JobTrigger.md) | List of triggeredJobs, up to page_size in ListJobTriggersRequest. | [optional] 
**next_page_token** | **str** | If the next page is available then this value is the next page token to be used in the following ListJobTriggers request. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_list_job_triggers_response import GooglePrivacyDlpV2ListJobTriggersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2ListJobTriggersResponse from a JSON string
google_privacy_dlp_v2_list_job_triggers_response_instance = GooglePrivacyDlpV2ListJobTriggersResponse.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2ListJobTriggersResponse.to_json())

# convert the object into a dict
google_privacy_dlp_v2_list_job_triggers_response_dict = google_privacy_dlp_v2_list_job_triggers_response_instance.to_dict()
# create an instance of GooglePrivacyDlpV2ListJobTriggersResponse from a dict
google_privacy_dlp_v2_list_job_triggers_response_from_dict = GooglePrivacyDlpV2ListJobTriggersResponse.from_dict(google_privacy_dlp_v2_list_job_triggers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


