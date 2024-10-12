# GoogleCloudEssentialcontactsV1SendTestMessageRequest

Request message for the SendTestMessage method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contacts** | **List[str]** | Required. The list of names of the contacts to send a test message to. Format: organizations/{organization_id}/contacts/{contact_id}, folders/{folder_id}/contacts/{contact_id} or projects/{project_id}/contacts/{contact_id} | [optional] 
**notification_category** | **str** | Required. The notification category to send the test message for. All contacts must be subscribed to this category. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_essentialcontacts_v1_send_test_message_request import GoogleCloudEssentialcontactsV1SendTestMessageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudEssentialcontactsV1SendTestMessageRequest from a JSON string
google_cloud_essentialcontacts_v1_send_test_message_request_instance = GoogleCloudEssentialcontactsV1SendTestMessageRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudEssentialcontactsV1SendTestMessageRequest.to_json())

# convert the object into a dict
google_cloud_essentialcontacts_v1_send_test_message_request_dict = google_cloud_essentialcontacts_v1_send_test_message_request_instance.to_dict()
# create an instance of GoogleCloudEssentialcontactsV1SendTestMessageRequest from a dict
google_cloud_essentialcontacts_v1_send_test_message_request_from_dict = GoogleCloudEssentialcontactsV1SendTestMessageRequest.from_dict(google_cloud_essentialcontacts_v1_send_test_message_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


