# IssueLink

Details of a link between issues.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the issue link. | [optional] [readonly] 
**inward_issue** | [**LinkedIssue**](LinkedIssue.md) | Provides details about the linked issue. If presenting this link in a user interface, use the &#x60;inward&#x60; field of the issue link type to label the link. | 
**outward_issue** | [**LinkedIssue**](LinkedIssue.md) | Provides details about the linked issue. If presenting this link in a user interface, use the &#x60;outward&#x60; field of the issue link type to label the link. | 
**var_self** | **str** | The URL of the issue link. | [optional] [readonly] 
**type** | [**IssueLinkType**](IssueLinkType.md) | The type of link between the issues. | 

## Example

```python
from openapi_client.models.issue_link import IssueLink

# TODO update the JSON string below
json = "{}"
# create an instance of IssueLink from a JSON string
issue_link_instance = IssueLink.from_json(json)
# print the JSON string representation of the object
print(IssueLink.to_json())

# convert the object into a dict
issue_link_dict = issue_link_instance.to_dict()
# create an instance of IssueLink from a dict
issue_link_from_dict = IssueLink.from_dict(issue_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


