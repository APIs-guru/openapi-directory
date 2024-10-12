# GetTestCounts200ResponseResultsInnerIssuesPrevented


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_false** | **float** | The number of tests that did not prevent issues from being introduced | [optional] 
**var_true** | **float** | The number of tests that prevented issues from being introduced | [optional] 

## Example

```python
from openapi_client.models.get_test_counts200_response_results_inner_issues_prevented import GetTestCounts200ResponseResultsInnerIssuesPrevented

# TODO update the JSON string below
json = "{}"
# create an instance of GetTestCounts200ResponseResultsInnerIssuesPrevented from a JSON string
get_test_counts200_response_results_inner_issues_prevented_instance = GetTestCounts200ResponseResultsInnerIssuesPrevented.from_json(json)
# print the JSON string representation of the object
print(GetTestCounts200ResponseResultsInnerIssuesPrevented.to_json())

# convert the object into a dict
get_test_counts200_response_results_inner_issues_prevented_dict = get_test_counts200_response_results_inner_issues_prevented_instance.to_dict()
# create an instance of GetTestCounts200ResponseResultsInnerIssuesPrevented from a dict
get_test_counts200_response_results_inner_issues_prevented_from_dict = GetTestCounts200ResponseResultsInnerIssuesPrevented.from_dict(get_test_counts200_response_results_inner_issues_prevented_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


