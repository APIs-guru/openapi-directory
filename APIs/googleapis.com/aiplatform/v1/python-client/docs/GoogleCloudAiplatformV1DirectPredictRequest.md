# GoogleCloudAiplatformV1DirectPredictRequest

Request message for PredictionService.DirectPredict.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inputs** | [**List[GoogleCloudAiplatformV1Tensor]**](GoogleCloudAiplatformV1Tensor.md) | The prediction input. | [optional] 
**parameters** | [**GoogleCloudAiplatformV1Tensor**](GoogleCloudAiplatformV1Tensor.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_direct_predict_request import GoogleCloudAiplatformV1DirectPredictRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1DirectPredictRequest from a JSON string
google_cloud_aiplatform_v1_direct_predict_request_instance = GoogleCloudAiplatformV1DirectPredictRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1DirectPredictRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_direct_predict_request_dict = google_cloud_aiplatform_v1_direct_predict_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1DirectPredictRequest from a dict
google_cloud_aiplatform_v1_direct_predict_request_from_dict = GoogleCloudAiplatformV1DirectPredictRequest.from_dict(google_cloud_aiplatform_v1_direct_predict_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


