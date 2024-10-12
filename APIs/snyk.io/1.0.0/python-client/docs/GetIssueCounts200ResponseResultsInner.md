# GetIssueCounts200ResponseResultsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **float** | The number of issues | 
**day** | **str** | The date in the format &#x60;YYYY-MM-DD&#x60; | 
**fixable** | [**GetIssueCounts200ResponseResultsInnerFixable**](GetIssueCounts200ResponseResultsInnerFixable.md) |  | [optional] 
**severity** | [**GetIssueCounts200ResponseResultsInnerSeverity**](GetIssueCounts200ResponseResultsInnerSeverity.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_issue_counts200_response_results_inner import GetIssueCounts200ResponseResultsInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetIssueCounts200ResponseResultsInner from a JSON string
get_issue_counts200_response_results_inner_instance = GetIssueCounts200ResponseResultsInner.from_json(json)
# print the JSON string representation of the object
print(GetIssueCounts200ResponseResultsInner.to_json())

# convert the object into a dict
get_issue_counts200_response_results_inner_dict = get_issue_counts200_response_results_inner_instance.to_dict()
# create an instance of GetIssueCounts200ResponseResultsInner from a dict
get_issue_counts200_response_results_inner_from_dict = GetIssueCounts200ResponseResultsInner.from_dict(get_issue_counts200_response_results_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


