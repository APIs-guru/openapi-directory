# GooglePrivacyDlpV2SensitivityScore

Score is calculated from of all elements in the data profile. A higher level means the data is more sensitive.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**score** | **str** | The sensitivity score applied to the resource. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_sensitivity_score import GooglePrivacyDlpV2SensitivityScore

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2SensitivityScore from a JSON string
google_privacy_dlp_v2_sensitivity_score_instance = GooglePrivacyDlpV2SensitivityScore.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2SensitivityScore.to_json())

# convert the object into a dict
google_privacy_dlp_v2_sensitivity_score_dict = google_privacy_dlp_v2_sensitivity_score_instance.to_dict()
# create an instance of GooglePrivacyDlpV2SensitivityScore from a dict
google_privacy_dlp_v2_sensitivity_score_from_dict = GooglePrivacyDlpV2SensitivityScore.from_dict(google_privacy_dlp_v2_sensitivity_score_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


