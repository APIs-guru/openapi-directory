# GoogleCloudDialogflowV2beta1SuggestionArticle

Represents suggested article.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answer_record** | **str** | Output only. The name of answer record, in the format of \&quot;projects//locations//answerRecords/\&quot; | [optional] 
**metadata** | **Dict[str, str]** | Output only. A map that contains metadata about the answer and the document from which it originates. | [optional] 
**snippets** | **List[str]** | Output only. Article snippets. | [optional] 
**title** | **str** | Output only. The article title. | [optional] 
**uri** | **str** | Output only. The article URI. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_suggestion_article import GoogleCloudDialogflowV2beta1SuggestionArticle

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1SuggestionArticle from a JSON string
google_cloud_dialogflow_v2beta1_suggestion_article_instance = GoogleCloudDialogflowV2beta1SuggestionArticle.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1SuggestionArticle.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_suggestion_article_dict = google_cloud_dialogflow_v2beta1_suggestion_article_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1SuggestionArticle from a dict
google_cloud_dialogflow_v2beta1_suggestion_article_from_dict = GoogleCloudDialogflowV2beta1SuggestionArticle.from_dict(google_cloud_dialogflow_v2beta1_suggestion_article_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


