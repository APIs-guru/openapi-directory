# GoogleCloudContactcenterinsightsV1alpha1AnalysisResultCallAnalysisMetadata

Call-specific metadata created during analysis.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | [**List[GoogleCloudContactcenterinsightsV1alpha1CallAnnotation]**](GoogleCloudContactcenterinsightsV1alpha1CallAnnotation.md) | A list of call annotations that apply to this call. | [optional] 
**entities** | [**Dict[str, GoogleCloudContactcenterinsightsV1alpha1Entity]**](GoogleCloudContactcenterinsightsV1alpha1Entity.md) | All the entities in the call. | [optional] 
**intents** | [**Dict[str, GoogleCloudContactcenterinsightsV1alpha1Intent]**](GoogleCloudContactcenterinsightsV1alpha1Intent.md) | All the matched intents in the call. | [optional] 
**issue_model_result** | [**GoogleCloudContactcenterinsightsV1alpha1IssueModelResult**](GoogleCloudContactcenterinsightsV1alpha1IssueModelResult.md) |  | [optional] 
**phrase_matchers** | [**Dict[str, GoogleCloudContactcenterinsightsV1alpha1PhraseMatchData]**](GoogleCloudContactcenterinsightsV1alpha1PhraseMatchData.md) | All the matched phrase matchers in the call. | [optional] 
**sentiments** | [**List[GoogleCloudContactcenterinsightsV1alpha1ConversationLevelSentiment]**](GoogleCloudContactcenterinsightsV1alpha1ConversationLevelSentiment.md) | Overall conversation-level sentiment for each channel of the call. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1alpha1_analysis_result_call_analysis_metadata import GoogleCloudContactcenterinsightsV1alpha1AnalysisResultCallAnalysisMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1alpha1AnalysisResultCallAnalysisMetadata from a JSON string
google_cloud_contactcenterinsights_v1alpha1_analysis_result_call_analysis_metadata_instance = GoogleCloudContactcenterinsightsV1alpha1AnalysisResultCallAnalysisMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1alpha1AnalysisResultCallAnalysisMetadata.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1alpha1_analysis_result_call_analysis_metadata_dict = google_cloud_contactcenterinsights_v1alpha1_analysis_result_call_analysis_metadata_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1alpha1AnalysisResultCallAnalysisMetadata from a dict
google_cloud_contactcenterinsights_v1alpha1_analysis_result_call_analysis_metadata_from_dict = GoogleCloudContactcenterinsightsV1alpha1AnalysisResultCallAnalysisMetadata.from_dict(google_cloud_contactcenterinsights_v1alpha1_analysis_result_call_analysis_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


