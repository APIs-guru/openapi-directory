# GoogleCloudAiplatformV1FeatureOnlineStoreBigtableAutoScaling


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpu_utilization_target** | **int** | Optional. A percentage of the cluster&#39;s CPU capacity. Can be from 10% to 80%. When a cluster&#39;s CPU utilization exceeds the target that you have set, Bigtable immediately adds nodes to the cluster. When CPU utilization is substantially lower than the target, Bigtable removes nodes. If not set will default to 50%. | [optional] 
**max_node_count** | **int** | Required. The maximum number of nodes to scale up to. Must be greater than or equal to min_node_count, and less than or equal to 10 times of &#39;min_node_count&#39;. | [optional] 
**min_node_count** | **int** | Required. The minimum number of nodes to scale down to. Must be greater than or equal to 1. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_feature_online_store_bigtable_auto_scaling import GoogleCloudAiplatformV1FeatureOnlineStoreBigtableAutoScaling

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1FeatureOnlineStoreBigtableAutoScaling from a JSON string
google_cloud_aiplatform_v1_feature_online_store_bigtable_auto_scaling_instance = GoogleCloudAiplatformV1FeatureOnlineStoreBigtableAutoScaling.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1FeatureOnlineStoreBigtableAutoScaling.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_feature_online_store_bigtable_auto_scaling_dict = google_cloud_aiplatform_v1_feature_online_store_bigtable_auto_scaling_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1FeatureOnlineStoreBigtableAutoScaling from a dict
google_cloud_aiplatform_v1_feature_online_store_bigtable_auto_scaling_from_dict = GoogleCloudAiplatformV1FeatureOnlineStoreBigtableAutoScaling.from_dict(google_cloud_aiplatform_v1_feature_online_store_bigtable_auto_scaling_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


