# GoogleCloudAiplatformV1beta1ModelBaseModelSource

User input field to specify the base model source. Currently it only supports specifing the Model Garden models and Genie models.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**genie_source** | [**GoogleCloudAiplatformV1beta1GenieSource**](GoogleCloudAiplatformV1beta1GenieSource.md) |  | [optional] 
**model_garden_source** | [**GoogleCloudAiplatformV1beta1ModelGardenSource**](GoogleCloudAiplatformV1beta1ModelGardenSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_model_base_model_source import GoogleCloudAiplatformV1beta1ModelBaseModelSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ModelBaseModelSource from a JSON string
google_cloud_aiplatform_v1beta1_model_base_model_source_instance = GoogleCloudAiplatformV1beta1ModelBaseModelSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ModelBaseModelSource.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_model_base_model_source_dict = google_cloud_aiplatform_v1beta1_model_base_model_source_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ModelBaseModelSource from a dict
google_cloud_aiplatform_v1beta1_model_base_model_source_from_dict = GoogleCloudAiplatformV1beta1ModelBaseModelSource.from_dict(google_cloud_aiplatform_v1beta1_model_base_model_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


