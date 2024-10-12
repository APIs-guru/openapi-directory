# GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelectorSummarizationConfig

Configuration for summarization.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation_profile** | **str** | Resource name of the Dialogflow conversation profile. Format: projects/{project}/locations/{location}/conversationProfiles/{conversation_profile} | [optional] 
**summarization_model** | **str** | Default summarization model to be used. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1alpha1_annotator_selector_summarization_config import GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelectorSummarizationConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelectorSummarizationConfig from a JSON string
google_cloud_contactcenterinsights_v1alpha1_annotator_selector_summarization_config_instance = GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelectorSummarizationConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelectorSummarizationConfig.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1alpha1_annotator_selector_summarization_config_dict = google_cloud_contactcenterinsights_v1alpha1_annotator_selector_summarization_config_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelectorSummarizationConfig from a dict
google_cloud_contactcenterinsights_v1alpha1_annotator_selector_summarization_config_from_dict = GoogleCloudContactcenterinsightsV1alpha1AnnotatorSelectorSummarizationConfig.from_dict(google_cloud_contactcenterinsights_v1alpha1_annotator_selector_summarization_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


