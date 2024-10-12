# IssueAttachmentContractProperties

Issue Attachment contract Properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | An HTTP link or Base64-encoded binary data. | 
**content_format** | **str** | Either &#39;link&#39; if content is provided via an HTTP link or the MIME type of the Base64-encoded binary data provided in the &#39;content&#39; property. | 
**title** | **str** | Filename by which the binary data will be saved. | 

## Example

```python
from openapi_client.models.issue_attachment_contract_properties import IssueAttachmentContractProperties

# TODO update the JSON string below
json = "{}"
# create an instance of IssueAttachmentContractProperties from a JSON string
issue_attachment_contract_properties_instance = IssueAttachmentContractProperties.from_json(json)
# print the JSON string representation of the object
print(IssueAttachmentContractProperties.to_json())

# convert the object into a dict
issue_attachment_contract_properties_dict = issue_attachment_contract_properties_instance.to_dict()
# create an instance of IssueAttachmentContractProperties from a dict
issue_attachment_contract_properties_from_dict = IssueAttachmentContractProperties.from_dict(issue_attachment_contract_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


