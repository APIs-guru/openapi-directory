# GoogleCloudDialogflowCxV3WebhookRequestSentimentAnalysisResult

Represents the result of sentiment analysis.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**magnitude** | **float** | A non-negative number in the [0, +inf) range, which represents the absolute magnitude of sentiment, regardless of score (positive or negative). | [optional] 
**score** | **float** | Sentiment score between -1.0 (negative sentiment) and 1.0 (positive sentiment). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_webhook_request_sentiment_analysis_result import GoogleCloudDialogflowCxV3WebhookRequestSentimentAnalysisResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3WebhookRequestSentimentAnalysisResult from a JSON string
google_cloud_dialogflow_cx_v3_webhook_request_sentiment_analysis_result_instance = GoogleCloudDialogflowCxV3WebhookRequestSentimentAnalysisResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3WebhookRequestSentimentAnalysisResult.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_webhook_request_sentiment_analysis_result_dict = google_cloud_dialogflow_cx_v3_webhook_request_sentiment_analysis_result_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3WebhookRequestSentimentAnalysisResult from a dict
google_cloud_dialogflow_cx_v3_webhook_request_sentiment_analysis_result_from_dict = GoogleCloudDialogflowCxV3WebhookRequestSentimentAnalysisResult.from_dict(google_cloud_dialogflow_cx_v3_webhook_request_sentiment_analysis_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


