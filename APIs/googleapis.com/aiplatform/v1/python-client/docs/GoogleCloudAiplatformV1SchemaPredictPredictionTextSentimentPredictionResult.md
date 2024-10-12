# GoogleCloudAiplatformV1SchemaPredictPredictionTextSentimentPredictionResult

Prediction output format for Text Sentiment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sentiment** | **int** | The integer sentiment labels between 0 (inclusive) and sentimentMax label (inclusive), while 0 maps to the least positive sentiment and sentimentMax maps to the most positive one. The higher the score is, the more positive the sentiment in the text snippet is. Note: sentimentMax is an integer value between 1 (inclusive) and 10 (inclusive). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_predict_prediction_text_sentiment_prediction_result import GoogleCloudAiplatformV1SchemaPredictPredictionTextSentimentPredictionResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaPredictPredictionTextSentimentPredictionResult from a JSON string
google_cloud_aiplatform_v1_schema_predict_prediction_text_sentiment_prediction_result_instance = GoogleCloudAiplatformV1SchemaPredictPredictionTextSentimentPredictionResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaPredictPredictionTextSentimentPredictionResult.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_predict_prediction_text_sentiment_prediction_result_dict = google_cloud_aiplatform_v1_schema_predict_prediction_text_sentiment_prediction_result_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaPredictPredictionTextSentimentPredictionResult from a dict
google_cloud_aiplatform_v1_schema_predict_prediction_text_sentiment_prediction_result_from_dict = GoogleCloudAiplatformV1SchemaPredictPredictionTextSentimentPredictionResult.from_dict(google_cloud_aiplatform_v1_schema_predict_prediction_text_sentiment_prediction_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


