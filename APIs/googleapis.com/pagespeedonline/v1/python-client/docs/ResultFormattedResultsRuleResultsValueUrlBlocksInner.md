# ResultFormattedResultsRuleResultsValueUrlBlocksInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**header** | [**ResultFormattedResultsRuleResultsValueUrlBlocksInnerHeader**](ResultFormattedResultsRuleResultsValueUrlBlocksInnerHeader.md) |  | [optional] 
**urls** | [**List[ResultFormattedResultsRuleResultsValueUrlBlocksInnerUrlsInner]**](ResultFormattedResultsRuleResultsValueUrlBlocksInnerUrlsInner.md) | List of entries that provide information about URLs in the url block. Optional. | [optional] 

## Example

```python
from openapi_client.models.result_formatted_results_rule_results_value_url_blocks_inner import ResultFormattedResultsRuleResultsValueUrlBlocksInner

# TODO update the JSON string below
json = "{}"
# create an instance of ResultFormattedResultsRuleResultsValueUrlBlocksInner from a JSON string
result_formatted_results_rule_results_value_url_blocks_inner_instance = ResultFormattedResultsRuleResultsValueUrlBlocksInner.from_json(json)
# print the JSON string representation of the object
print(ResultFormattedResultsRuleResultsValueUrlBlocksInner.to_json())

# convert the object into a dict
result_formatted_results_rule_results_value_url_blocks_inner_dict = result_formatted_results_rule_results_value_url_blocks_inner_instance.to_dict()
# create an instance of ResultFormattedResultsRuleResultsValueUrlBlocksInner from a dict
result_formatted_results_rule_results_value_url_blocks_inner_from_dict = ResultFormattedResultsRuleResultsValueUrlBlocksInner.from_dict(result_formatted_results_rule_results_value_url_blocks_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


