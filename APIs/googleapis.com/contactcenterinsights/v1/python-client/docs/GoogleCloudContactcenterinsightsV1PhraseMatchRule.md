# GoogleCloudContactcenterinsightsV1PhraseMatchRule

The data for a phrase match rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig**](GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig.md) |  | [optional] 
**negated** | **bool** | Specifies whether the phrase must be missing from the transcript segment or present in the transcript segment. | [optional] 
**query** | **str** | Required. The phrase to be matched. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_phrase_match_rule import GoogleCloudContactcenterinsightsV1PhraseMatchRule

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1PhraseMatchRule from a JSON string
google_cloud_contactcenterinsights_v1_phrase_match_rule_instance = GoogleCloudContactcenterinsightsV1PhraseMatchRule.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1PhraseMatchRule.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_phrase_match_rule_dict = google_cloud_contactcenterinsights_v1_phrase_match_rule_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1PhraseMatchRule from a dict
google_cloud_contactcenterinsights_v1_phrase_match_rule_from_dict = GoogleCloudContactcenterinsightsV1PhraseMatchRule.from_dict(google_cloud_contactcenterinsights_v1_phrase_match_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


