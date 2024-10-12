# GoogleCloudAiplatformV1beta1ListPublisherModelsResponse

Response message for ModelGardenService.ListPublisherModels.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to retrieve next page of results. Pass to ListPublisherModels.page_token to obtain that page. | [optional] 
**publisher_models** | [**List[GoogleCloudAiplatformV1beta1PublisherModel]**](GoogleCloudAiplatformV1beta1PublisherModel.md) | List of PublisherModels in the requested page. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_list_publisher_models_response import GoogleCloudAiplatformV1beta1ListPublisherModelsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ListPublisherModelsResponse from a JSON string
google_cloud_aiplatform_v1beta1_list_publisher_models_response_instance = GoogleCloudAiplatformV1beta1ListPublisherModelsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ListPublisherModelsResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_list_publisher_models_response_dict = google_cloud_aiplatform_v1beta1_list_publisher_models_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ListPublisherModelsResponse from a dict
google_cloud_aiplatform_v1beta1_list_publisher_models_response_from_dict = GoogleCloudAiplatformV1beta1ListPublisherModelsResponse.from_dict(google_cloud_aiplatform_v1beta1_list_publisher_models_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


