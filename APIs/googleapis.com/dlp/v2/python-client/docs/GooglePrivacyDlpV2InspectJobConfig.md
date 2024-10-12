# GooglePrivacyDlpV2InspectJobConfig

Controls what and how to inspect for findings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**List[GooglePrivacyDlpV2Action]**](GooglePrivacyDlpV2Action.md) | Actions to execute at the completion of the job. | [optional] 
**inspect_config** | [**GooglePrivacyDlpV2InspectConfig**](GooglePrivacyDlpV2InspectConfig.md) |  | [optional] 
**inspect_template_name** | **str** | If provided, will be used as the default for all values in InspectConfig. &#x60;inspect_config&#x60; will be merged into the values persisted as part of the template. | [optional] 
**storage_config** | [**GooglePrivacyDlpV2StorageConfig**](GooglePrivacyDlpV2StorageConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_inspect_job_config import GooglePrivacyDlpV2InspectJobConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2InspectJobConfig from a JSON string
google_privacy_dlp_v2_inspect_job_config_instance = GooglePrivacyDlpV2InspectJobConfig.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2InspectJobConfig.to_json())

# convert the object into a dict
google_privacy_dlp_v2_inspect_job_config_dict = google_privacy_dlp_v2_inspect_job_config_instance.to_dict()
# create an instance of GooglePrivacyDlpV2InspectJobConfig from a dict
google_privacy_dlp_v2_inspect_job_config_from_dict = GooglePrivacyDlpV2InspectJobConfig.from_dict(google_privacy_dlp_v2_inspect_job_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


