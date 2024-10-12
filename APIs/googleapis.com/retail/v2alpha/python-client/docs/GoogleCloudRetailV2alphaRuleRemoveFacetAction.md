# GoogleCloudRetailV2alphaRuleRemoveFacetAction

Removes an attribute/facet in the request if is present. * Rule Condition: Must specify non-empty Condition.query_terms (for search only) or Condition.page_categories (for browse only), but can't specify both. * Action Input: attribute name * Action Result: Will remove the attribute (as a facet) from the request if it is present. Example: Suppose the query is \"shoes\", the Condition.query_terms is \"shoes\" and the attribute name \"size\", then facet key \"size\" will be removed from the request (if it is present).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_names** | **List[str]** | The attribute names (i.e. facet keys) to remove from the dynamic facets (if present in the request). There can&#39;t be more 3 attribute names. Each attribute name should be a valid attribute name, be non-empty and contain at most 80 characters. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_rule_remove_facet_action import GoogleCloudRetailV2alphaRuleRemoveFacetAction

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaRuleRemoveFacetAction from a JSON string
google_cloud_retail_v2alpha_rule_remove_facet_action_instance = GoogleCloudRetailV2alphaRuleRemoveFacetAction.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaRuleRemoveFacetAction.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_rule_remove_facet_action_dict = google_cloud_retail_v2alpha_rule_remove_facet_action_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaRuleRemoveFacetAction from a dict
google_cloud_retail_v2alpha_rule_remove_facet_action_from_dict = GoogleCloudRetailV2alphaRuleRemoveFacetAction.from_dict(google_cloud_retail_v2alpha_rule_remove_facet_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


