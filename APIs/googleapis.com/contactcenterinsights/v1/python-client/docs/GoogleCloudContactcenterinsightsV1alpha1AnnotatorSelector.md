# GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelector

Selector of all available annotators and phrase matchers to run.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issue_models** | **List[str]** | The issue model to run. If not provided, the most recently deployed topic model will be used. The provided issue model will only be used for inference if the issue model is deployed and if run_issue_model_annotator is set to true. If more than one issue model is provided, only the first provided issue model will be used for inference. | [optional] 
**phrase_matchers** | **List[str]** | The list of phrase matchers to run. If not provided, all active phrase matchers will be used. If inactive phrase matchers are provided, they will not be used. Phrase matchers will be run only if run_phrase_matcher_annotator is set to true. Format: projects/{project}/locations/{location}/phraseMatchers/{phrase_matcher} | [optional] 
**run_entity_annotator** | **bool** | Whether to run the entity annotator. | [optional] 
**run_intent_annotator** | **bool** | Whether to run the intent annotator. | [optional] 
**run_interruption_annotator** | **bool** | Whether to run the interruption annotator. | [optional] 
**run_issue_model_annotator** | **bool** | Whether to run the issue model annotator. A model should have already been deployed for this to take effect. | [optional] 
**run_phrase_matcher_annotator** | **bool** | Whether to run the active phrase matcher annotator(s). | [optional] 
**run_sentiment_annotator** | **bool** | Whether to run the sentiment annotator. | [optional] 
**run_silence_annotator** | **bool** | Whether to run the silence annotator. | [optional] 
**run_summarization_annotator** | **bool** | Whether to run the summarization annotator. | [optional] 
**summarization_config** | [**GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelectorSummarizationConfig**](GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelectorSummarizationConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1alpha1_annotator_selector import GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelector

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelector from a JSON string
google_cloud_contactcenterinsights_v1alpha1_annotator_selector_instance = GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelector.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelector.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1alpha1_annotator_selector_dict = google_cloud_contactcenterinsights_v1alpha1_annotator_selector_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelector from a dict
google_cloud_contactcenterinsights_v1alpha1_annotator_selector_from_dict = GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelector.from_dict(google_cloud_contactcenterinsights_v1alpha1_annotator_selector_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


