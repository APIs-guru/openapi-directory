# GoogleCloudDialogflowV2beta1SuggestArticlesResponse

The response message for Participants.SuggestArticles.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**article_answers** | [**List[GoogleCloudDialogflowV2beta1ArticleAnswer]**](GoogleCloudDialogflowV2beta1ArticleAnswer.md) | Output only. Articles ordered by score in descending order. | [optional] 
**context_size** | **int** | Number of messages prior to and including latest_message to compile the suggestion. It may be smaller than the SuggestArticlesResponse.context_size field in the request if there aren&#39;t that many messages in the conversation. | [optional] 
**latest_message** | **str** | The name of the latest conversation message used to compile suggestion for. Format: &#x60;projects//locations//conversations//messages/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_suggest_articles_response import GoogleCloudDialogflowV2beta1SuggestArticlesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1SuggestArticlesResponse from a JSON string
google_cloud_dialogflow_v2beta1_suggest_articles_response_instance = GoogleCloudDialogflowV2beta1SuggestArticlesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1SuggestArticlesResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_suggest_articles_response_dict = google_cloud_dialogflow_v2beta1_suggest_articles_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1SuggestArticlesResponse from a dict
google_cloud_dialogflow_v2beta1_suggest_articles_response_from_dict = GoogleCloudDialogflowV2beta1SuggestArticlesResponse.from_dict(google_cloud_dialogflow_v2beta1_suggest_articles_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


