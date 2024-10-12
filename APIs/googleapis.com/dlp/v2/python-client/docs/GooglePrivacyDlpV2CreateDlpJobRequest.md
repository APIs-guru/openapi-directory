# GooglePrivacyDlpV2CreateDlpJobRequest

Request message for CreateDlpJobRequest. Used to initiate long running jobs such as calculating risk metrics or inspecting Google Cloud Storage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inspect_job** | [**GooglePrivacyDlpV2InspectJobConfig**](GooglePrivacyDlpV2InspectJobConfig.md) |  | [optional] 
**job_id** | **str** | The job id can contain uppercase and lowercase letters, numbers, and hyphens; that is, it must match the regular expression: &#x60;[a-zA-Z\\d-_]+&#x60;. The maximum length is 100 characters. Can be empty to allow the system to generate one. | [optional] 
**location_id** | **str** | Deprecated. This field has no effect. | [optional] 
**risk_job** | [**GooglePrivacyDlpV2RiskAnalysisJobConfig**](GooglePrivacyDlpV2RiskAnalysisJobConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_create_dlp_job_request import GooglePrivacyDlpV2CreateDlpJobRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2CreateDlpJobRequest from a JSON string
google_privacy_dlp_v2_create_dlp_job_request_instance = GooglePrivacyDlpV2CreateDlpJobRequest.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2CreateDlpJobRequest.to_json())

# convert the object into a dict
google_privacy_dlp_v2_create_dlp_job_request_dict = google_privacy_dlp_v2_create_dlp_job_request_instance.to_dict()
# create an instance of GooglePrivacyDlpV2CreateDlpJobRequest from a dict
google_privacy_dlp_v2_create_dlp_job_request_from_dict = GooglePrivacyDlpV2CreateDlpJobRequest.from_dict(google_privacy_dlp_v2_create_dlp_job_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


