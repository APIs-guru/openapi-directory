# VersionUnresolvedIssuesCount

Count of a version's unresolved issues.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issues_count** | **int** | Count of issues. | [optional] [readonly] 
**issues_unresolved_count** | **int** | Count of unresolved issues. | [optional] [readonly] 
**var_self** | **str** | The URL of these count details. | [optional] [readonly] 

## Example

```python
from openapi_client.models.version_unresolved_issues_count import VersionUnresolvedIssuesCount

# TODO update the JSON string below
json = "{}"
# create an instance of VersionUnresolvedIssuesCount from a JSON string
version_unresolved_issues_count_instance = VersionUnresolvedIssuesCount.from_json(json)
# print the JSON string representation of the object
print(VersionUnresolvedIssuesCount.to_json())

# convert the object into a dict
version_unresolved_issues_count_dict = version_unresolved_issues_count_instance.to_dict()
# create an instance of VersionUnresolvedIssuesCount from a dict
version_unresolved_issues_count_from_dict = VersionUnresolvedIssuesCount.from_dict(version_unresolved_issues_count_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


