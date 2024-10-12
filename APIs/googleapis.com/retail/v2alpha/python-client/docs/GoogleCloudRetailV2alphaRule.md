# GoogleCloudRetailV2alphaRule

A rule is a condition-action pair * A condition defines when a rule is to be triggered. * An action specifies what occurs on that trigger. Currently rules only work for controls with SOLUTION_TYPE_SEARCH.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boost_action** | [**GoogleCloudRetailV2alphaRuleBoostAction**](GoogleCloudRetailV2alphaRuleBoostAction.md) |  | [optional] 
**condition** | [**GoogleCloudRetailV2alphaCondition**](GoogleCloudRetailV2alphaCondition.md) |  | [optional] 
**do_not_associate_action** | [**GoogleCloudRetailV2alphaRuleDoNotAssociateAction**](GoogleCloudRetailV2alphaRuleDoNotAssociateAction.md) |  | [optional] 
**filter_action** | [**GoogleCloudRetailV2alphaRuleFilterAction**](GoogleCloudRetailV2alphaRuleFilterAction.md) |  | [optional] 
**force_return_facet_action** | [**GoogleCloudRetailV2alphaRuleForceReturnFacetAction**](GoogleCloudRetailV2alphaRuleForceReturnFacetAction.md) |  | [optional] 
**ignore_action** | [**GoogleCloudRetailV2alphaRuleIgnoreAction**](GoogleCloudRetailV2alphaRuleIgnoreAction.md) |  | [optional] 
**oneway_synonyms_action** | [**GoogleCloudRetailV2alphaRuleOnewaySynonymsAction**](GoogleCloudRetailV2alphaRuleOnewaySynonymsAction.md) |  | [optional] 
**redirect_action** | [**GoogleCloudRetailV2alphaRuleRedirectAction**](GoogleCloudRetailV2alphaRuleRedirectAction.md) |  | [optional] 
**remove_facet_action** | [**GoogleCloudRetailV2alphaRuleRemoveFacetAction**](GoogleCloudRetailV2alphaRuleRemoveFacetAction.md) |  | [optional] 
**replacement_action** | [**GoogleCloudRetailV2alphaRuleReplacementAction**](GoogleCloudRetailV2alphaRuleReplacementAction.md) |  | [optional] 
**twoway_synonyms_action** | [**GoogleCloudRetailV2alphaRuleTwowaySynonymsAction**](GoogleCloudRetailV2alphaRuleTwowaySynonymsAction.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_rule import GoogleCloudRetailV2alphaRule

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaRule from a JSON string
google_cloud_retail_v2alpha_rule_instance = GoogleCloudRetailV2alphaRule.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaRule.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_rule_dict = google_cloud_retail_v2alpha_rule_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaRule from a dict
google_cloud_retail_v2alpha_rule_from_dict = GoogleCloudRetailV2alphaRule.from_dict(google_cloud_retail_v2alpha_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


