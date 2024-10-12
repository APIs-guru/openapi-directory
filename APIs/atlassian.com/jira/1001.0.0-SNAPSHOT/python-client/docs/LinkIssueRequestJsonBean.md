# LinkIssueRequestJsonBean


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | [**Comment**](Comment.md) |  | [optional] 
**inward_issue** | [**LinkedIssue**](LinkedIssue.md) |  | 
**outward_issue** | [**LinkedIssue**](LinkedIssue.md) |  | 
**type** | [**IssueLinkType**](IssueLinkType.md) |  | 

## Example

```python
from openapi_client.models.link_issue_request_json_bean import LinkIssueRequestJsonBean

# TODO update the JSON string below
json = "{}"
# create an instance of LinkIssueRequestJsonBean from a JSON string
link_issue_request_json_bean_instance = LinkIssueRequestJsonBean.from_json(json)
# print the JSON string representation of the object
print(LinkIssueRequestJsonBean.to_json())

# convert the object into a dict
link_issue_request_json_bean_dict = link_issue_request_json_bean_instance.to_dict()
# create an instance of LinkIssueRequestJsonBean from a dict
link_issue_request_json_bean_from_dict = LinkIssueRequestJsonBean.from_dict(link_issue_request_json_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


