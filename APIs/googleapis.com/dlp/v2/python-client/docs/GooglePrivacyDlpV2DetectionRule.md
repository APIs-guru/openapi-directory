# GooglePrivacyDlpV2DetectionRule

Deprecated; use `InspectionRuleSet` instead. Rule for modifying a `CustomInfoType` to alter behavior under certain circumstances, depending on the specific details of the rule. Not supported for the `surrogate_type` custom infoType.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hotword_rule** | [**GooglePrivacyDlpV2HotwordRule**](GooglePrivacyDlpV2HotwordRule.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_detection_rule import GooglePrivacyDlpV2DetectionRule

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2DetectionRule from a JSON string
google_privacy_dlp_v2_detection_rule_instance = GooglePrivacyDlpV2DetectionRule.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2DetectionRule.to_json())

# convert the object into a dict
google_privacy_dlp_v2_detection_rule_dict = google_privacy_dlp_v2_detection_rule_instance.to_dict()
# create an instance of GooglePrivacyDlpV2DetectionRule from a dict
google_privacy_dlp_v2_detection_rule_from_dict = GooglePrivacyDlpV2DetectionRule.from_dict(google_privacy_dlp_v2_detection_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


