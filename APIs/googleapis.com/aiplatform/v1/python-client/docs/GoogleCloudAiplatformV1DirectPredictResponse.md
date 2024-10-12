# GoogleCloudAiplatformV1DirectPredictResponse

Response message for PredictionService.DirectPredict.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**outputs** | [**List[GoogleCloudAiplatformV1Tensor]**](GoogleCloudAiplatformV1Tensor.md) | The prediction output. | [optional] 
**parameters** | [**GoogleCloudAiplatformV1Tensor**](GoogleCloudAiplatformV1Tensor.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_direct_predict_response import GoogleCloudAiplatformV1DirectPredictResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1DirectPredictResponse from a JSON string
google_cloud_aiplatform_v1_direct_predict_response_instance = GoogleCloudAiplatformV1DirectPredictResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1DirectPredictResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_direct_predict_response_dict = google_cloud_aiplatform_v1_direct_predict_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1DirectPredictResponse from a dict
google_cloud_aiplatform_v1_direct_predict_response_from_dict = GoogleCloudAiplatformV1DirectPredictResponse.from_dict(google_cloud_aiplatform_v1_direct_predict_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


