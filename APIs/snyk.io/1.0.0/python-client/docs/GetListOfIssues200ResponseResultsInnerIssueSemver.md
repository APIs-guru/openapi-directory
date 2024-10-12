# GetListOfIssues200ResponseResultsInnerIssueSemver

The ranges that are vulnerable and unaffected by the issue

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unaffected** | **str** | The ranges that are unaffected by the issue | [optional] 
**vulnerable** | **List[object]** | The ranges that are vulnerable to the issue | [optional] 

## Example

```python
from openapi_client.models.get_list_of_issues200_response_results_inner_issue_semver import GetListOfIssues200ResponseResultsInnerIssueSemver

# TODO update the JSON string below
json = "{}"
# create an instance of GetListOfIssues200ResponseResultsInnerIssueSemver from a JSON string
get_list_of_issues200_response_results_inner_issue_semver_instance = GetListOfIssues200ResponseResultsInnerIssueSemver.from_json(json)
# print the JSON string representation of the object
print(GetListOfIssues200ResponseResultsInnerIssueSemver.to_json())

# convert the object into a dict
get_list_of_issues200_response_results_inner_issue_semver_dict = get_list_of_issues200_response_results_inner_issue_semver_instance.to_dict()
# create an instance of GetListOfIssues200ResponseResultsInnerIssueSemver from a dict
get_list_of_issues200_response_results_inner_issue_semver_from_dict = GetListOfIssues200ResponseResultsInnerIssueSemver.from_dict(get_list_of_issues200_response_results_inner_issue_semver_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


