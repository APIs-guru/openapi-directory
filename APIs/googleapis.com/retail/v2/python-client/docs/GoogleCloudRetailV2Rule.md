# GoogleCloudRetailV2Rule

A rule is a condition-action pair * A condition defines when a rule is to be triggered. * An action specifies what occurs on that trigger. Currently rules only work for controls with SOLUTION_TYPE_SEARCH.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boost_action** | [**GoogleCloudRetailV2RuleBoostAction**](GoogleCloudRetailV2RuleBoostAction.md) |  | [optional] 
**condition** | [**GoogleCloudRetailV2Condition**](GoogleCloudRetailV2Condition.md) |  | [optional] 
**do_not_associate_action** | [**GoogleCloudRetailV2RuleDoNotAssociateAction**](GoogleCloudRetailV2RuleDoNotAssociateAction.md) |  | [optional] 
**filter_action** | [**GoogleCloudRetailV2RuleFilterAction**](GoogleCloudRetailV2RuleFilterAction.md) |  | [optional] 
**force_return_facet_action** | [**GoogleCloudRetailV2RuleForceReturnFacetAction**](GoogleCloudRetailV2RuleForceReturnFacetAction.md) |  | [optional] 
**ignore_action** | [**GoogleCloudRetailV2RuleIgnoreAction**](GoogleCloudRetailV2RuleIgnoreAction.md) |  | [optional] 
**oneway_synonyms_action** | [**GoogleCloudRetailV2RuleOnewaySynonymsAction**](GoogleCloudRetailV2RuleOnewaySynonymsAction.md) |  | [optional] 
**redirect_action** | [**GoogleCloudRetailV2RuleRedirectAction**](GoogleCloudRetailV2RuleRedirectAction.md) |  | [optional] 
**remove_facet_action** | [**GoogleCloudRetailV2RuleRemoveFacetAction**](GoogleCloudRetailV2RuleRemoveFacetAction.md) |  | [optional] 
**replacement_action** | [**GoogleCloudRetailV2RuleReplacementAction**](GoogleCloudRetailV2RuleReplacementAction.md) |  | [optional] 
**twoway_synonyms_action** | [**GoogleCloudRetailV2RuleTwowaySynonymsAction**](GoogleCloudRetailV2RuleTwowaySynonymsAction.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2_rule import GoogleCloudRetailV2Rule

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2Rule from a JSON string
google_cloud_retail_v2_rule_instance = GoogleCloudRetailV2Rule.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2Rule.to_json())

# convert the object into a dict
google_cloud_retail_v2_rule_dict = google_cloud_retail_v2_rule_instance.to_dict()
# create an instance of GoogleCloudRetailV2Rule from a dict
google_cloud_retail_v2_rule_from_dict = GoogleCloudRetailV2Rule.from_dict(google_cloud_retail_v2_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


