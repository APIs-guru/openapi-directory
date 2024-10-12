# GoogleCloudAiplatformV1beta1ExplainResponse

Response message for PredictionService.Explain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**concurrent_explanations** | [**Dict[str, GoogleCloudAiplatformV1beta1ExplainResponseConcurrentExplanation]**](GoogleCloudAiplatformV1beta1ExplainResponseConcurrentExplanation.md) | This field stores the results of the explanations run in parallel with The default explanation strategy/method. | [optional] 
**deployed_model_id** | **str** | ID of the Endpoint&#39;s DeployedModel that served this explanation. | [optional] 
**explanations** | [**List[GoogleCloudAiplatformV1beta1Explanation]**](GoogleCloudAiplatformV1beta1Explanation.md) | The explanations of the Model&#39;s PredictResponse.predictions. It has the same number of elements as instances to be explained. | [optional] 
**predictions** | **List[object]** | The predictions that are the output of the predictions call. Same as PredictResponse.predictions. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_explain_response import GoogleCloudAiplatformV1beta1ExplainResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ExplainResponse from a JSON string
google_cloud_aiplatform_v1beta1_explain_response_instance = GoogleCloudAiplatformV1beta1ExplainResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ExplainResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_explain_response_dict = google_cloud_aiplatform_v1beta1_explain_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ExplainResponse from a dict
google_cloud_aiplatform_v1beta1_explain_response_from_dict = GoogleCloudAiplatformV1beta1ExplainResponse.from_dict(google_cloud_aiplatform_v1beta1_explain_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


