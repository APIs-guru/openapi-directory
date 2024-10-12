# GooglePrivacyDlpV2DlpJob

Combines all of the information about a DLP job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_details** | [**List[GooglePrivacyDlpV2ActionDetails]**](GooglePrivacyDlpV2ActionDetails.md) | Events that should occur after the job has completed. | [optional] 
**create_time** | **str** | Time when the job was created. | [optional] 
**end_time** | **str** | Time when the job finished. | [optional] 
**errors** | [**List[GooglePrivacyDlpV2Error]**](GooglePrivacyDlpV2Error.md) | A stream of errors encountered running the job. | [optional] 
**inspect_details** | [**GooglePrivacyDlpV2InspectDataSourceDetails**](GooglePrivacyDlpV2InspectDataSourceDetails.md) |  | [optional] 
**job_trigger_name** | **str** | If created by a job trigger, the resource name of the trigger that instantiated the job. | [optional] 
**last_modified** | **str** | Time when the job was last modified by the system. | [optional] 
**name** | **str** | The server-assigned name. | [optional] 
**risk_details** | [**GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails**](GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails.md) |  | [optional] 
**start_time** | **str** | Time when the job started. | [optional] 
**state** | **str** | State of a job. | [optional] 
**type** | **str** | The type of job. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_dlp_job import GooglePrivacyDlpV2DlpJob

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2DlpJob from a JSON string
google_privacy_dlp_v2_dlp_job_instance = GooglePrivacyDlpV2DlpJob.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2DlpJob.to_json())

# convert the object into a dict
google_privacy_dlp_v2_dlp_job_dict = google_privacy_dlp_v2_dlp_job_instance.to_dict()
# create an instance of GooglePrivacyDlpV2DlpJob from a dict
google_privacy_dlp_v2_dlp_job_from_dict = GooglePrivacyDlpV2DlpJob.from_dict(google_privacy_dlp_v2_dlp_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


