# GoogleCloudDialogflowCxV3SentimentAnalysisResult

The result of sentiment analysis. Sentiment analysis inspects user input and identifies the prevailing subjective opinion, especially to determine a user's attitude as positive, negative, or neutral.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**magnitude** | **float** | A non-negative number in the [0, +inf) range, which represents the absolute magnitude of sentiment, regardless of score (positive or negative). | [optional] 
**score** | **float** | Sentiment score between -1.0 (negative sentiment) and 1.0 (positive sentiment). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_sentiment_analysis_result import GoogleCloudDialogflowCxV3SentimentAnalysisResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3SentimentAnalysisResult from a JSON string
google_cloud_dialogflow_cx_v3_sentiment_analysis_result_instance = GoogleCloudDialogflowCxV3SentimentAnalysisResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3SentimentAnalysisResult.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_sentiment_analysis_result_dict = google_cloud_dialogflow_cx_v3_sentiment_analysis_result_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3SentimentAnalysisResult from a dict
google_cloud_dialogflow_cx_v3_sentiment_analysis_result_from_dict = GoogleCloudDialogflowCxV3SentimentAnalysisResult.from_dict(google_cloud_dialogflow_cx_v3_sentiment_analysis_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


