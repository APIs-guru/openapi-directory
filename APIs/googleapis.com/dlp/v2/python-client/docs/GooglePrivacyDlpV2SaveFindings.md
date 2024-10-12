# GooglePrivacyDlpV2SaveFindings

If set, the detailed findings will be persisted to the specified OutputStorageConfig. Only a single instance of this action can be specified. Compatible with: Inspect, Risk

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output_config** | [**GooglePrivacyDlpV2OutputStorageConfig**](GooglePrivacyDlpV2OutputStorageConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_save_findings import GooglePrivacyDlpV2SaveFindings

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2SaveFindings from a JSON string
google_privacy_dlp_v2_save_findings_instance = GooglePrivacyDlpV2SaveFindings.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2SaveFindings.to_json())

# convert the object into a dict
google_privacy_dlp_v2_save_findings_dict = google_privacy_dlp_v2_save_findings_instance.to_dict()
# create an instance of GooglePrivacyDlpV2SaveFindings from a dict
google_privacy_dlp_v2_save_findings_from_dict = GooglePrivacyDlpV2SaveFindings.from_dict(google_privacy_dlp_v2_save_findings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


