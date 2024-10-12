# IssuesResultsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fixed_date** | **str** | The date that the issue was fixed | [optional] 
**introduced_date** | **str** | The date that the issue was introduced into the project | 
**is_fixed** | **bool** | Whether the issue has been fixed | 
**issue** | [**GetListOfIssues200ResponseResultsInnerIssue**](GetListOfIssues200ResponseResultsInnerIssue.md) |  | 
**patched_date** | **str** | The date that the issue was patched | [optional] 

## Example

```python
from openapi_client.models.issues_results_inner import IssuesResultsInner

# TODO update the JSON string below
json = "{}"
# create an instance of IssuesResultsInner from a JSON string
issues_results_inner_instance = IssuesResultsInner.from_json(json)
# print the JSON string representation of the object
print(IssuesResultsInner.to_json())

# convert the object into a dict
issues_results_inner_dict = issues_results_inner_instance.to_dict()
# create an instance of IssuesResultsInner from a dict
issues_results_inner_from_dict = IssuesResultsInner.from_dict(issues_results_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


