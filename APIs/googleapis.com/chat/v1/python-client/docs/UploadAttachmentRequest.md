# UploadAttachmentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filename** | **str** | Required. The filename of the attachment, including the file extension. | [optional] 

## Example

```python
from openapi_client.models.upload_attachment_request import UploadAttachmentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UploadAttachmentRequest from a JSON string
upload_attachment_request_instance = UploadAttachmentRequest.from_json(json)
# print the JSON string representation of the object
print(UploadAttachmentRequest.to_json())

# convert the object into a dict
upload_attachment_request_dict = upload_attachment_request_instance.to_dict()
# create an instance of UploadAttachmentRequest from a dict
upload_attachment_request_from_dict = UploadAttachmentRequest.from_dict(upload_attachment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


