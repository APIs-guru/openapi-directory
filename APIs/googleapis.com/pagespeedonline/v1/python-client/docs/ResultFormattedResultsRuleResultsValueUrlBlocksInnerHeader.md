# ResultFormattedResultsRuleResultsValueUrlBlocksInnerHeader

Heading to be displayed with the list of URLs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**args** | [**List[ResultFormattedResultsRuleResultsValueUrlBlocksInnerHeaderArgsInner]**](ResultFormattedResultsRuleResultsValueUrlBlocksInnerHeaderArgsInner.md) | List of arguments for the format string. | [optional] 
**format** | **str** | A localized format string with $N placeholders, where N is the 1-indexed argument number, e.g. &#39;Minifying the following $1 resources would save a total of $2 bytes&#39;. | [optional] 

## Example

```python
from openapi_client.models.result_formatted_results_rule_results_value_url_blocks_inner_header import ResultFormattedResultsRuleResultsValueUrlBlocksInnerHeader

# TODO update the JSON string below
json = "{}"
# create an instance of ResultFormattedResultsRuleResultsValueUrlBlocksInnerHeader from a JSON string
result_formatted_results_rule_results_value_url_blocks_inner_header_instance = ResultFormattedResultsRuleResultsValueUrlBlocksInnerHeader.from_json(json)
# print the JSON string representation of the object
print(ResultFormattedResultsRuleResultsValueUrlBlocksInnerHeader.to_json())

# convert the object into a dict
result_formatted_results_rule_results_value_url_blocks_inner_header_dict = result_formatted_results_rule_results_value_url_blocks_inner_header_instance.to_dict()
# create an instance of ResultFormattedResultsRuleResultsValueUrlBlocksInnerHeader from a dict
result_formatted_results_rule_results_value_url_blocks_inner_header_from_dict = ResultFormattedResultsRuleResultsValueUrlBlocksInnerHeader.from_dict(result_formatted_results_rule_results_value_url_blocks_inner_header_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


