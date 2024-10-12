# GoogleCloudDialogflowV2beta1MessageAnnotation

Represents the result of annotation for the message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contain_entities** | **bool** | Required. Indicates whether the text message contains entities. | [optional] 
**parts** | [**List[GoogleCloudDialogflowV2beta1AnnotatedMessagePart]**](GoogleCloudDialogflowV2beta1AnnotatedMessagePart.md) | Optional. The collection of annotated message parts ordered by their position in the message. You can recover the annotated message by concatenating [AnnotatedMessagePart.text]. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_message_annotation import GoogleCloudDialogflowV2beta1MessageAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1MessageAnnotation from a JSON string
google_cloud_dialogflow_v2beta1_message_annotation_instance = GoogleCloudDialogflowV2beta1MessageAnnotation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1MessageAnnotation.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_message_annotation_dict = google_cloud_dialogflow_v2beta1_message_annotation_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1MessageAnnotation from a dict
google_cloud_dialogflow_v2beta1_message_annotation_from_dict = GoogleCloudDialogflowV2beta1MessageAnnotation.from_dict(google_cloud_dialogflow_v2beta1_message_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


