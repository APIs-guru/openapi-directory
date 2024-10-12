# GoogleCloudRetailV2RuleOnewaySynonymsAction

Maps a set of terms to a set of synonyms. Set of synonyms will be treated as synonyms of each query term only. `query_terms` will not be treated as synonyms of each other. Example: \"sneakers\" will use a synonym of \"shoes\". \"shoes\" will not use a synonym of \"sneakers\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**oneway_terms** | **List[str]** | Will be [deprecated &#x3D; true] post migration; | [optional] 
**query_terms** | **List[str]** | Terms from the search query. Will treat synonyms as their synonyms. Not themselves synonyms of the synonyms. Can specify up to 100 terms. | [optional] 
**synonyms** | **List[str]** | Defines a set of synonyms. Cannot contain duplicates. Can specify up to 100 synonyms. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2_rule_oneway_synonyms_action import GoogleCloudRetailV2RuleOnewaySynonymsAction

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2RuleOnewaySynonymsAction from a JSON string
google_cloud_retail_v2_rule_oneway_synonyms_action_instance = GoogleCloudRetailV2RuleOnewaySynonymsAction.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2RuleOnewaySynonymsAction.to_json())

# convert the object into a dict
google_cloud_retail_v2_rule_oneway_synonyms_action_dict = google_cloud_retail_v2_rule_oneway_synonyms_action_instance.to_dict()
# create an instance of GoogleCloudRetailV2RuleOnewaySynonymsAction from a dict
google_cloud_retail_v2_rule_oneway_synonyms_action_from_dict = GoogleCloudRetailV2RuleOnewaySynonymsAction.from_dict(google_cloud_retail_v2_rule_oneway_synonyms_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


