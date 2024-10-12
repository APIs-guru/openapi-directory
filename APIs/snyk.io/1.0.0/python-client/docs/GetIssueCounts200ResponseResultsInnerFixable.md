# GetIssueCounts200ResponseResultsInnerFixable


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_false** | **float** | The number of non-fixable issues | [optional] 
**var_true** | **float** | The number of fixable issues | [optional] 

## Example

```python
from openapi_client.models.get_issue_counts200_response_results_inner_fixable import GetIssueCounts200ResponseResultsInnerFixable

# TODO update the JSON string below
json = "{}"
# create an instance of GetIssueCounts200ResponseResultsInnerFixable from a JSON string
get_issue_counts200_response_results_inner_fixable_instance = GetIssueCounts200ResponseResultsInnerFixable.from_json(json)
# print the JSON string representation of the object
print(GetIssueCounts200ResponseResultsInnerFixable.to_json())

# convert the object into a dict
get_issue_counts200_response_results_inner_fixable_dict = get_issue_counts200_response_results_inner_fixable_instance.to_dict()
# create an instance of GetIssueCounts200ResponseResultsInnerFixable from a dict
get_issue_counts200_response_results_inner_fixable_from_dict = GetIssueCounts200ResponseResultsInnerFixable.from_dict(get_issue_counts200_response_results_inner_fixable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


