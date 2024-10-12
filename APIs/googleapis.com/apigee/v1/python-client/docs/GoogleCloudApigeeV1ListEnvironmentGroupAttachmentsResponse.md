# GoogleCloudApigeeV1ListEnvironmentGroupAttachmentsResponse

Response for ListEnvironmentGroupAttachments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environment_group_attachments** | [**List[GoogleCloudApigeeV1EnvironmentGroupAttachment]**](GoogleCloudApigeeV1EnvironmentGroupAttachment.md) | EnvironmentGroupAttachments for the specified environment group. | [optional] 
**next_page_token** | **str** | Page token that you can include in a ListEnvironmentGroupAttachments request to retrieve the next page. If omitted, no subsequent pages exist. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_list_environment_group_attachments_response import GoogleCloudApigeeV1ListEnvironmentGroupAttachmentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ListEnvironmentGroupAttachmentsResponse from a JSON string
google_cloud_apigee_v1_list_environment_group_attachments_response_instance = GoogleCloudApigeeV1ListEnvironmentGroupAttachmentsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ListEnvironmentGroupAttachmentsResponse.to_json())

# convert the object into a dict
google_cloud_apigee_v1_list_environment_group_attachments_response_dict = google_cloud_apigee_v1_list_environment_group_attachments_response_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ListEnvironmentGroupAttachmentsResponse from a dict
google_cloud_apigee_v1_list_environment_group_attachments_response_from_dict = GoogleCloudApigeeV1ListEnvironmentGroupAttachmentsResponse.from_dict(google_cloud_apigee_v1_list_environment_group_attachments_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


