# GoogleCloudAiplatformV1beta1PredictResponse

Response message for PredictionService.Predict.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployed_model_id** | **str** | ID of the Endpoint&#39;s DeployedModel that served this prediction. | [optional] 
**metadata** | **object** | Output only. Request-level metadata returned by the model. The metadata type will be dependent upon the model implementation. | [optional] [readonly] 
**model** | **str** | Output only. The resource name of the Model which is deployed as the DeployedModel that this prediction hits. | [optional] [readonly] 
**model_display_name** | **str** | Output only. The display name of the Model which is deployed as the DeployedModel that this prediction hits. | [optional] [readonly] 
**model_version_id** | **str** | Output only. The version ID of the Model which is deployed as the DeployedModel that this prediction hits. | [optional] [readonly] 
**predictions** | **List[object]** | The predictions that are the output of the predictions call. The schema of any single prediction may be specified via Endpoint&#39;s DeployedModels&#39; Model&#39;s PredictSchemata&#39;s prediction_schema_uri. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_predict_response import GoogleCloudAiplatformV1beta1PredictResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1PredictResponse from a JSON string
google_cloud_aiplatform_v1beta1_predict_response_instance = GoogleCloudAiplatformV1beta1PredictResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1PredictResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_predict_response_dict = google_cloud_aiplatform_v1beta1_predict_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1PredictResponse from a dict
google_cloud_aiplatform_v1beta1_predict_response_from_dict = GoogleCloudAiplatformV1beta1PredictResponse.from_dict(google_cloud_aiplatform_v1beta1_predict_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


