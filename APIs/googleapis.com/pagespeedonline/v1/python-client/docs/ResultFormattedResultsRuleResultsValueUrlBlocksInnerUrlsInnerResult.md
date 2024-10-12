# ResultFormattedResultsRuleResultsValueUrlBlocksInnerUrlsInnerResult

A format string that gives information about the URL, and a list of arguments for that format string.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**args** | [**List[ResultFormattedResultsRuleResultsValueUrlBlocksInnerHeaderArgsInner]**](ResultFormattedResultsRuleResultsValueUrlBlocksInnerHeaderArgsInner.md) | List of arguments for the format string. | [optional] 
**format** | **str** | A localized format string with $N placeholders, where N is the 1-indexed argument number, e.g. &#39;Minifying the resource at URL $1 can save $2 bytes&#39;. | [optional] 

## Example

```python
from openapi_client.models.result_formatted_results_rule_results_value_url_blocks_inner_urls_inner_result import ResultFormattedResultsRuleResultsValueUrlBlocksInnerUrlsInnerResult

# TODO update the JSON string below
json = "{}"
# create an instance of ResultFormattedResultsRuleResultsValueUrlBlocksInnerUrlsInnerResult from a JSON string
result_formatted_results_rule_results_value_url_blocks_inner_urls_inner_result_instance = ResultFormattedResultsRuleResultsValueUrlBlocksInnerUrlsInnerResult.from_json(json)
# print the JSON string representation of the object
print(ResultFormattedResultsRuleResultsValueUrlBlocksInnerUrlsInnerResult.to_json())

# convert the object into a dict
result_formatted_results_rule_results_value_url_blocks_inner_urls_inner_result_dict = result_formatted_results_rule_results_value_url_blocks_inner_urls_inner_result_instance.to_dict()
# create an instance of ResultFormattedResultsRuleResultsValueUrlBlocksInnerUrlsInnerResult from a dict
result_formatted_results_rule_results_value_url_blocks_inner_urls_inner_result_from_dict = ResultFormattedResultsRuleResultsValueUrlBlocksInnerUrlsInnerResult.from_dict(result_formatted_results_rule_results_value_url_blocks_inner_urls_inner_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


