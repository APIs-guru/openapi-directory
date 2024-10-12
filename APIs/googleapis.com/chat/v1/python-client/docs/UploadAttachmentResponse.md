# UploadAttachmentResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachment_data_ref** | [**AttachmentDataRef**](AttachmentDataRef.md) |  | [optional] 

## Example

```python
from openapi_client.models.upload_attachment_response import UploadAttachmentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UploadAttachmentResponse from a JSON string
upload_attachment_response_instance = UploadAttachmentResponse.from_json(json)
# print the JSON string representation of the object
print(UploadAttachmentResponse.to_json())

# convert the object into a dict
upload_attachment_response_dict = upload_attachment_response_instance.to_dict()
# create an instance of UploadAttachmentResponse from a dict
upload_attachment_response_from_dict = UploadAttachmentResponse.from_dict(upload_attachment_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


