# BulkIssueIsWatching

A container for the watch status of a list of issues.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issues_is_watching** | **Dict[str, bool]** | The map of issue ID to boolean watch status. | [optional] [readonly] 

## Example

```python
from openapi_client.models.bulk_issue_is_watching import BulkIssueIsWatching

# TODO update the JSON string below
json = "{}"
# create an instance of BulkIssueIsWatching from a JSON string
bulk_issue_is_watching_instance = BulkIssueIsWatching.from_json(json)
# print the JSON string representation of the object
print(BulkIssueIsWatching.to_json())

# convert the object into a dict
bulk_issue_is_watching_dict = bulk_issue_is_watching_instance.to_dict()
# create an instance of BulkIssueIsWatching from a dict
bulk_issue_is_watching_from_dict = BulkIssueIsWatching.from_dict(bulk_issue_is_watching_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


