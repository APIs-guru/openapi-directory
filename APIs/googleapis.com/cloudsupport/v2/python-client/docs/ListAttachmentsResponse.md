# ListAttachmentsResponse

The response message for the ListAttachments endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | [**List[Attachment]**](Attachment.md) | The list of attachments associated with a case. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Set this in the &#x60;page_token&#x60; field of subsequent &#x60;cases.attachments.list&#x60; requests. If unspecified, there are no more results to retrieve. | [optional] 

## Example

```python
from openapi_client.models.list_attachments_response import ListAttachmentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAttachmentsResponse from a JSON string
list_attachments_response_instance = ListAttachmentsResponse.from_json(json)
# print the JSON string representation of the object
print(ListAttachmentsResponse.to_json())

# convert the object into a dict
list_attachments_response_dict = list_attachments_response_instance.to_dict()
# create an instance of ListAttachmentsResponse from a dict
list_attachments_response_from_dict = ListAttachmentsResponse.from_dict(list_attachments_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


