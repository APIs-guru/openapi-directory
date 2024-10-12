# IssueCommentListRequestBean


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | **List[int]** | The list of comment IDs. A maximum of 1000 IDs can be specified. | 

## Example

```python
from openapi_client.models.issue_comment_list_request_bean import IssueCommentListRequestBean

# TODO update the JSON string below
json = "{}"
# create an instance of IssueCommentListRequestBean from a JSON string
issue_comment_list_request_bean_instance = IssueCommentListRequestBean.from_json(json)
# print the JSON string representation of the object
print(IssueCommentListRequestBean.to_json())

# convert the object into a dict
issue_comment_list_request_bean_dict = issue_comment_list_request_bean_instance.to_dict()
# create an instance of IssueCommentListRequestBean from a dict
issue_comment_list_request_bean_from_dict = IssueCommentListRequestBean.from_dict(issue_comment_list_request_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


