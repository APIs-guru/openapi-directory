# GoogleCloudAiplatformV1beta1RaySpec

Configuration information for the Ray cluster. For experimental launch, Ray cluster creation and Persistent cluster creation are 1:1 mapping: We will provision all the nodes within the Persistent cluster as Ray nodes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**head_node_resource_pool_id** | **str** | Optional. This will be used to indicate which resource pool will serve as the Ray head node(the first node within that pool). Will use the machine from the first workerpool as the head node by default if this field isn&#39;t set. | [optional] 
**image_uri** | **str** | Optional. Default image for user to choose a preferred ML framework (for example, TensorFlow or Pytorch) by choosing from [Vertex prebuilt images](https://cloud.google.com/vertex-ai/docs/training/pre-built-containers). Either this or the resource_pool_images is required. Use this field if you need all the resource pools to have the same Ray image. Otherwise, use the {@code resource_pool_images} field. | [optional] 
**ray_metric_spec** | [**GoogleCloudAiplatformV1beta1RayMetricSpec**](GoogleCloudAiplatformV1beta1RayMetricSpec.md) |  | [optional] 
**resource_pool_images** | **Dict[str, str]** | Optional. Required if image_uri isn&#39;t set. A map of resource_pool_id to prebuild Ray image if user need to use different images for different head/worker pools. This map needs to cover all the resource pool ids. Example: { \&quot;ray_head_node_pool\&quot;: \&quot;head image\&quot; \&quot;ray_worker_node_pool1\&quot;: \&quot;worker image\&quot; \&quot;ray_worker_node_pool2\&quot;: \&quot;another worker image\&quot; } | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_ray_spec import GoogleCloudAiplatformV1beta1RaySpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1RaySpec from a JSON string
google_cloud_aiplatform_v1beta1_ray_spec_instance = GoogleCloudAiplatformV1beta1RaySpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1RaySpec.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_ray_spec_dict = google_cloud_aiplatform_v1beta1_ray_spec_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1RaySpec from a dict
google_cloud_aiplatform_v1beta1_ray_spec_from_dict = GoogleCloudAiplatformV1beta1RaySpec.from_dict(google_cloud_aiplatform_v1beta1_ray_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


