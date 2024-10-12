# SparkStandaloneAutoscalingConfig

Basic autoscaling configurations for Spark Standalone.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**graceful_decommission_timeout** | **str** | Required. Timeout for Spark graceful decommissioning of spark workers. Specifies the duration to wait for spark worker to complete spark decommissioning tasks before forcefully removing workers. Only applicable to downscaling operations.Bounds: 0s, 1d. | [optional] 
**remove_only_idle_workers** | **bool** | Optional. Remove only idle workers when scaling down cluster | [optional] 
**scale_down_factor** | **float** | Required. Fraction of required executors to remove from Spark Serverless clusters. A scale-down factor of 1.0 will result in scaling down so that there are no more executors for the Spark Job.(more aggressive scaling). A scale-down factor closer to 0 will result in a smaller magnitude of scaling donw (less aggressive scaling).Bounds: 0.0, 1.0. | [optional] 
**scale_down_min_worker_fraction** | **float** | Optional. Minimum scale-down threshold as a fraction of total cluster size before scaling occurs. For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must recommend at least a 2 worker scale-down for the cluster to scale. A threshold of 0 means the autoscaler will scale down on any recommended change.Bounds: 0.0, 1.0. Default: 0.0. | [optional] 
**scale_up_factor** | **float** | Required. Fraction of required workers to add to Spark Standalone clusters. A scale-up factor of 1.0 will result in scaling up so that there are no more required workers for the Spark Job (more aggressive scaling). A scale-up factor closer to 0 will result in a smaller magnitude of scaling up (less aggressive scaling).Bounds: 0.0, 1.0. | [optional] 
**scale_up_min_worker_fraction** | **float** | Optional. Minimum scale-up threshold as a fraction of total cluster size before scaling occurs. For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must recommend at least a 2-worker scale-up for the cluster to scale. A threshold of 0 means the autoscaler will scale up on any recommended change.Bounds: 0.0, 1.0. Default: 0.0. | [optional] 

## Example

```python
from openapi_client.models.spark_standalone_autoscaling_config import SparkStandaloneAutoscalingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SparkStandaloneAutoscalingConfig from a JSON string
spark_standalone_autoscaling_config_instance = SparkStandaloneAutoscalingConfig.from_json(json)
# print the JSON string representation of the object
print(SparkStandaloneAutoscalingConfig.to_json())

# convert the object into a dict
spark_standalone_autoscaling_config_dict = spark_standalone_autoscaling_config_instance.to_dict()
# create an instance of SparkStandaloneAutoscalingConfig from a dict
spark_standalone_autoscaling_config_from_dict = SparkStandaloneAutoscalingConfig.from_dict(spark_standalone_autoscaling_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


