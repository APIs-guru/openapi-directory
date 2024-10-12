# GooglePrivacyDlpV2ExclusionRule

The rule that specifies conditions when findings of infoTypes specified in `InspectionRuleSet` are removed from results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dictionary** | [**GooglePrivacyDlpV2Dictionary**](GooglePrivacyDlpV2Dictionary.md) |  | [optional] 
**exclude_by_hotword** | [**GooglePrivacyDlpV2ExcludeByHotword**](GooglePrivacyDlpV2ExcludeByHotword.md) |  | [optional] 
**exclude_info_types** | [**GooglePrivacyDlpV2ExcludeInfoTypes**](GooglePrivacyDlpV2ExcludeInfoTypes.md) |  | [optional] 
**matching_type** | **str** | How the rule is applied, see MatchingType documentation for details. | [optional] 
**regex** | [**GooglePrivacyDlpV2Regex**](GooglePrivacyDlpV2Regex.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_exclusion_rule import GooglePrivacyDlpV2ExclusionRule

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2ExclusionRule from a JSON string
google_privacy_dlp_v2_exclusion_rule_instance = GooglePrivacyDlpV2ExclusionRule.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2ExclusionRule.to_json())

# convert the object into a dict
google_privacy_dlp_v2_exclusion_rule_dict = google_privacy_dlp_v2_exclusion_rule_instance.to_dict()
# create an instance of GooglePrivacyDlpV2ExclusionRule from a dict
google_privacy_dlp_v2_exclusion_rule_from_dict = GooglePrivacyDlpV2ExclusionRule.from_dict(google_privacy_dlp_v2_exclusion_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


