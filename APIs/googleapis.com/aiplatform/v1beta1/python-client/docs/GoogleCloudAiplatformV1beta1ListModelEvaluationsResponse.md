# GoogleCloudAiplatformV1beta1ListModelEvaluationsResponse

Response message for ModelService.ListModelEvaluations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model_evaluations** | [**List[GoogleCloudAiplatformV1beta1ModelEvaluation]**](GoogleCloudAiplatformV1beta1ModelEvaluation.md) | List of ModelEvaluations in the requested page. | [optional] 
**next_page_token** | **str** | A token to retrieve next page of results. Pass to ListModelEvaluationsRequest.page_token to obtain that page. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_list_model_evaluations_response import GoogleCloudAiplatformV1beta1ListModelEvaluationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ListModelEvaluationsResponse from a JSON string
google_cloud_aiplatform_v1beta1_list_model_evaluations_response_instance = GoogleCloudAiplatformV1beta1ListModelEvaluationsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ListModelEvaluationsResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_list_model_evaluations_response_dict = google_cloud_aiplatform_v1beta1_list_model_evaluations_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ListModelEvaluationsResponse from a dict
google_cloud_aiplatform_v1beta1_list_model_evaluations_response_from_dict = GoogleCloudAiplatformV1beta1ListModelEvaluationsResponse.from_dict(google_cloud_aiplatform_v1beta1_list_model_evaluations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


