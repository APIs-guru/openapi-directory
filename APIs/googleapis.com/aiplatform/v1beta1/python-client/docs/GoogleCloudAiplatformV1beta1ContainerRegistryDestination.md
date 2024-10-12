# GoogleCloudAiplatformV1beta1ContainerRegistryDestination

The Container Registry location for the container image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output_uri** | **str** | Required. Container Registry URI of a container image. Only Google Container Registry and Artifact Registry are supported now. Accepted forms: * Google Container Registry path. For example: &#x60;gcr.io/projectId/imageName:tag&#x60;. * Artifact Registry path. For example: &#x60;us-central1-docker.pkg.dev/projectId/repoName/imageName:tag&#x60;. If a tag is not specified, \&quot;latest\&quot; will be used as the default tag. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_container_registry_destination import GoogleCloudAiplatformV1beta1ContainerRegistryDestination

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ContainerRegistryDestination from a JSON string
google_cloud_aiplatform_v1beta1_container_registry_destination_instance = GoogleCloudAiplatformV1beta1ContainerRegistryDestination.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ContainerRegistryDestination.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_container_registry_destination_dict = google_cloud_aiplatform_v1beta1_container_registry_destination_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ContainerRegistryDestination from a dict
google_cloud_aiplatform_v1beta1_container_registry_destination_from_dict = GoogleCloudAiplatformV1beta1ContainerRegistryDestination.from_dict(google_cloud_aiplatform_v1beta1_container_registry_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


