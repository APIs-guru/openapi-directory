# GetListOfIssues200ResponseResultsInnerIssueIdentifiers

External identifiers assigned to the issue (not applicable to licenses)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cve** | **List[object]** | Common Vulnerability Enumeration identifiers | [optional] 
**cwe** | **List[object]** | Common Weakness Enumeration identifiers | [optional] 
**osvdb** | **List[object]** | Identifiers assigned by the Open Source Vulnerability Database (OSVDB) | [optional] 

## Example

```python
from openapi_client.models.get_list_of_issues200_response_results_inner_issue_identifiers import GetListOfIssues200ResponseResultsInnerIssueIdentifiers

# TODO update the JSON string below
json = "{}"
# create an instance of GetListOfIssues200ResponseResultsInnerIssueIdentifiers from a JSON string
get_list_of_issues200_response_results_inner_issue_identifiers_instance = GetListOfIssues200ResponseResultsInnerIssueIdentifiers.from_json(json)
# print the JSON string representation of the object
print(GetListOfIssues200ResponseResultsInnerIssueIdentifiers.to_json())

# convert the object into a dict
get_list_of_issues200_response_results_inner_issue_identifiers_dict = get_list_of_issues200_response_results_inner_issue_identifiers_instance.to_dict()
# create an instance of GetListOfIssues200ResponseResultsInnerIssueIdentifiers from a dict
get_list_of_issues200_response_results_inner_issue_identifiers_from_dict = GetListOfIssues200ResponseResultsInnerIssueIdentifiers.from_dict(get_list_of_issues200_response_results_inner_issue_identifiers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


