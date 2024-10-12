# ListEndpointAttachmentsResponse

Response message for ConnectorsService.ListEndpointAttachments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint_attachments** | [**List[EndpointAttachment]**](EndpointAttachment.md) | EndpointAttachments. | [optional] 
**next_page_token** | **str** | Next page token. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_endpoint_attachments_response import ListEndpointAttachmentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListEndpointAttachmentsResponse from a JSON string
list_endpoint_attachments_response_instance = ListEndpointAttachmentsResponse.from_json(json)
# print the JSON string representation of the object
print(ListEndpointAttachmentsResponse.to_json())

# convert the object into a dict
list_endpoint_attachments_response_dict = list_endpoint_attachments_response_instance.to_dict()
# create an instance of ListEndpointAttachmentsResponse from a dict
list_endpoint_attachments_response_from_dict = ListEndpointAttachmentsResponse.from_dict(list_endpoint_attachments_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


