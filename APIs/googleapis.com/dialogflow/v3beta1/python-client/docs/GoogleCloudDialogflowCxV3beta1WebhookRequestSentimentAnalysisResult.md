# GoogleCloudDialogflowCxV3beta1WebhookRequestSentimentAnalysisResult

Represents the result of sentiment analysis.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**magnitude** | **float** | A non-negative number in the [0, +inf) range, which represents the absolute magnitude of sentiment, regardless of score (positive or negative). | [optional] 
**score** | **float** | Sentiment score between -1.0 (negative sentiment) and 1.0 (positive sentiment). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_webhook_request_sentiment_analysis_result import GoogleCloudDialogflowCxV3beta1WebhookRequestSentimentAnalysisResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1WebhookRequestSentimentAnalysisResult from a JSON string
google_cloud_dialogflow_cx_v3beta1_webhook_request_sentiment_analysis_result_instance = GoogleCloudDialogflowCxV3beta1WebhookRequestSentimentAnalysisResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1WebhookRequestSentimentAnalysisResult.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_webhook_request_sentiment_analysis_result_dict = google_cloud_dialogflow_cx_v3beta1_webhook_request_sentiment_analysis_result_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1WebhookRequestSentimentAnalysisResult from a dict
google_cloud_dialogflow_cx_v3beta1_webhook_request_sentiment_analysis_result_from_dict = GoogleCloudDialogflowCxV3beta1WebhookRequestSentimentAnalysisResult.from_dict(google_cloud_dialogflow_cx_v3beta1_webhook_request_sentiment_analysis_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


