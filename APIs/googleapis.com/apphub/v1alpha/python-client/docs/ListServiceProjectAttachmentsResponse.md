# ListServiceProjectAttachmentsResponse

Response for ListServiceProjectAttachments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token identifying a page of results the server should return. | [optional] 
**service_project_attachments** | [**List[ServiceProjectAttachment]**](ServiceProjectAttachment.md) | List of service project attachments. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_service_project_attachments_response import ListServiceProjectAttachmentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListServiceProjectAttachmentsResponse from a JSON string
list_service_project_attachments_response_instance = ListServiceProjectAttachmentsResponse.from_json(json)
# print the JSON string representation of the object
print(ListServiceProjectAttachmentsResponse.to_json())

# convert the object into a dict
list_service_project_attachments_response_dict = list_service_project_attachments_response_instance.to_dict()
# create an instance of ListServiceProjectAttachmentsResponse from a dict
list_service_project_attachments_response_from_dict = ListServiceProjectAttachmentsResponse.from_dict(list_service_project_attachments_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


