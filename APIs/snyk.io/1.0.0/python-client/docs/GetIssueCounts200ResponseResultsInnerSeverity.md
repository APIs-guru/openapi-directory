# GetIssueCounts200ResponseResultsInnerSeverity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**critical** | **float** | The number of critical severity issues | [optional] 
**high** | **float** | The number of high severity issues | [optional] 
**low** | **float** | The number of low severity issues | [optional] 
**medium** | **float** | The number of medium severity issues | [optional] 

## Example

```python
from openapi_client.models.get_issue_counts200_response_results_inner_severity import GetIssueCounts200ResponseResultsInnerSeverity

# TODO update the JSON string below
json = "{}"
# create an instance of GetIssueCounts200ResponseResultsInnerSeverity from a JSON string
get_issue_counts200_response_results_inner_severity_instance = GetIssueCounts200ResponseResultsInnerSeverity.from_json(json)
# print the JSON string representation of the object
print(GetIssueCounts200ResponseResultsInnerSeverity.to_json())

# convert the object into a dict
get_issue_counts200_response_results_inner_severity_dict = get_issue_counts200_response_results_inner_severity_instance.to_dict()
# create an instance of GetIssueCounts200ResponseResultsInnerSeverity from a dict
get_issue_counts200_response_results_inner_severity_from_dict = GetIssueCounts200ResponseResultsInnerSeverity.from_dict(get_issue_counts200_response_results_inner_severity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


