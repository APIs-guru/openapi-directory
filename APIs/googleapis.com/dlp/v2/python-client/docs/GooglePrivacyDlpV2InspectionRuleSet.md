# GooglePrivacyDlpV2InspectionRuleSet

Rule set for modifying a set of infoTypes to alter behavior under certain circumstances, depending on the specific details of the rules within the set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**info_types** | [**List[GooglePrivacyDlpV2InfoType]**](GooglePrivacyDlpV2InfoType.md) | List of infoTypes this rule set is applied to. | [optional] 
**rules** | [**List[GooglePrivacyDlpV2InspectionRule]**](GooglePrivacyDlpV2InspectionRule.md) | Set of rules to be applied to infoTypes. The rules are applied in order. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_inspection_rule_set import GooglePrivacyDlpV2InspectionRuleSet

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2InspectionRuleSet from a JSON string
google_privacy_dlp_v2_inspection_rule_set_instance = GooglePrivacyDlpV2InspectionRuleSet.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2InspectionRuleSet.to_json())

# convert the object into a dict
google_privacy_dlp_v2_inspection_rule_set_dict = google_privacy_dlp_v2_inspection_rule_set_instance.to_dict()
# create an instance of GooglePrivacyDlpV2InspectionRuleSet from a dict
google_privacy_dlp_v2_inspection_rule_set_from_dict = GooglePrivacyDlpV2InspectionRuleSet.from_dict(google_privacy_dlp_v2_inspection_rule_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


