# GetTestCounts200ResponseResultsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **float** | The number of tests conducted | 
**is_private** | [**GetTestCounts200ResponseResultsInnerIsPrivate**](GetTestCounts200ResponseResultsInnerIsPrivate.md) |  | [optional] 
**issues_prevented** | [**GetTestCounts200ResponseResultsInnerIssuesPrevented**](GetTestCounts200ResponseResultsInnerIssuesPrevented.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_test_counts200_response_results_inner import GetTestCounts200ResponseResultsInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetTestCounts200ResponseResultsInner from a JSON string
get_test_counts200_response_results_inner_instance = GetTestCounts200ResponseResultsInner.from_json(json)
# print the JSON string representation of the object
print(GetTestCounts200ResponseResultsInner.to_json())

# convert the object into a dict
get_test_counts200_response_results_inner_dict = get_test_counts200_response_results_inner_instance.to_dict()
# create an instance of GetTestCounts200ResponseResultsInner from a dict
get_test_counts200_response_results_inner_from_dict = GetTestCounts200ResponseResultsInner.from_dict(get_test_counts200_response_results_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


