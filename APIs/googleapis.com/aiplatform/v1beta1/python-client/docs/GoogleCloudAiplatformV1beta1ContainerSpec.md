# GoogleCloudAiplatformV1beta1ContainerSpec

The spec of a Container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**args** | **List[str]** | The arguments to be passed when starting the container. | [optional] 
**command** | **List[str]** | The command to be invoked when the container is started. It overrides the entrypoint instruction in Dockerfile when provided. | [optional] 
**env** | [**List[GoogleCloudAiplatformV1beta1EnvVar]**](GoogleCloudAiplatformV1beta1EnvVar.md) | Environment variables to be passed to the container. Maximum limit is 100. | [optional] 
**image_uri** | **str** | Required. The URI of a container image in the Container Registry that is to be run on each worker replica. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_container_spec import GoogleCloudAiplatformV1beta1ContainerSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ContainerSpec from a JSON string
google_cloud_aiplatform_v1beta1_container_spec_instance = GoogleCloudAiplatformV1beta1ContainerSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ContainerSpec.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_container_spec_dict = google_cloud_aiplatform_v1beta1_container_spec_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ContainerSpec from a dict
google_cloud_aiplatform_v1beta1_container_spec_from_dict = GoogleCloudAiplatformV1beta1ContainerSpec.from_dict(google_cloud_aiplatform_v1beta1_container_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


