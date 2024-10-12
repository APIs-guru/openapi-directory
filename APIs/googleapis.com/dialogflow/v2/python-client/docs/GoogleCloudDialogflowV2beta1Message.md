# GoogleCloudDialogflowV2beta1Message

Represents a message posted into a conversation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | Required. The message content. | [optional] 
**create_time** | **str** | Output only. The time when the message was created in Contact Center AI. | [optional] [readonly] 
**language_code** | **str** | Optional. The message language. This should be a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: \&quot;en-US\&quot;. | [optional] 
**message_annotation** | [**GoogleCloudDialogflowV2beta1MessageAnnotation**](GoogleCloudDialogflowV2beta1MessageAnnotation.md) |  | [optional] 
**name** | **str** | Optional. The unique identifier of the message. Format: &#x60;projects//locations//conversations//messages/&#x60;. | [optional] 
**participant** | **str** | Output only. The participant that sends this message. | [optional] [readonly] 
**participant_role** | **str** | Output only. The role of the participant. | [optional] [readonly] 
**send_time** | **str** | Optional. The time when the message was sent. | [optional] 
**sentiment_analysis** | [**GoogleCloudDialogflowV2beta1SentimentAnalysisResult**](GoogleCloudDialogflowV2beta1SentimentAnalysisResult.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_message import GoogleCloudDialogflowV2beta1Message

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1Message from a JSON string
google_cloud_dialogflow_v2beta1_message_instance = GoogleCloudDialogflowV2beta1Message.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1Message.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_message_dict = google_cloud_dialogflow_v2beta1_message_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1Message from a dict
google_cloud_dialogflow_v2beta1_message_from_dict = GoogleCloudDialogflowV2beta1Message.from_dict(google_cloud_dialogflow_v2beta1_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


