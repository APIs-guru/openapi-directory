# GooglePrivacyDlpV2DataProfileConfigSnapshot

Snapshot of the configurations used to generate the profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_profile_job** | [**GooglePrivacyDlpV2DataProfileJobConfig**](GooglePrivacyDlpV2DataProfileJobConfig.md) |  | [optional] 
**discovery_config** | [**GooglePrivacyDlpV2DiscoveryConfig**](GooglePrivacyDlpV2DiscoveryConfig.md) |  | [optional] 
**inspect_config** | [**GooglePrivacyDlpV2InspectConfig**](GooglePrivacyDlpV2InspectConfig.md) |  | [optional] 
**inspect_template_modified_time** | **str** | Timestamp when the template was modified | [optional] 
**inspect_template_name** | **str** | Name of the inspection template used to generate this profile | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_data_profile_config_snapshot import GooglePrivacyDlpV2DataProfileConfigSnapshot

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2DataProfileConfigSnapshot from a JSON string
google_privacy_dlp_v2_data_profile_config_snapshot_instance = GooglePrivacyDlpV2DataProfileConfigSnapshot.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2DataProfileConfigSnapshot.to_json())

# convert the object into a dict
google_privacy_dlp_v2_data_profile_config_snapshot_dict = google_privacy_dlp_v2_data_profile_config_snapshot_instance.to_dict()
# create an instance of GooglePrivacyDlpV2DataProfileConfigSnapshot from a dict
google_privacy_dlp_v2_data_profile_config_snapshot_from_dict = GooglePrivacyDlpV2DataProfileConfigSnapshot.from_dict(google_privacy_dlp_v2_data_profile_config_snapshot_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


