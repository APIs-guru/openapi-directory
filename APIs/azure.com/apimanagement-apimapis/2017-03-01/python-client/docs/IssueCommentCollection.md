# IssueCommentCollection

Paged Issue Comment list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] [readonly] 
**value** | [**List[IssueCommentContract]**](IssueCommentContract.md) | Issue Comment values. | [optional] [readonly] 

## Example

```python
from openapi_client.models.issue_comment_collection import IssueCommentCollection

# TODO update the JSON string below
json = "{}"
# create an instance of IssueCommentCollection from a JSON string
issue_comment_collection_instance = IssueCommentCollection.from_json(json)
# print the JSON string representation of the object
print(IssueCommentCollection.to_json())

# convert the object into a dict
issue_comment_collection_dict = issue_comment_collection_instance.to_dict()
# create an instance of IssueCommentCollection from a dict
issue_comment_collection_from_dict = IssueCommentCollection.from_dict(issue_comment_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


