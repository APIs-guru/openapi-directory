# GoogleCloudAiplatformV1beta1UnmanagedContainerModel

Contains model information necessary to perform batch prediction without requiring a full model import.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifact_uri** | **str** | The path to the directory containing the Model artifact and any of its supporting files. | [optional] 
**container_spec** | [**GoogleCloudAiplatformV1beta1ModelContainerSpec**](GoogleCloudAiplatformV1beta1ModelContainerSpec.md) |  | [optional] 
**predict_schemata** | [**GoogleCloudAiplatformV1beta1PredictSchemata**](GoogleCloudAiplatformV1beta1PredictSchemata.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_unmanaged_container_model import GoogleCloudAiplatformV1beta1UnmanagedContainerModel

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1UnmanagedContainerModel from a JSON string
google_cloud_aiplatform_v1beta1_unmanaged_container_model_instance = GoogleCloudAiplatformV1beta1UnmanagedContainerModel.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1UnmanagedContainerModel.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_unmanaged_container_model_dict = google_cloud_aiplatform_v1beta1_unmanaged_container_model_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1UnmanagedContainerModel from a dict
google_cloud_aiplatform_v1beta1_unmanaged_container_model_from_dict = GoogleCloudAiplatformV1beta1UnmanagedContainerModel.from_dict(google_cloud_aiplatform_v1beta1_unmanaged_container_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


