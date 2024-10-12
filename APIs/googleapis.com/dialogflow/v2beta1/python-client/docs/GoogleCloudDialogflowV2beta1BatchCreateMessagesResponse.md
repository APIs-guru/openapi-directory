# GoogleCloudDialogflowV2beta1BatchCreateMessagesResponse

The request message for Conversations.BatchCreateMessagesResponse.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messages** | [**List[GoogleCloudDialogflowV2beta1Message]**](GoogleCloudDialogflowV2beta1Message.md) | Messages created. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_batch_create_messages_response import GoogleCloudDialogflowV2beta1BatchCreateMessagesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1BatchCreateMessagesResponse from a JSON string
google_cloud_dialogflow_v2beta1_batch_create_messages_response_instance = GoogleCloudDialogflowV2beta1BatchCreateMessagesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1BatchCreateMessagesResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_batch_create_messages_response_dict = google_cloud_dialogflow_v2beta1_batch_create_messages_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1BatchCreateMessagesResponse from a dict
google_cloud_dialogflow_v2beta1_batch_create_messages_response_from_dict = GoogleCloudDialogflowV2beta1BatchCreateMessagesResponse.from_dict(google_cloud_dialogflow_v2beta1_batch_create_messages_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


