# GooglePrivacyDlpV2DataRiskLevel

Score is a summary of all elements in the data profile. A higher number means more risk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**score** | **str** | The score applied to the resource. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_data_risk_level import GooglePrivacyDlpV2DataRiskLevel

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2DataRiskLevel from a JSON string
google_privacy_dlp_v2_data_risk_level_instance = GooglePrivacyDlpV2DataRiskLevel.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2DataRiskLevel.to_json())

# convert the object into a dict
google_privacy_dlp_v2_data_risk_level_dict = google_privacy_dlp_v2_data_risk_level_instance.to_dict()
# create an instance of GooglePrivacyDlpV2DataRiskLevel from a dict
google_privacy_dlp_v2_data_risk_level_from_dict = GooglePrivacyDlpV2DataRiskLevel.from_dict(google_privacy_dlp_v2_data_risk_level_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


