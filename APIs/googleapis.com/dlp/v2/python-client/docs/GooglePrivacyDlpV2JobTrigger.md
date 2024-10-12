# GooglePrivacyDlpV2JobTrigger

Contains a configuration to make dlp api calls on a repeating basis. See https://cloud.google.com/sensitive-data-protection/docs/concepts-job-triggers to learn more.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The creation timestamp of a triggeredJob. | [optional] [readonly] 
**description** | **str** | User provided description (max 256 chars) | [optional] 
**display_name** | **str** | Display name (max 100 chars) | [optional] 
**errors** | [**List[GooglePrivacyDlpV2Error]**](GooglePrivacyDlpV2Error.md) | Output only. A stream of errors encountered when the trigger was activated. Repeated errors may result in the JobTrigger automatically being paused. Will return the last 100 errors. Whenever the JobTrigger is modified this list will be cleared. | [optional] [readonly] 
**inspect_job** | [**GooglePrivacyDlpV2InspectJobConfig**](GooglePrivacyDlpV2InspectJobConfig.md) |  | [optional] 
**last_run_time** | **str** | Output only. The timestamp of the last time this trigger executed. | [optional] [readonly] 
**name** | **str** | Unique resource name for the triggeredJob, assigned by the service when the triggeredJob is created, for example &#x60;projects/dlp-test-project/jobTriggers/53234423&#x60;. | [optional] 
**status** | **str** | Required. A status for this trigger. | [optional] 
**triggers** | [**List[GooglePrivacyDlpV2Trigger]**](GooglePrivacyDlpV2Trigger.md) | A list of triggers which will be OR&#39;ed together. Only one in the list needs to trigger for a job to be started. The list may contain only a single Schedule trigger and must have at least one object. | [optional] 
**update_time** | **str** | Output only. The last update timestamp of a triggeredJob. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_job_trigger import GooglePrivacyDlpV2JobTrigger

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2JobTrigger from a JSON string
google_privacy_dlp_v2_job_trigger_instance = GooglePrivacyDlpV2JobTrigger.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2JobTrigger.to_json())

# convert the object into a dict
google_privacy_dlp_v2_job_trigger_dict = google_privacy_dlp_v2_job_trigger_instance.to_dict()
# create an instance of GooglePrivacyDlpV2JobTrigger from a dict
google_privacy_dlp_v2_job_trigger_from_dict = GooglePrivacyDlpV2JobTrigger.from_dict(google_privacy_dlp_v2_job_trigger_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


