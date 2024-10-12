# GoogleCloudAiplatformV1beta1StreamingPredictRequest

Request message for PredictionService.StreamingPredict. The first message must contain endpoint field and optionally input. The subsequent messages must contain input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inputs** | [**List[GoogleCloudAiplatformV1beta1Tensor]**](GoogleCloudAiplatformV1beta1Tensor.md) | The prediction input. | [optional] 
**parameters** | [**GoogleCloudAiplatformV1beta1Tensor**](GoogleCloudAiplatformV1beta1Tensor.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_streaming_predict_request import GoogleCloudAiplatformV1beta1StreamingPredictRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1StreamingPredictRequest from a JSON string
google_cloud_aiplatform_v1beta1_streaming_predict_request_instance = GoogleCloudAiplatformV1beta1StreamingPredictRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1StreamingPredictRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_streaming_predict_request_dict = google_cloud_aiplatform_v1beta1_streaming_predict_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1StreamingPredictRequest from a dict
google_cloud_aiplatform_v1beta1_streaming_predict_request_from_dict = GoogleCloudAiplatformV1beta1StreamingPredictRequest.from_dict(google_cloud_aiplatform_v1beta1_streaming_predict_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


