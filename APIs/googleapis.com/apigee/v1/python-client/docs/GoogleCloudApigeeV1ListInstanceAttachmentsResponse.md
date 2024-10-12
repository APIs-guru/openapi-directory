# GoogleCloudApigeeV1ListInstanceAttachmentsResponse

Response for ListInstanceAttachments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | [**List[GoogleCloudApigeeV1InstanceAttachment]**](GoogleCloudApigeeV1InstanceAttachment.md) | Attachments for the instance. | [optional] 
**next_page_token** | **str** | Page token that you can include in a ListInstanceAttachments request to retrieve the next page of content. If omitted, no subsequent pages exist. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_list_instance_attachments_response import GoogleCloudApigeeV1ListInstanceAttachmentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ListInstanceAttachmentsResponse from a JSON string
google_cloud_apigee_v1_list_instance_attachments_response_instance = GoogleCloudApigeeV1ListInstanceAttachmentsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ListInstanceAttachmentsResponse.to_json())

# convert the object into a dict
google_cloud_apigee_v1_list_instance_attachments_response_dict = google_cloud_apigee_v1_list_instance_attachments_response_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ListInstanceAttachmentsResponse from a dict
google_cloud_apigee_v1_list_instance_attachments_response_from_dict = GoogleCloudApigeeV1ListInstanceAttachmentsResponse.from_dict(google_cloud_apigee_v1_list_instance_attachments_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


