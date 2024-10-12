# GoogleCloudAiplatformV1ListModelsResponse

Response message for ModelService.ListModels

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**models** | [**List[GoogleCloudAiplatformV1Model]**](GoogleCloudAiplatformV1Model.md) | List of Models in the requested page. | [optional] 
**next_page_token** | **str** | A token to retrieve next page of results. Pass to ListModelsRequest.page_token to obtain that page. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_list_models_response import GoogleCloudAiplatformV1ListModelsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ListModelsResponse from a JSON string
google_cloud_aiplatform_v1_list_models_response_instance = GoogleCloudAiplatformV1ListModelsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ListModelsResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_list_models_response_dict = google_cloud_aiplatform_v1_list_models_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ListModelsResponse from a dict
google_cloud_aiplatform_v1_list_models_response_from_dict = GoogleCloudAiplatformV1ListModelsResponse.from_dict(google_cloud_aiplatform_v1_list_models_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


