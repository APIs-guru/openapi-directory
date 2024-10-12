# GooglePrivacyDlpV2ListDlpJobsResponse

The response message for listing DLP jobs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobs** | [**List[GooglePrivacyDlpV2DlpJob]**](GooglePrivacyDlpV2DlpJob.md) | A list of DlpJobs that matches the specified filter in the request. | [optional] 
**next_page_token** | **str** | The standard List next-page token. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_list_dlp_jobs_response import GooglePrivacyDlpV2ListDlpJobsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2ListDlpJobsResponse from a JSON string
google_privacy_dlp_v2_list_dlp_jobs_response_instance = GooglePrivacyDlpV2ListDlpJobsResponse.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2ListDlpJobsResponse.to_json())

# convert the object into a dict
google_privacy_dlp_v2_list_dlp_jobs_response_dict = google_privacy_dlp_v2_list_dlp_jobs_response_instance.to_dict()
# create an instance of GooglePrivacyDlpV2ListDlpJobsResponse from a dict
google_privacy_dlp_v2_list_dlp_jobs_response_from_dict = GooglePrivacyDlpV2ListDlpJobsResponse.from_dict(google_privacy_dlp_v2_list_dlp_jobs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


