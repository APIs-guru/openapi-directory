# GoogleCloudRetailV2alphaRuleForceReturnFacetAction

Force returns an attribute/facet in the request around a certain position or above. * Rule Condition: Must specify non-empty Condition.query_terms (for search only) or Condition.page_categories (for browse only), but can't specify both. * Action Inputs: attribute name, position * Action Result: Will force return a facet key around a certain position or above if the condition is satisfied. Example: Suppose the query is \"shoes\", the Condition.query_terms is \"shoes\", the ForceReturnFacetAction.FacetPositionAdjustment.attribute_name is \"size\" and the ForceReturnFacetAction.FacetPositionAdjustment.position is 8. Two cases: a) The facet key \"size\" is not already in the top 8 slots, then the facet \"size\" will appear at a position close to 8. b) The facet key \"size\" in among the top 8 positions in the request, then it will stay at its current rank.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**facet_position_adjustments** | [**List[GoogleCloudRetailV2alphaRuleForceReturnFacetActionFacetPositionAdjustment]**](GoogleCloudRetailV2alphaRuleForceReturnFacetActionFacetPositionAdjustment.md) | Each instance corresponds to a force return attribute for the given condition. There can&#39;t be more 3 instances here. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_rule_force_return_facet_action import GoogleCloudRetailV2alphaRuleForceReturnFacetAction

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaRuleForceReturnFacetAction from a JSON string
google_cloud_retail_v2alpha_rule_force_return_facet_action_instance = GoogleCloudRetailV2alphaRuleForceReturnFacetAction.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaRuleForceReturnFacetAction.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_rule_force_return_facet_action_dict = google_cloud_retail_v2alpha_rule_force_return_facet_action_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaRuleForceReturnFacetAction from a dict
google_cloud_retail_v2alpha_rule_force_return_facet_action_from_dict = GoogleCloudRetailV2alphaRuleForceReturnFacetAction.from_dict(google_cloud_retail_v2alpha_rule_force_return_facet_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


