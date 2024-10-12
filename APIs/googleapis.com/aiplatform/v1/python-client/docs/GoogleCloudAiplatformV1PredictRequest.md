# GoogleCloudAiplatformV1PredictRequest

Request message for PredictionService.Predict.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instances** | **List[object]** | Required. The instances that are the input to the prediction call. A DeployedModel may have an upper limit on the number of instances it supports per request, and when it is exceeded the prediction call errors in case of AutoML Models, or, in case of customer created Models, the behaviour is as documented by that Model. The schema of any single instance may be specified via Endpoint&#39;s DeployedModels&#39; Model&#39;s PredictSchemata&#39;s instance_schema_uri. | [optional] 
**parameters** | **object** | The parameters that govern the prediction. The schema of the parameters may be specified via Endpoint&#39;s DeployedModels&#39; Model&#39;s PredictSchemata&#39;s parameters_schema_uri. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_predict_request import GoogleCloudAiplatformV1PredictRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1PredictRequest from a JSON string
google_cloud_aiplatform_v1_predict_request_instance = GoogleCloudAiplatformV1PredictRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1PredictRequest.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_predict_request_dict = google_cloud_aiplatform_v1_predict_request_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1PredictRequest from a dict
google_cloud_aiplatform_v1_predict_request_from_dict = GoogleCloudAiplatformV1PredictRequest.from_dict(google_cloud_aiplatform_v1_predict_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


