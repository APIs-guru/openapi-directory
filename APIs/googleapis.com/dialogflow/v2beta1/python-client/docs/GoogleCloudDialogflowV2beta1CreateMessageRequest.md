# GoogleCloudDialogflowV2beta1CreateMessageRequest

The request message to create one Message. Currently it is only used in BatchCreateMessagesRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | [**GoogleCloudDialogflowV2beta1Message**](GoogleCloudDialogflowV2beta1Message.md) |  | [optional] 
**parent** | **str** | Required. Resource identifier of the conversation to create message. Format: &#x60;projects//locations//conversations/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_create_message_request import GoogleCloudDialogflowV2beta1CreateMessageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1CreateMessageRequest from a JSON string
google_cloud_dialogflow_v2beta1_create_message_request_instance = GoogleCloudDialogflowV2beta1CreateMessageRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1CreateMessageRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_create_message_request_dict = google_cloud_dialogflow_v2beta1_create_message_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1CreateMessageRequest from a dict
google_cloud_dialogflow_v2beta1_create_message_request_from_dict = GoogleCloudDialogflowV2beta1CreateMessageRequest.from_dict(google_cloud_dialogflow_v2beta1_create_message_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


