# GoogleCloudDialogflowV2Sentiment

The sentiment, such as positive/negative feeling or association, for a unit of analysis, such as the query text. See: https://cloud.google.com/natural-language/docs/basics#interpreting_sentiment_analysis_values for how to interpret the result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**magnitude** | **float** | A non-negative number in the [0, +inf) range, which represents the absolute magnitude of sentiment, regardless of score (positive or negative). | [optional] 
**score** | **float** | Sentiment score between -1.0 (negative sentiment) and 1.0 (positive sentiment). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_sentiment import GoogleCloudDialogflowV2Sentiment

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2Sentiment from a JSON string
google_cloud_dialogflow_v2_sentiment_instance = GoogleCloudDialogflowV2Sentiment.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2Sentiment.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_sentiment_dict = google_cloud_dialogflow_v2_sentiment_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2Sentiment from a dict
google_cloud_dialogflow_v2_sentiment_from_dict = GoogleCloudDialogflowV2Sentiment.from_dict(google_cloud_dialogflow_v2_sentiment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


