# GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult

PredictionResult represents the recommendation prediction results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the recommended catalog item | [optional] 
**item_metadata** | **Dict[str, object]** | Additional item metadata / annotations. Possible values: * &#x60;catalogItem&#x60;: JSON representation of the catalogItem. Will be set if &#x60;returnCatalogItem&#x60; is set to true in &#x60;PredictRequest.params&#x60;. * &#x60;score&#x60;: Prediction score in double value. Will be set if &#x60;returnItemScore&#x60; is set to true in &#x60;PredictRequest.params&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_recommendationengine_v1beta1_predict_response_prediction_result import GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult from a JSON string
google_cloud_recommendationengine_v1beta1_predict_response_prediction_result_instance = GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult.to_json())

# convert the object into a dict
google_cloud_recommendationengine_v1beta1_predict_response_prediction_result_dict = google_cloud_recommendationengine_v1beta1_predict_response_prediction_result_instance.to_dict()
# create an instance of GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult from a dict
google_cloud_recommendationengine_v1beta1_predict_response_prediction_result_from_dict = GoogleCloudRecommendationengineV1beta1PredictResponsePredictionResult.from_dict(google_cloud_recommendationengine_v1beta1_predict_response_prediction_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


