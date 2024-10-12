# GoogleCloudContactcenterinsightsV1alpha1CallAnnotation

A piece of metadata that applies to a window of a call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_end_boundary** | [**GoogleCloudContactcenterinsightsV1alpha1AnnotationBoundary**](GoogleCloudContactcenterinsightsV1alpha1AnnotationBoundary.md) |  | [optional] 
**annotation_start_boundary** | [**GoogleCloudContactcenterinsightsV1alpha1AnnotationBoundary**](GoogleCloudContactcenterinsightsV1alpha1AnnotationBoundary.md) |  | [optional] 
**channel_tag** | **int** | The channel of the audio where the annotation occurs. For single-channel audio, this field is not populated. | [optional] 
**entity_mention_data** | [**GoogleCloudContactcenterinsightsV1alpha1EntityMentionData**](GoogleCloudContactcenterinsightsV1alpha1EntityMentionData.md) |  | [optional] 
**hold_data** | **object** | The data for a hold annotation. | [optional] 
**intent_match_data** | [**GoogleCloudContactcenterinsightsV1alpha1IntentMatchData**](GoogleCloudContactcenterinsightsV1alpha1IntentMatchData.md) |  | [optional] 
**interruption_data** | **object** | The data for an interruption annotation. | [optional] 
**issue_match_data** | [**GoogleCloudContactcenterinsightsV1alpha1IssueMatchData**](GoogleCloudContactcenterinsightsV1alpha1IssueMatchData.md) |  | [optional] 
**phrase_match_data** | [**GoogleCloudContactcenterinsightsV1alpha1PhraseMatchData**](GoogleCloudContactcenterinsightsV1alpha1PhraseMatchData.md) |  | [optional] 
**sentiment_data** | [**GoogleCloudContactcenterinsightsV1alpha1SentimentData**](GoogleCloudContactcenterinsightsV1alpha1SentimentData.md) |  | [optional] 
**silence_data** | **object** | The data for a silence annotation. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1alpha1_call_annotation import GoogleCloudContactcenterinsightsV1alpha1CallAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1alpha1CallAnnotation from a JSON string
google_cloud_contactcenterinsights_v1alpha1_call_annotation_instance = GoogleCloudContactcenterinsightsV1alpha1CallAnnotation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1alpha1CallAnnotation.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1alpha1_call_annotation_dict = google_cloud_contactcenterinsights_v1alpha1_call_annotation_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1alpha1CallAnnotation from a dict
google_cloud_contactcenterinsights_v1alpha1_call_annotation_from_dict = GoogleCloudContactcenterinsightsV1alpha1CallAnnotation.from_dict(google_cloud_contactcenterinsights_v1alpha1_call_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


