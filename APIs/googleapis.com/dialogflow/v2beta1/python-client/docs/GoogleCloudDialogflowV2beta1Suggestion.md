# GoogleCloudDialogflowV2beta1Suggestion

Represents a suggestion for a human agent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**articles** | [**List[GoogleCloudDialogflowV2beta1SuggestionArticle]**](GoogleCloudDialogflowV2beta1SuggestionArticle.md) | Output only. Articles ordered by score in descending order. | [optional] 
**create_time** | **str** | Output only. The time the suggestion was created. | [optional] 
**faq_answers** | [**List[GoogleCloudDialogflowV2beta1SuggestionFaqAnswer]**](GoogleCloudDialogflowV2beta1SuggestionFaqAnswer.md) | Output only. Answers extracted from FAQ documents. | [optional] 
**latest_message** | **str** | Output only. Latest message used as context to compile this suggestion. Format: &#x60;projects//locations//conversations//messages/&#x60;. | [optional] 
**name** | **str** | Output only. The name of this suggestion. Format: &#x60;projects//locations//conversations//participants/*/suggestions/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_suggestion import GoogleCloudDialogflowV2beta1Suggestion

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1Suggestion from a JSON string
google_cloud_dialogflow_v2beta1_suggestion_instance = GoogleCloudDialogflowV2beta1Suggestion.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1Suggestion.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_suggestion_dict = google_cloud_dialogflow_v2beta1_suggestion_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1Suggestion from a dict
google_cloud_dialogflow_v2beta1_suggestion_from_dict = GoogleCloudDialogflowV2beta1Suggestion.from_dict(google_cloud_dialogflow_v2beta1_suggestion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


