# GoogleCloudRetailV2alphaRuleFilterAction

* Rule Condition: - No Condition.query_terms provided is a global match. - 1 or more Condition.query_terms provided are combined with OR operator. * Action Input: The request query and filter that are applied to the retrieved products, in addition to any filters already provided with the SearchRequest. The AND operator is used to combine the query's existing filters with the filter rule(s). NOTE: May result in 0 results when filters conflict. * Action Result: Filters the returned objects to be ONLY those that passed the filter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | **str** | A filter to apply on the matching condition results. Supported features: * filter must be set. * Filter syntax is identical to SearchRequest.filter. For more information, see [Filter](/retail/docs/filter-and-order#filter). * To filter products with product ID \&quot;product_1\&quot; or \&quot;product_2\&quot;, and color \&quot;Red\&quot; or \&quot;Blue\&quot;: *(id: ANY(\&quot;product_1\&quot;, \&quot;product_2\&quot;)) * *AND * *(colorFamilies: ANY(\&quot;Red\&quot;, \&quot;Blue\&quot;)) * | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_rule_filter_action import GoogleCloudRetailV2alphaRuleFilterAction

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaRuleFilterAction from a JSON string
google_cloud_retail_v2alpha_rule_filter_action_instance = GoogleCloudRetailV2alphaRuleFilterAction.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaRuleFilterAction.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_rule_filter_action_dict = google_cloud_retail_v2alpha_rule_filter_action_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaRuleFilterAction from a dict
google_cloud_retail_v2alpha_rule_filter_action_from_dict = GoogleCloudRetailV2alphaRuleFilterAction.from_dict(google_cloud_retail_v2alpha_rule_filter_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


