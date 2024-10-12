# GoogleCloudAiplatformV1beta1ModelGardenSource

Contains information about the source of the models generated from Model Garden.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**public_model_name** | **str** | Required. The model garden source model resource name. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_model_garden_source import GoogleCloudAiplatformV1beta1ModelGardenSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ModelGardenSource from a JSON string
google_cloud_aiplatform_v1beta1_model_garden_source_instance = GoogleCloudAiplatformV1beta1ModelGardenSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ModelGardenSource.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_model_garden_source_dict = google_cloud_aiplatform_v1beta1_model_garden_source_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ModelGardenSource from a dict
google_cloud_aiplatform_v1beta1_model_garden_source_from_dict = GoogleCloudAiplatformV1beta1ModelGardenSource.from_dict(google_cloud_aiplatform_v1beta1_model_garden_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


