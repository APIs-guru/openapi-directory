# IssueAttachmentContract

Issue Attachment Contract details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**IssueAttachmentContractProperties**](IssueAttachmentContractProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.issue_attachment_contract import IssueAttachmentContract

# TODO update the JSON string below
json = "{}"
# create an instance of IssueAttachmentContract from a JSON string
issue_attachment_contract_instance = IssueAttachmentContract.from_json(json)
# print the JSON string representation of the object
print(IssueAttachmentContract.to_json())

# convert the object into a dict
issue_attachment_contract_dict = issue_attachment_contract_instance.to_dict()
# create an instance of IssueAttachmentContract from a dict
issue_attachment_contract_from_dict = IssueAttachmentContract.from_dict(issue_attachment_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


