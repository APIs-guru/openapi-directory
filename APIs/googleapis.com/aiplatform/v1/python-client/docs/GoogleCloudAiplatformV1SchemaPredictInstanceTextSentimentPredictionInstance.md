# GoogleCloudAiplatformV1SchemaPredictInstanceTextSentimentPredictionInstance

Prediction input format for Text Sentiment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | The text snippet to make the predictions on. | [optional] 
**mime_type** | **str** | The MIME type of the text snippet. The supported MIME types are listed below. - text/plain | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_schema_predict_instance_text_sentiment_prediction_instance import GoogleCloudAiplatformV1SchemaPredictInstanceTextSentimentPredictionInstance

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1SchemaPredictInstanceTextSentimentPredictionInstance from a JSON string
google_cloud_aiplatform_v1_schema_predict_instance_text_sentiment_prediction_instance_instance = GoogleCloudAiplatformV1SchemaPredictInstanceTextSentimentPredictionInstance.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1SchemaPredictInstanceTextSentimentPredictionInstance.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_schema_predict_instance_text_sentiment_prediction_instance_dict = google_cloud_aiplatform_v1_schema_predict_instance_text_sentiment_prediction_instance_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1SchemaPredictInstanceTextSentimentPredictionInstance from a dict
google_cloud_aiplatform_v1_schema_predict_instance_text_sentiment_prediction_instance_from_dict = GoogleCloudAiplatformV1SchemaPredictInstanceTextSentimentPredictionInstance.from_dict(google_cloud_aiplatform_v1_schema_predict_instance_text_sentiment_prediction_instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


