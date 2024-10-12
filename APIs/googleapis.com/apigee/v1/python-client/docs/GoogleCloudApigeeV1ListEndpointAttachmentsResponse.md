# GoogleCloudApigeeV1ListEndpointAttachmentsResponse

Response for ListEndpointAttachments method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint_attachments** | [**List[GoogleCloudApigeeV1EndpointAttachment]**](GoogleCloudApigeeV1EndpointAttachment.md) | Endpoint attachments in the specified organization. | [optional] 
**next_page_token** | **str** | Page token that you can include in an &#x60;ListEndpointAttachments&#x60; request to retrieve the next page. If omitted, no subsequent pages exist. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_list_endpoint_attachments_response import GoogleCloudApigeeV1ListEndpointAttachmentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ListEndpointAttachmentsResponse from a JSON string
google_cloud_apigee_v1_list_endpoint_attachments_response_instance = GoogleCloudApigeeV1ListEndpointAttachmentsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ListEndpointAttachmentsResponse.to_json())

# convert the object into a dict
google_cloud_apigee_v1_list_endpoint_attachments_response_dict = google_cloud_apigee_v1_list_endpoint_attachments_response_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ListEndpointAttachmentsResponse from a dict
google_cloud_apigee_v1_list_endpoint_attachments_response_from_dict = GoogleCloudApigeeV1ListEndpointAttachmentsResponse.from_dict(google_cloud_apigee_v1_list_endpoint_attachments_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


