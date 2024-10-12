# IssueCommentContractProperties

Issue Comment contract Properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_date** | **datetime** | Date and time when the comment was created. | [optional] 
**text** | **str** | Comment text. | 
**user_id** | **str** | A resource identifier for the user who left the comment. | 

## Example

```python
from openapi_client.models.issue_comment_contract_properties import IssueCommentContractProperties

# TODO update the JSON string below
json = "{}"
# create an instance of IssueCommentContractProperties from a JSON string
issue_comment_contract_properties_instance = IssueCommentContractProperties.from_json(json)
# print the JSON string representation of the object
print(IssueCommentContractProperties.to_json())

# convert the object into a dict
issue_comment_contract_properties_dict = issue_comment_contract_properties_instance.to_dict()
# create an instance of IssueCommentContractProperties from a dict
issue_comment_contract_properties_from_dict = IssueCommentContractProperties.from_dict(issue_comment_contract_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


