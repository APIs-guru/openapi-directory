# IssueAttachmentCollection

Paged Issue Attachment list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] [readonly] 
**value** | [**List[IssueAttachmentContract]**](IssueAttachmentContract.md) | Issue Attachment values. | [optional] [readonly] 

## Example

```python
from openapi_client.models.issue_attachment_collection import IssueAttachmentCollection

# TODO update the JSON string below
json = "{}"
# create an instance of IssueAttachmentCollection from a JSON string
issue_attachment_collection_instance = IssueAttachmentCollection.from_json(json)
# print the JSON string representation of the object
print(IssueAttachmentCollection.to_json())

# convert the object into a dict
issue_attachment_collection_dict = issue_attachment_collection_instance.to_dict()
# create an instance of IssueAttachmentCollection from a dict
issue_attachment_collection_from_dict = IssueAttachmentCollection.from_dict(issue_attachment_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


