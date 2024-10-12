# GoogleCloudContactcenterinsightsV1alpha1ArticleSuggestionData

Agent Assist Article Suggestion data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence_score** | **float** | The system&#39;s confidence score that this article is a good match for this conversation, ranging from 0.0 (completely uncertain) to 1.0 (completely certain). | [optional] 
**metadata** | **Dict[str, str]** | Map that contains metadata about the Article Suggestion and the document that it originates from. | [optional] 
**query_record** | **str** | The name of the answer record. Format: projects/{project}/locations/{location}/answerRecords/{answer_record} | [optional] 
**source** | **str** | The knowledge document that this answer was extracted from. Format: projects/{project}/knowledgeBases/{knowledge_base}/documents/{document} | [optional] 
**title** | **str** | Article title. | [optional] 
**uri** | **str** | Article URI. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1alpha1_article_suggestion_data import GoogleCloudContactcenterinsightsV1alpha1ArticleSuggestionData

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1alpha1ArticleSuggestionData from a JSON string
google_cloud_contactcenterinsights_v1alpha1_article_suggestion_data_instance = GoogleCloudContactcenterinsightsV1alpha1ArticleSuggestionData.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1alpha1ArticleSuggestionData.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1alpha1_article_suggestion_data_dict = google_cloud_contactcenterinsights_v1alpha1_article_suggestion_data_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1alpha1ArticleSuggestionData from a dict
google_cloud_contactcenterinsights_v1alpha1_article_suggestion_data_from_dict = GoogleCloudContactcenterinsightsV1alpha1ArticleSuggestionData.from_dict(google_cloud_contactcenterinsights_v1alpha1_article_suggestion_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


