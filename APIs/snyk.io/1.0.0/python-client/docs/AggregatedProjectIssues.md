# AggregatedProjectIssues


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issues** | [**List[AggregatedProjectIssuesIssuesInner]**](AggregatedProjectIssuesIssuesInner.md) | An array of identified issues | [optional] 

## Example

```python
from openapi_client.models.aggregated_project_issues import AggregatedProjectIssues

# TODO update the JSON string below
json = "{}"
# create an instance of AggregatedProjectIssues from a JSON string
aggregated_project_issues_instance = AggregatedProjectIssues.from_json(json)
# print the JSON string representation of the object
print(AggregatedProjectIssues.to_json())

# convert the object into a dict
aggregated_project_issues_dict = aggregated_project_issues_instance.to_dict()
# create an instance of AggregatedProjectIssues from a dict
aggregated_project_issues_from_dict = AggregatedProjectIssues.from_dict(aggregated_project_issues_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


