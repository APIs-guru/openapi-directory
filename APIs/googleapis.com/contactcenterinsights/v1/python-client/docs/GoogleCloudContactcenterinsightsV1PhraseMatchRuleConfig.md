# GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig

Configuration information of a phrase match rule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exact_match_config** | [**GoogleCloudContactcenterinsightsV1ExactMatchConfig**](GoogleCloudContactcenterinsightsV1ExactMatchConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_phrase_match_rule_config import GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig from a JSON string
google_cloud_contactcenterinsights_v1_phrase_match_rule_config_instance = GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_phrase_match_rule_config_dict = google_cloud_contactcenterinsights_v1_phrase_match_rule_config_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig from a dict
google_cloud_contactcenterinsights_v1_phrase_match_rule_config_from_dict = GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig.from_dict(google_cloud_contactcenterinsights_v1_phrase_match_rule_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


