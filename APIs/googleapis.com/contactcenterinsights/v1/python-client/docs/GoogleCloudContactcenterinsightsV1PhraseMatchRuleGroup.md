# GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup

A message representing a rule in the phrase matcher.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phrase_match_rules** | [**List[GoogleCloudContactcenterinsightsV1PhraseMatchRule]**](GoogleCloudContactcenterinsightsV1PhraseMatchRule.md) | A list of phrase match rules that are included in this group. | [optional] 
**type** | **str** | Required. The type of this phrase match rule group. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_phrase_match_rule_group import GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup from a JSON string
google_cloud_contactcenterinsights_v1_phrase_match_rule_group_instance = GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_phrase_match_rule_group_dict = google_cloud_contactcenterinsights_v1_phrase_match_rule_group_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup from a dict
google_cloud_contactcenterinsights_v1_phrase_match_rule_group_from_dict = GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup.from_dict(google_cloud_contactcenterinsights_v1_phrase_match_rule_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


