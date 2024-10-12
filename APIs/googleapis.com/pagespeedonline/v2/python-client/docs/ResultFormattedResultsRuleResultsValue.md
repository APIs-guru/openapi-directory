# ResultFormattedResultsRuleResultsValue

The enum-like identifier for this rule. For instance \"EnableKeepAlive\" or \"AvoidCssImport\". Not localized.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groups** | **List[str]** | List of rule groups that this rule belongs to. Each entry in the list is one of \&quot;SPEED\&quot; or \&quot;USABILITY\&quot;. | [optional] 
**localized_rule_name** | **str** | Localized name of the rule, intended for presentation to a user. | [optional] 
**rule_impact** | **float** | The impact (unbounded floating point value) that implementing the suggestions for this rule would have on making the page faster. Impact is comparable between rules to determine which rule&#39;s suggestions would have a higher or lower impact on making a page faster. For instance, if enabling compression would save 1MB, while optimizing images would save 500kB, the enable compression rule would have 2x the impact of the image optimization rule, all other things being equal. | [optional] 
**summary** | [**PagespeedApiFormatStringV2**](PagespeedApiFormatStringV2.md) |  | [optional] 
**url_blocks** | [**List[ResultFormattedResultsRuleResultsValueUrlBlocksInner]**](ResultFormattedResultsRuleResultsValueUrlBlocksInner.md) | List of blocks of URLs. Each block may contain a heading and a list of URLs. Each URL may optionally include additional details. | [optional] 

## Example

```python
from openapi_client.models.result_formatted_results_rule_results_value import ResultFormattedResultsRuleResultsValue

# TODO update the JSON string below
json = "{}"
# create an instance of ResultFormattedResultsRuleResultsValue from a JSON string
result_formatted_results_rule_results_value_instance = ResultFormattedResultsRuleResultsValue.from_json(json)
# print the JSON string representation of the object
print(ResultFormattedResultsRuleResultsValue.to_json())

# convert the object into a dict
result_formatted_results_rule_results_value_dict = result_formatted_results_rule_results_value_instance.to_dict()
# create an instance of ResultFormattedResultsRuleResultsValue from a dict
result_formatted_results_rule_results_value_from_dict = ResultFormattedResultsRuleResultsValue.from_dict(result_formatted_results_rule_results_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


