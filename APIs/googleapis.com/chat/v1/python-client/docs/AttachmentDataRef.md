# AttachmentDataRef


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachment_upload_token** | **str** | Opaque token containing a reference to an uploaded attachment. Treated by clients as an opaque string and used to create or update Chat messages with attachments. | [optional] 
**resource_name** | **str** | The resource name of the attachment data. This field is used with the media API to download the attachment data. | [optional] 

## Example

```python
from openapi_client.models.attachment_data_ref import AttachmentDataRef

# TODO update the JSON string below
json = "{}"
# create an instance of AttachmentDataRef from a JSON string
attachment_data_ref_instance = AttachmentDataRef.from_json(json)
# print the JSON string representation of the object
print(AttachmentDataRef.to_json())

# convert the object into a dict
attachment_data_ref_dict = attachment_data_ref_instance.to_dict()
# create an instance of AttachmentDataRef from a dict
attachment_data_ref_from_dict = AttachmentDataRef.from_dict(attachment_data_ref_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


