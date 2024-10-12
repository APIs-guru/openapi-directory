# GooglePrivacyDlpV2InspectionRule

A single inspection rule to be applied to infoTypes, specified in `InspectionRuleSet`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exclusion_rule** | [**GooglePrivacyDlpV2ExclusionRule**](GooglePrivacyDlpV2ExclusionRule.md) |  | [optional] 
**hotword_rule** | [**GooglePrivacyDlpV2HotwordRule**](GooglePrivacyDlpV2HotwordRule.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_inspection_rule import GooglePrivacyDlpV2InspectionRule

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2InspectionRule from a JSON string
google_privacy_dlp_v2_inspection_rule_instance = GooglePrivacyDlpV2InspectionRule.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2InspectionRule.to_json())

# convert the object into a dict
google_privacy_dlp_v2_inspection_rule_dict = google_privacy_dlp_v2_inspection_rule_instance.to_dict()
# create an instance of GooglePrivacyDlpV2InspectionRule from a dict
google_privacy_dlp_v2_inspection_rule_from_dict = GooglePrivacyDlpV2InspectionRule.from_dict(google_privacy_dlp_v2_inspection_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


