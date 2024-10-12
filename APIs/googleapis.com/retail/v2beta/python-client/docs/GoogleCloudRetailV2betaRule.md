# GoogleCloudRetailV2betaRule

A rule is a condition-action pair * A condition defines when a rule is to be triggered. * An action specifies what occurs on that trigger. Currently rules only work for controls with SOLUTION_TYPE_SEARCH.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boost_action** | [**GoogleCloudRetailV2betaRuleBoostAction**](GoogleCloudRetailV2betaRuleBoostAction.md) |  | [optional] 
**condition** | [**GoogleCloudRetailV2betaCondition**](GoogleCloudRetailV2betaCondition.md) |  | [optional] 
**do_not_associate_action** | [**GoogleCloudRetailV2betaRuleDoNotAssociateAction**](GoogleCloudRetailV2betaRuleDoNotAssociateAction.md) |  | [optional] 
**filter_action** | [**GoogleCloudRetailV2betaRuleFilterAction**](GoogleCloudRetailV2betaRuleFilterAction.md) |  | [optional] 
**force_return_facet_action** | [**GoogleCloudRetailV2betaRuleForceReturnFacetAction**](GoogleCloudRetailV2betaRuleForceReturnFacetAction.md) |  | [optional] 
**ignore_action** | [**GoogleCloudRetailV2betaRuleIgnoreAction**](GoogleCloudRetailV2betaRuleIgnoreAction.md) |  | [optional] 
**oneway_synonyms_action** | [**GoogleCloudRetailV2betaRuleOnewaySynonymsAction**](GoogleCloudRetailV2betaRuleOnewaySynonymsAction.md) |  | [optional] 
**redirect_action** | [**GoogleCloudRetailV2betaRuleRedirectAction**](GoogleCloudRetailV2betaRuleRedirectAction.md) |  | [optional] 
**remove_facet_action** | [**GoogleCloudRetailV2betaRuleRemoveFacetAction**](GoogleCloudRetailV2betaRuleRemoveFacetAction.md) |  | [optional] 
**replacement_action** | [**GoogleCloudRetailV2betaRuleReplacementAction**](GoogleCloudRetailV2betaRuleReplacementAction.md) |  | [optional] 
**twoway_synonyms_action** | [**GoogleCloudRetailV2betaRuleTwowaySynonymsAction**](GoogleCloudRetailV2betaRuleTwowaySynonymsAction.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2beta_rule import GoogleCloudRetailV2betaRule

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2betaRule from a JSON string
google_cloud_retail_v2beta_rule_instance = GoogleCloudRetailV2betaRule.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2betaRule.to_json())

# convert the object into a dict
google_cloud_retail_v2beta_rule_dict = google_cloud_retail_v2beta_rule_instance.to_dict()
# create an instance of GoogleCloudRetailV2betaRule from a dict
google_cloud_retail_v2beta_rule_from_dict = GoogleCloudRetailV2betaRule.from_dict(google_cloud_retail_v2beta_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


