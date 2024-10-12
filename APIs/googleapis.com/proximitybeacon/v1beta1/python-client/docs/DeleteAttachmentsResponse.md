# DeleteAttachmentsResponse

Response for a request to delete attachments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**num_deleted** | **int** | The number of attachments that were deleted. | [optional] 

## Example

```python
from openapi_client.models.delete_attachments_response import DeleteAttachmentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteAttachmentsResponse from a JSON string
delete_attachments_response_instance = DeleteAttachmentsResponse.from_json(json)
# print the JSON string representation of the object
print(DeleteAttachmentsResponse.to_json())

# convert the object into a dict
delete_attachments_response_dict = delete_attachments_response_instance.to_dict()
# create an instance of DeleteAttachmentsResponse from a dict
delete_attachments_response_from_dict = DeleteAttachmentsResponse.from_dict(delete_attachments_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


