# GoogleCloudAiplatformV1CopyModelResponse

Response message of ModelService.CopyModel operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model** | **str** | The name of the copied Model resource. Format: &#x60;projects/{project}/locations/{location}/models/{model}&#x60; | [optional] 
**model_version_id** | **str** | Output only. The version ID of the model that is copied. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_copy_model_response import GoogleCloudAiplatformV1CopyModelResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1CopyModelResponse from a JSON string
google_cloud_aiplatform_v1_copy_model_response_instance = GoogleCloudAiplatformV1CopyModelResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1CopyModelResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_copy_model_response_dict = google_cloud_aiplatform_v1_copy_model_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1CopyModelResponse from a dict
google_cloud_aiplatform_v1_copy_model_response_from_dict = GoogleCloudAiplatformV1CopyModelResponse.from_dict(google_cloud_aiplatform_v1_copy_model_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


