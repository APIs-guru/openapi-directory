# GoogleCloudDialogflowV2beta1SentimentAnalysisResult

The result of sentiment analysis. Sentiment analysis inspects user input and identifies the prevailing subjective opinion, especially to determine a user's attitude as positive, negative, or neutral. For Participants.DetectIntent, it needs to be configured in DetectIntentRequest.query_params. For Participants.StreamingDetectIntent, it needs to be configured in StreamingDetectIntentRequest.query_params. And for Participants.AnalyzeContent and Participants.StreamingAnalyzeContent, it needs to be configured in ConversationProfile.human_agent_assistant_config

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query_text_sentiment** | [**GoogleCloudDialogflowV2beta1Sentiment**](GoogleCloudDialogflowV2beta1Sentiment.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_sentiment_analysis_result import GoogleCloudDialogflowV2beta1SentimentAnalysisResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1SentimentAnalysisResult from a JSON string
google_cloud_dialogflow_v2beta1_sentiment_analysis_result_instance = GoogleCloudDialogflowV2beta1SentimentAnalysisResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1SentimentAnalysisResult.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_sentiment_analysis_result_dict = google_cloud_dialogflow_v2beta1_sentiment_analysis_result_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1SentimentAnalysisResult from a dict
google_cloud_dialogflow_v2beta1_sentiment_analysis_result_from_dict = GoogleCloudDialogflowV2beta1SentimentAnalysisResult.from_dict(google_cloud_dialogflow_v2beta1_sentiment_analysis_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


