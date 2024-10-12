# GoogleCloudContactcenterinsightsV1alpha1RuntimeAnnotation

An annotation that was generated during the customer and agent interaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_id** | **str** | The unique identifier of the annotation. Format: projects/{project}/locations/{location}/conversationDatasets/{dataset}/conversationDataItems/{data_item}/conversationAnnotations/{annotation} | [optional] 
**answer_feedback** | [**GoogleCloudContactcenterinsightsV1alpha1AnswerFeedback**](GoogleCloudContactcenterinsightsV1alpha1AnswerFeedback.md) |  | [optional] 
**article_suggestion** | [**GoogleCloudContactcenterinsightsV1alpha1ArticleSuggestionData**](GoogleCloudContactcenterinsightsV1alpha1ArticleSuggestionData.md) |  | [optional] 
**conversation_summarization_suggestion** | [**GoogleCloudContactcenterinsightsV1alpha1ConversationSummarizationSuggestionData**](GoogleCloudContactcenterinsightsV1alpha1ConversationSummarizationSuggestionData.md) |  | [optional] 
**create_time** | **str** | The time at which this annotation was created. | [optional] 
**dialogflow_interaction** | [**GoogleCloudContactcenterinsightsV1alpha1DialogflowInteractionData**](GoogleCloudContactcenterinsightsV1alpha1DialogflowInteractionData.md) |  | [optional] 
**end_boundary** | [**GoogleCloudContactcenterinsightsV1alpha1AnnotationBoundary**](GoogleCloudContactcenterinsightsV1alpha1AnnotationBoundary.md) |  | [optional] 
**faq_answer** | [**GoogleCloudContactcenterinsightsV1alpha1FaqAnswerData**](GoogleCloudContactcenterinsightsV1alpha1FaqAnswerData.md) |  | [optional] 
**smart_compose_suggestion** | [**GoogleCloudContactcenterinsightsV1alpha1SmartComposeSuggestionData**](GoogleCloudContactcenterinsightsV1alpha1SmartComposeSuggestionData.md) |  | [optional] 
**smart_reply** | [**GoogleCloudContactcenterinsightsV1alpha1SmartReplyData**](GoogleCloudContactcenterinsightsV1alpha1SmartReplyData.md) |  | [optional] 
**start_boundary** | [**GoogleCloudContactcenterinsightsV1alpha1AnnotationBoundary**](GoogleCloudContactcenterinsightsV1alpha1AnnotationBoundary.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1alpha1_runtime_annotation import GoogleCloudContactcenterinsightsV1alpha1RuntimeAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1alpha1RuntimeAnnotation from a JSON string
google_cloud_contactcenterinsights_v1alpha1_runtime_annotation_instance = GoogleCloudContactcenterinsightsV1alpha1RuntimeAnnotation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1alpha1RuntimeAnnotation.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1alpha1_runtime_annotation_dict = google_cloud_contactcenterinsights_v1alpha1_runtime_annotation_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1alpha1RuntimeAnnotation from a dict
google_cloud_contactcenterinsights_v1alpha1_runtime_annotation_from_dict = GoogleCloudContactcenterinsightsV1alpha1RuntimeAnnotation.from_dict(google_cloud_contactcenterinsights_v1alpha1_runtime_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


