# ModifyAttachmentsRequest

Request to modify the attachments of a student submission.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**add_attachments** | [**List[Attachment]**](Attachment.md) | Attachments to add. A student submission may not have more than 20 attachments. Form attachments are not supported. | [optional] 

## Example

```python
from openapi_client.models.modify_attachments_request import ModifyAttachmentsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ModifyAttachmentsRequest from a JSON string
modify_attachments_request_instance = ModifyAttachmentsRequest.from_json(json)
# print the JSON string representation of the object
print(ModifyAttachmentsRequest.to_json())

# convert the object into a dict
modify_attachments_request_dict = modify_attachments_request_instance.to_dict()
# create an instance of ModifyAttachmentsRequest from a dict
modify_attachments_request_from_dict = ModifyAttachmentsRequest.from_dict(modify_attachments_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


