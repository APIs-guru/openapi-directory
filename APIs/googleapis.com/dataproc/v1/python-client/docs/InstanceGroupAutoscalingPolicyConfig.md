# InstanceGroupAutoscalingPolicyConfig

Configuration for the size bounds of an instance group, including its proportional size to other groups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_instances** | **int** | Required. Maximum number of instances for this group. Required for primary workers. Note that by default, clusters will not use secondary workers. Required for secondary workers if the minimum secondary instances is set.Primary workers - Bounds: [min_instances, ). Secondary workers - Bounds: [min_instances, ). Default: 0. | [optional] 
**min_instances** | **int** | Optional. Minimum number of instances for this group.Primary workers - Bounds: 2, max_instances. Default: 2. Secondary workers - Bounds: 0, max_instances. Default: 0. | [optional] 
**weight** | **int** | Optional. Weight for the instance group, which is used to determine the fraction of total workers in the cluster from this instance group. For example, if primary workers have weight 2, and secondary workers have weight 1, the cluster will have approximately 2 primary workers for each secondary worker.The cluster may not reach the specified balance if constrained by min/max bounds or other autoscaling settings. For example, if max_instances for secondary workers is 0, then only primary workers will be added. The cluster can also be out of balance when created.If weight is not set on any instance group, the cluster will default to equal weight for all groups: the cluster will attempt to maintain an equal number of workers in each group within the configured size bounds for each group. If weight is set for one group only, the cluster will default to zero weight on the unset group. For example if weight is set only on primary workers, the cluster will use primary workers only and no secondary workers. | [optional] 

## Example

```python
from openapi_client.models.instance_group_autoscaling_policy_config import InstanceGroupAutoscalingPolicyConfig

# TODO update the JSON string below
json = "{}"
# create an instance of InstanceGroupAutoscalingPolicyConfig from a JSON string
instance_group_autoscaling_policy_config_instance = InstanceGroupAutoscalingPolicyConfig.from_json(json)
# print the JSON string representation of the object
print(InstanceGroupAutoscalingPolicyConfig.to_json())

# convert the object into a dict
instance_group_autoscaling_policy_config_dict = instance_group_autoscaling_policy_config_instance.to_dict()
# create an instance of InstanceGroupAutoscalingPolicyConfig from a dict
instance_group_autoscaling_policy_config_from_dict = InstanceGroupAutoscalingPolicyConfig.from_dict(instance_group_autoscaling_policy_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


