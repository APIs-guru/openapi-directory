# GoogleCloudRetailV2alphaPredictResponsePredictionResult

PredictionResult represents the recommendation prediction results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the recommended product | [optional] 
**metadata** | **Dict[str, object]** | Additional product metadata / annotations. Possible values: * &#x60;product&#x60;: JSON representation of the product. Is set if &#x60;returnProduct&#x60; is set to true in &#x60;PredictRequest.params&#x60;. * &#x60;score&#x60;: Prediction score in double value. Is set if &#x60;returnScore&#x60; is set to true in &#x60;PredictRequest.params&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_predict_response_prediction_result import GoogleCloudRetailV2alphaPredictResponsePredictionResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaPredictResponsePredictionResult from a JSON string
google_cloud_retail_v2alpha_predict_response_prediction_result_instance = GoogleCloudRetailV2alphaPredictResponsePredictionResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaPredictResponsePredictionResult.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_predict_response_prediction_result_dict = google_cloud_retail_v2alpha_predict_response_prediction_result_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaPredictResponsePredictionResult from a dict
google_cloud_retail_v2alpha_predict_response_prediction_result_from_dict = GoogleCloudRetailV2alphaPredictResponsePredictionResult.from_dict(google_cloud_retail_v2alpha_predict_response_prediction_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


