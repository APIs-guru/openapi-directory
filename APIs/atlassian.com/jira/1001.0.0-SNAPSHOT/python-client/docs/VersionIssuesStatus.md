# VersionIssuesStatus

Counts of the number of issues in various statuses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**done** | **int** | Count of issues with status *done*. | [optional] [readonly] 
**in_progress** | **int** | Count of issues with status *in progress*. | [optional] [readonly] 
**to_do** | **int** | Count of issues with status *to do*. | [optional] [readonly] 
**unmapped** | **int** | Count of issues with a status other than *to do*, *in progress*, and *done*. | [optional] [readonly] 

## Example

```python
from openapi_client.models.version_issues_status import VersionIssuesStatus

# TODO update the JSON string below
json = "{}"
# create an instance of VersionIssuesStatus from a JSON string
version_issues_status_instance = VersionIssuesStatus.from_json(json)
# print the JSON string representation of the object
print(VersionIssuesStatus.to_json())

# convert the object into a dict
version_issues_status_dict = version_issues_status_instance.to_dict()
# create an instance of VersionIssuesStatus from a dict
version_issues_status_from_dict = VersionIssuesStatus.from_dict(version_issues_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


