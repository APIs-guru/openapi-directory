# LookupServiceProjectAttachmentResponse

Response for LookupServiceProjectAttachment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_project_attachment** | [**ServiceProjectAttachment**](ServiceProjectAttachment.md) |  | [optional] 

## Example

```python
from openapi_client.models.lookup_service_project_attachment_response import LookupServiceProjectAttachmentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LookupServiceProjectAttachmentResponse from a JSON string
lookup_service_project_attachment_response_instance = LookupServiceProjectAttachmentResponse.from_json(json)
# print the JSON string representation of the object
print(LookupServiceProjectAttachmentResponse.to_json())

# convert the object into a dict
lookup_service_project_attachment_response_dict = lookup_service_project_attachment_response_instance.to_dict()
# create an instance of LookupServiceProjectAttachmentResponse from a dict
lookup_service_project_attachment_response_from_dict = LookupServiceProjectAttachmentResponse.from_dict(lookup_service_project_attachment_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


