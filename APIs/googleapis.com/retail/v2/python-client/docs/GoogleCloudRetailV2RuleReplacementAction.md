# GoogleCloudRetailV2RuleReplacementAction

Replaces a term in the query. Multiple replacement candidates can be specified. All `query_terms` will be replaced with the replacement term. Example: Replace \"gShoe\" with \"google shoe\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query_terms** | **List[str]** | Terms from the search query. Will be replaced by replacement term. Can specify up to 100 terms. | [optional] 
**replacement_term** | **str** | Term that will be used for replacement. | [optional] 
**term** | **str** | Will be [deprecated &#x3D; true] post migration; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2_rule_replacement_action import GoogleCloudRetailV2RuleReplacementAction

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2RuleReplacementAction from a JSON string
google_cloud_retail_v2_rule_replacement_action_instance = GoogleCloudRetailV2RuleReplacementAction.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2RuleReplacementAction.to_json())

# convert the object into a dict
google_cloud_retail_v2_rule_replacement_action_dict = google_cloud_retail_v2_rule_replacement_action_instance.to_dict()
# create an instance of GoogleCloudRetailV2RuleReplacementAction from a dict
google_cloud_retail_v2_rule_replacement_action_from_dict = GoogleCloudRetailV2RuleReplacementAction.from_dict(google_cloud_retail_v2_rule_replacement_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


