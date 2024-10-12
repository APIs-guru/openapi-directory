# IssueCommentContract

Issue Comment Contract details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**IssueCommentContractProperties**](IssueCommentContractProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.issue_comment_contract import IssueCommentContract

# TODO update the JSON string below
json = "{}"
# create an instance of IssueCommentContract from a JSON string
issue_comment_contract_instance = IssueCommentContract.from_json(json)
# print the JSON string representation of the object
print(IssueCommentContract.to_json())

# convert the object into a dict
issue_comment_contract_dict = issue_comment_contract_instance.to_dict()
# create an instance of IssueCommentContract from a dict
issue_comment_contract_from_dict = IssueCommentContract.from_dict(issue_comment_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


