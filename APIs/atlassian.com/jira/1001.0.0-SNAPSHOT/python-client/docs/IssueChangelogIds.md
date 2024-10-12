# IssueChangelogIds

A list of changelog IDs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**changelog_ids** | **List[int]** | The list of changelog IDs. | 

## Example

```python
from openapi_client.models.issue_changelog_ids import IssueChangelogIds

# TODO update the JSON string below
json = "{}"
# create an instance of IssueChangelogIds from a JSON string
issue_changelog_ids_instance = IssueChangelogIds.from_json(json)
# print the JSON string representation of the object
print(IssueChangelogIds.to_json())

# convert the object into a dict
issue_changelog_ids_dict = issue_changelog_ids_instance.to_dict()
# create an instance of IssueChangelogIds from a dict
issue_changelog_ids_from_dict = IssueChangelogIds.from_dict(issue_changelog_ids_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


