# VmwareNodePoolAutoscalingConfig

NodePoolAutoscaling config for the NodePool to allow for the kubernetes to scale NodePool.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_replicas** | **int** | Maximum number of replicas in the NodePool. | [optional] 
**min_replicas** | **int** | Minimum number of replicas in the NodePool. | [optional] 

## Example

```python
from openapi_client.models.vmware_node_pool_autoscaling_config import VmwareNodePoolAutoscalingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of VmwareNodePoolAutoscalingConfig from a JSON string
vmware_node_pool_autoscaling_config_instance = VmwareNodePoolAutoscalingConfig.from_json(json)
# print the JSON string representation of the object
print(VmwareNodePoolAutoscalingConfig.to_json())

# convert the object into a dict
vmware_node_pool_autoscaling_config_dict = vmware_node_pool_autoscaling_config_instance.to_dict()
# create an instance of VmwareNodePoolAutoscalingConfig from a dict
vmware_node_pool_autoscaling_config_from_dict = VmwareNodePoolAutoscalingConfig.from_dict(vmware_node_pool_autoscaling_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


