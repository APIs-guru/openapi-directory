# GoogleCloudAiplatformV1DirectRawPredictRequest

Request message for PredictionService.DirectRawPredict.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input** | **bytearray** | The prediction input. | [optional] 
**method_name** | **str** | Fully qualified name of the API method being invoked to perform predictions. Format: &#x60;/namespace.Service/Method/&#x60; Example: &#x60;/tensorflow.serving.PredictionService/Predict&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_direct_raw_predict_request import GoogleCloudAiplatformV1DirectRawPredictRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1DirectRawPredictRequest from a JSON string
google_cloud_aiplatform_v1_direct_raw_predict_request_instance = GoogleCloudAiplatformV1DirectRawPredictRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1DirectRawPredictRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_direct_raw_predict_request_dict = google_cloud_aiplatform_v1_direct_raw_predict_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1DirectRawPredictRequest from a dict
google_cloud_aiplatform_v1_direct_raw_predict_request_from_dict = GoogleCloudAiplatformV1DirectRawPredictRequest.from_dict(google_cloud_aiplatform_v1_direct_raw_predict_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


