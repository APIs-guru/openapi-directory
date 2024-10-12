# GooglePrivacyDlpV2HotwordRule

The rule that adjusts the likelihood of findings within a certain proximity of hotwords.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hotword_regex** | [**GooglePrivacyDlpV2Regex**](GooglePrivacyDlpV2Regex.md) |  | [optional] 
**likelihood_adjustment** | [**GooglePrivacyDlpV2LikelihoodAdjustment**](GooglePrivacyDlpV2LikelihoodAdjustment.md) |  | [optional] 
**proximity** | [**GooglePrivacyDlpV2Proximity**](GooglePrivacyDlpV2Proximity.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_hotword_rule import GooglePrivacyDlpV2HotwordRule

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2HotwordRule from a JSON string
google_privacy_dlp_v2_hotword_rule_instance = GooglePrivacyDlpV2HotwordRule.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2HotwordRule.to_json())

# convert the object into a dict
google_privacy_dlp_v2_hotword_rule_dict = google_privacy_dlp_v2_hotword_rule_instance.to_dict()
# create an instance of GooglePrivacyDlpV2HotwordRule from a dict
google_privacy_dlp_v2_hotword_rule_from_dict = GooglePrivacyDlpV2HotwordRule.from_dict(google_privacy_dlp_v2_hotword_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


