# GooglePrivacyDlpV2UpdateJobTriggerRequest

Request message for UpdateJobTrigger.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_trigger** | [**GooglePrivacyDlpV2JobTrigger**](GooglePrivacyDlpV2JobTrigger.md) |  | [optional] 
**update_mask** | **str** | Mask to control which fields get updated. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_update_job_trigger_request import GooglePrivacyDlpV2UpdateJobTriggerRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2UpdateJobTriggerRequest from a JSON string
google_privacy_dlp_v2_update_job_trigger_request_instance = GooglePrivacyDlpV2UpdateJobTriggerRequest.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2UpdateJobTriggerRequest.to_json())

# convert the object into a dict
google_privacy_dlp_v2_update_job_trigger_request_dict = google_privacy_dlp_v2_update_job_trigger_request_instance.to_dict()
# create an instance of GooglePrivacyDlpV2UpdateJobTriggerRequest from a dict
google_privacy_dlp_v2_update_job_trigger_request_from_dict = GooglePrivacyDlpV2UpdateJobTriggerRequest.from_dict(google_privacy_dlp_v2_update_job_trigger_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


