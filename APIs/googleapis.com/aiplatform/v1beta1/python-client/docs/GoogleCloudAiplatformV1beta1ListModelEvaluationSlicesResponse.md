# GoogleCloudAiplatformV1beta1ListModelEvaluationSlicesResponse

Response message for ModelService.ListModelEvaluationSlices.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model_evaluation_slices** | [**List[GoogleCloudAiplatformV1beta1ModelEvaluationSlice]**](GoogleCloudAiplatformV1beta1ModelEvaluationSlice.md) | List of ModelEvaluations in the requested page. | [optional] 
**next_page_token** | **str** | A token to retrieve next page of results. Pass to ListModelEvaluationSlicesRequest.page_token to obtain that page. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_list_model_evaluation_slices_response import GoogleCloudAiplatformV1beta1ListModelEvaluationSlicesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ListModelEvaluationSlicesResponse from a JSON string
google_cloud_aiplatform_v1beta1_list_model_evaluation_slices_response_instance = GoogleCloudAiplatformV1beta1ListModelEvaluationSlicesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ListModelEvaluationSlicesResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_list_model_evaluation_slices_response_dict = google_cloud_aiplatform_v1beta1_list_model_evaluation_slices_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ListModelEvaluationSlicesResponse from a dict
google_cloud_aiplatform_v1beta1_list_model_evaluation_slices_response_from_dict = GoogleCloudAiplatformV1beta1ListModelEvaluationSlicesResponse.from_dict(google_cloud_aiplatform_v1beta1_list_model_evaluation_slices_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


