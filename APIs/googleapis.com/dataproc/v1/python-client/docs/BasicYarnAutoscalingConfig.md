# BasicYarnAutoscalingConfig

Basic autoscaling configurations for YARN.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**graceful_decommission_timeout** | **str** | Required. Timeout for YARN graceful decommissioning of Node Managers. Specifies the duration to wait for jobs to complete before forcefully removing workers (and potentially interrupting jobs). Only applicable to downscaling operations.Bounds: 0s, 1d. | [optional] 
**scale_down_factor** | **float** | Required. Fraction of average YARN pending memory in the last cooldown period for which to remove workers. A scale-down factor of 1 will result in scaling down so that there is no available memory remaining after the update (more aggressive scaling). A scale-down factor of 0 disables removing workers, which can be beneficial for autoscaling a single job. See How autoscaling works (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/autoscaling#how_autoscaling_works) for more information.Bounds: 0.0, 1.0. | [optional] 
**scale_down_min_worker_fraction** | **float** | Optional. Minimum scale-down threshold as a fraction of total cluster size before scaling occurs. For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must recommend at least a 2 worker scale-down for the cluster to scale. A threshold of 0 means the autoscaler will scale down on any recommended change.Bounds: 0.0, 1.0. Default: 0.0. | [optional] 
**scale_up_factor** | **float** | Required. Fraction of average YARN pending memory in the last cooldown period for which to add workers. A scale-up factor of 1.0 will result in scaling up so that there is no pending memory remaining after the update (more aggressive scaling). A scale-up factor closer to 0 will result in a smaller magnitude of scaling up (less aggressive scaling). See How autoscaling works (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/autoscaling#how_autoscaling_works) for more information.Bounds: 0.0, 1.0. | [optional] 
**scale_up_min_worker_fraction** | **float** | Optional. Minimum scale-up threshold as a fraction of total cluster size before scaling occurs. For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must recommend at least a 2-worker scale-up for the cluster to scale. A threshold of 0 means the autoscaler will scale up on any recommended change.Bounds: 0.0, 1.0. Default: 0.0. | [optional] 

## Example

```python
from openapi_client.models.basic_yarn_autoscaling_config import BasicYarnAutoscalingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BasicYarnAutoscalingConfig from a JSON string
basic_yarn_autoscaling_config_instance = BasicYarnAutoscalingConfig.from_json(json)
# print the JSON string representation of the object
print(BasicYarnAutoscalingConfig.to_json())

# convert the object into a dict
basic_yarn_autoscaling_config_dict = basic_yarn_autoscaling_config_instance.to_dict()
# create an instance of BasicYarnAutoscalingConfig from a dict
basic_yarn_autoscaling_config_from_dict = BasicYarnAutoscalingConfig.from_dict(basic_yarn_autoscaling_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


