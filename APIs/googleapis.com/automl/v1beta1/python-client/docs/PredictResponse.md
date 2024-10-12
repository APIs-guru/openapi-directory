# PredictResponse

Response message for PredictionService.Predict.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | **Dict[str, str]** | Additional domain-specific prediction response metadata. * For Image Object Detection: &#x60;max_bounding_box_count&#x60; - (int64) At most that many bounding boxes per image could have been returned. * For Text Sentiment: &#x60;sentiment_score&#x60; - (float, deprecated) A value between -1 and 1, -1 maps to least positive sentiment, while 1 maps to the most positive one and the higher the score, the more positive the sentiment in the document is. Yet these values are relative to the training data, so e.g. if all data was positive then -1 will be also positive (though the least). The sentiment_score shouldn&#39;t be confused with \&quot;score\&quot; or \&quot;magnitude\&quot; from the previous Natural Language Sentiment Analysis API. | [optional] 
**payload** | [**List[AnnotationPayload]**](AnnotationPayload.md) | Prediction result. Translation and Text Sentiment will return precisely one payload. | [optional] 
**preprocessed_input** | [**ExamplePayload**](ExamplePayload.md) |  | [optional] 

## Example

```python
from openapi_client.models.predict_response import PredictResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PredictResponse from a JSON string
predict_response_instance = PredictResponse.from_json(json)
# print the JSON string representation of the object
print(PredictResponse.to_json())

# convert the object into a dict
predict_response_dict = predict_response_instance.to_dict()
# create an instance of PredictResponse from a dict
predict_response_from_dict = PredictResponse.from_dict(predict_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


