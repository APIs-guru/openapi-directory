# GoogleCloudDialogflowV2SentimentAnalysisRequestConfig

Configures the types of sentiment analysis to perform.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analyze_query_text_sentiment** | **bool** | Instructs the service to perform sentiment analysis on &#x60;query_text&#x60;. If not provided, sentiment analysis is not performed on &#x60;query_text&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_sentiment_analysis_request_config import GoogleCloudDialogflowV2SentimentAnalysisRequestConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2SentimentAnalysisRequestConfig from a JSON string
google_cloud_dialogflow_v2_sentiment_analysis_request_config_instance = GoogleCloudDialogflowV2SentimentAnalysisRequestConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2SentimentAnalysisRequestConfig.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_sentiment_analysis_request_config_dict = google_cloud_dialogflow_v2_sentiment_analysis_request_config_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2SentimentAnalysisRequestConfig from a dict
google_cloud_dialogflow_v2_sentiment_analysis_request_config_from_dict = GoogleCloudDialogflowV2SentimentAnalysisRequestConfig.from_dict(google_cloud_dialogflow_v2_sentiment_analysis_request_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


