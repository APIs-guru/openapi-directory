# ApiIssueAttachmentListByService200ResponseValueInnerProperties

Issue Attachment contract Properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | An HTTP link or Base64-encoded binary data. | 
**content_format** | **str** | Either &#39;link&#39; if content is provided via an HTTP link or the MIME type of the Base64-encoded binary data provided in the &#39;content&#39; property. | 
**title** | **str** | Filename by which the binary data will be saved. | 

## Example

```python
from openapi_client.models.api_issue_attachment_list_by_service200_response_value_inner_properties import ApiIssueAttachmentListByService200ResponseValueInnerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApiIssueAttachmentListByService200ResponseValueInnerProperties from a JSON string
api_issue_attachment_list_by_service200_response_value_inner_properties_instance = ApiIssueAttachmentListByService200ResponseValueInnerProperties.from_json(json)
# print the JSON string representation of the object
print(ApiIssueAttachmentListByService200ResponseValueInnerProperties.to_json())

# convert the object into a dict
api_issue_attachment_list_by_service200_response_value_inner_properties_dict = api_issue_attachment_list_by_service200_response_value_inner_properties_instance.to_dict()
# create an instance of ApiIssueAttachmentListByService200ResponseValueInnerProperties from a dict
api_issue_attachment_list_by_service200_response_value_inner_properties_from_dict = ApiIssueAttachmentListByService200ResponseValueInnerProperties.from_dict(api_issue_attachment_list_by_service200_response_value_inner_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


