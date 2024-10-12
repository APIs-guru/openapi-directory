# GoogleCloudAiplatformV1beta1ResourcePoolAutoscalingSpec

The min/max number of replicas allowed if enabling autoscaling

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_replica_count** | **str** | Optional. max replicas in the node pool, must be ≥ replica_count and &gt; min_replica_count or will throw error | [optional] 
**min_replica_count** | **str** | Optional. min replicas in the node pool, must be ≤ replica_count and &lt; max_replica_count or will throw error | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_resource_pool_autoscaling_spec import GoogleCloudAiplatformV1beta1ResourcePoolAutoscalingSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ResourcePoolAutoscalingSpec from a JSON string
google_cloud_aiplatform_v1beta1_resource_pool_autoscaling_spec_instance = GoogleCloudAiplatformV1beta1ResourcePoolAutoscalingSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ResourcePoolAutoscalingSpec.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_resource_pool_autoscaling_spec_dict = google_cloud_aiplatform_v1beta1_resource_pool_autoscaling_spec_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ResourcePoolAutoscalingSpec from a dict
google_cloud_aiplatform_v1beta1_resource_pool_autoscaling_spec_from_dict = GoogleCloudAiplatformV1beta1ResourcePoolAutoscalingSpec.from_dict(google_cloud_aiplatform_v1beta1_resource_pool_autoscaling_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


