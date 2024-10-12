# GoogleCloudAiplatformV1FeaturestoreOnlineServingConfigScaling

Online serving scaling configuration. If min_node_count and max_node_count are set to the same value, the cluster will be configured with the fixed number of node (no auto-scaling).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpu_utilization_target** | **int** | Optional. The cpu utilization that the Autoscaler should be trying to achieve. This number is on a scale from 0 (no utilization) to 100 (total utilization), and is limited between 10 and 80. When a cluster&#39;s CPU utilization exceeds the target that you have set, Bigtable immediately adds nodes to the cluster. When CPU utilization is substantially lower than the target, Bigtable removes nodes. If not set or set to 0, default to 50. | [optional] 
**max_node_count** | **int** | The maximum number of nodes to scale up to. Must be greater than min_node_count, and less than or equal to 10 times of &#39;min_node_count&#39;. | [optional] 
**min_node_count** | **int** | Required. The minimum number of nodes to scale down to. Must be greater than or equal to 1. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_featurestore_online_serving_config_scaling import GoogleCloudAiplatformV1FeaturestoreOnlineServingConfigScaling

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1FeaturestoreOnlineServingConfigScaling from a JSON string
google_cloud_aiplatform_v1_featurestore_online_serving_config_scaling_instance = GoogleCloudAiplatformV1FeaturestoreOnlineServingConfigScaling.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1FeaturestoreOnlineServingConfigScaling.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_featurestore_online_serving_config_scaling_dict = google_cloud_aiplatform_v1_featurestore_online_serving_config_scaling_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1FeaturestoreOnlineServingConfigScaling from a dict
google_cloud_aiplatform_v1_featurestore_online_serving_config_scaling_from_dict = GoogleCloudAiplatformV1FeaturestoreOnlineServingConfigScaling.from_dict(google_cloud_aiplatform_v1_featurestore_online_serving_config_scaling_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


