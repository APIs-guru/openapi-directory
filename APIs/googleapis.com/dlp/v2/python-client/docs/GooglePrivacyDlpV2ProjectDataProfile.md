# GooglePrivacyDlpV2ProjectDataProfile

An aggregated profile for this project, based on the resources profiled within it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_risk_level** | [**GooglePrivacyDlpV2DataRiskLevel**](GooglePrivacyDlpV2DataRiskLevel.md) |  | [optional] 
**name** | **str** | The resource name of the profile. | [optional] 
**profile_last_generated** | **str** | The last time the profile was generated. | [optional] 
**profile_status** | [**GooglePrivacyDlpV2ProfileStatus**](GooglePrivacyDlpV2ProfileStatus.md) |  | [optional] 
**project_id** | **str** | Project ID that was profiled. | [optional] 
**sensitivity_score** | [**GooglePrivacyDlpV2SensitivityScore**](GooglePrivacyDlpV2SensitivityScore.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_project_data_profile import GooglePrivacyDlpV2ProjectDataProfile

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2ProjectDataProfile from a JSON string
google_privacy_dlp_v2_project_data_profile_instance = GooglePrivacyDlpV2ProjectDataProfile.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2ProjectDataProfile.to_json())

# convert the object into a dict
google_privacy_dlp_v2_project_data_profile_dict = google_privacy_dlp_v2_project_data_profile_instance.to_dict()
# create an instance of GooglePrivacyDlpV2ProjectDataProfile from a dict
google_privacy_dlp_v2_project_data_profile_from_dict = GooglePrivacyDlpV2ProjectDataProfile.from_dict(google_privacy_dlp_v2_project_data_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


