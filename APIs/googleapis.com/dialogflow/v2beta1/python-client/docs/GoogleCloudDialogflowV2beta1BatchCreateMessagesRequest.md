# GoogleCloudDialogflowV2beta1BatchCreateMessagesRequest

The request message for Conversations.BatchCreateMessagesRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[GoogleCloudDialogflowV2beta1CreateMessageRequest]**](GoogleCloudDialogflowV2beta1CreateMessageRequest.md) | Required. A maximum of 300 messages can be created in a batch. CreateMessageRequest.message.send_time is required. All created messages will have identical Message.create_time. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_batch_create_messages_request import GoogleCloudDialogflowV2beta1BatchCreateMessagesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1BatchCreateMessagesRequest from a JSON string
google_cloud_dialogflow_v2beta1_batch_create_messages_request_instance = GoogleCloudDialogflowV2beta1BatchCreateMessagesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1BatchCreateMessagesRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_batch_create_messages_request_dict = google_cloud_dialogflow_v2beta1_batch_create_messages_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1BatchCreateMessagesRequest from a dict
google_cloud_dialogflow_v2beta1_batch_create_messages_request_from_dict = GoogleCloudDialogflowV2beta1BatchCreateMessagesRequest.from_dict(google_cloud_dialogflow_v2beta1_batch_create_messages_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


