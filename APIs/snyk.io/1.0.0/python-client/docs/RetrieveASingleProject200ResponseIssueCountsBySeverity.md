# RetrieveASingleProject200ResponseIssueCountsBySeverity

Number of known vulnerabilities in the project, not including ignored issues

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**critical** | **float** | Number of critical severity vulnerabilities | [optional] 
**high** | **float** | Number of high severity vulnerabilities | [optional] 
**low** | **float** | Number of low severity vulnerabilities | [optional] 
**medium** | **float** | Number of medium severity vulnerabilities | [optional] 

## Example

```python
from openapi_client.models.retrieve_a_single_project200_response_issue_counts_by_severity import RetrieveASingleProject200ResponseIssueCountsBySeverity

# TODO update the JSON string below
json = "{}"
# create an instance of RetrieveASingleProject200ResponseIssueCountsBySeverity from a JSON string
retrieve_a_single_project200_response_issue_counts_by_severity_instance = RetrieveASingleProject200ResponseIssueCountsBySeverity.from_json(json)
# print the JSON string representation of the object
print(RetrieveASingleProject200ResponseIssueCountsBySeverity.to_json())

# convert the object into a dict
retrieve_a_single_project200_response_issue_counts_by_severity_dict = retrieve_a_single_project200_response_issue_counts_by_severity_instance.to_dict()
# create an instance of RetrieveASingleProject200ResponseIssueCountsBySeverity from a dict
retrieve_a_single_project200_response_issue_counts_by_severity_from_dict = RetrieveASingleProject200ResponseIssueCountsBySeverity.from_dict(retrieve_a_single_project200_response_issue_counts_by_severity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


