# ResultFormattedResults

Localized PageSpeed results. Contains a ruleResults entry for each PageSpeed rule instantiated and run by the server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locale** | **str** | The locale of the formattedResults, e.g. \&quot;en_US\&quot;. | [optional] 
**rule_results** | [**Dict[str, ResultFormattedResultsRuleResultsValue]**](ResultFormattedResultsRuleResultsValue.md) | Dictionary of formatted rule results, with one entry for each PageSpeed rule instantiated and run by the server. | [optional] 

## Example

```python
from openapi_client.models.result_formatted_results import ResultFormattedResults

# TODO update the JSON string below
json = "{}"
# create an instance of ResultFormattedResults from a JSON string
result_formatted_results_instance = ResultFormattedResults.from_json(json)
# print the JSON string representation of the object
print(ResultFormattedResults.to_json())

# convert the object into a dict
result_formatted_results_dict = result_formatted_results_instance.to_dict()
# create an instance of ResultFormattedResults from a dict
result_formatted_results_from_dict = ResultFormattedResults.from_dict(result_formatted_results_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


