# PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsValue

The enum-like identifier for this rule. For instance \"EnableKeepAlive\" or \"AvoidCssImport\". Not localized.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**beta** | **bool** | Whether this rule is in &#39;beta&#39;. Rules in beta are new rules that are being tested, which do not impact the overall score. | [optional] 
**groups** | **List[str]** | List of rule groups that this rule belongs to. Each entry in the list is one of \&quot;SPEED\&quot;, \&quot;USABILITY\&quot;, or \&quot;SECURITY\&quot;. | [optional] 
**localized_rule_name** | **str** | Localized name of the rule, intended for presentation to a user. | [optional] 
**rule_impact** | **float** | The impact (unbounded floating point value) that implementing the suggestions for this rule would have on making the page faster. Impact is comparable between rules to determine which rule&#39;s suggestions would have a higher or lower impact on making a page faster. For instance, if enabling compression would save 1MB, while optimizing images would save 500kB, the enable compression rule would have 2x the impact of the image optimization rule, all other things being equal. | [optional] 
**summary** | [**PagespeedApiFormatStringV4**](PagespeedApiFormatStringV4.md) |  | [optional] 
**url_blocks** | [**List[PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsValueUrlBlocksInner]**](PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsValueUrlBlocksInner.md) | List of blocks of URLs. Each block may contain a heading and a list of URLs. Each URL may optionally include additional details. | [optional] 

## Example

```python
from openapi_client.models.pagespeed_api_pagespeed_response_v4_formatted_results_rule_results_value import PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsValue

# TODO update the JSON string below
json = "{}"
# create an instance of PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsValue from a JSON string
pagespeed_api_pagespeed_response_v4_formatted_results_rule_results_value_instance = PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsValue.from_json(json)
# print the JSON string representation of the object
print(PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsValue.to_json())

# convert the object into a dict
pagespeed_api_pagespeed_response_v4_formatted_results_rule_results_value_dict = pagespeed_api_pagespeed_response_v4_formatted_results_rule_results_value_instance.to_dict()
# create an instance of PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsValue from a dict
pagespeed_api_pagespeed_response_v4_formatted_results_rule_results_value_from_dict = PagespeedApiPagespeedResponseV4FormattedResultsRuleResultsValue.from_dict(pagespeed_api_pagespeed_response_v4_formatted_results_rule_results_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


