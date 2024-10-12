# BareMetalWorkloadNodeConfig

Specifies the workload node configurations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_runtime** | **str** | Specifies which container runtime will be used. | [optional] 
**max_pods_per_node** | **str** | The maximum number of pods a node can run. The size of the CIDR range assigned to the node will be derived from this parameter. | [optional] 

## Example

```python
from openapi_client.models.bare_metal_workload_node_config import BareMetalWorkloadNodeConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalWorkloadNodeConfig from a JSON string
bare_metal_workload_node_config_instance = BareMetalWorkloadNodeConfig.from_json(json)
# print the JSON string representation of the object
print(BareMetalWorkloadNodeConfig.to_json())

# convert the object into a dict
bare_metal_workload_node_config_dict = bare_metal_workload_node_config_instance.to_dict()
# create an instance of BareMetalWorkloadNodeConfig from a dict
bare_metal_workload_node_config_from_dict = BareMetalWorkloadNodeConfig.from_dict(bare_metal_workload_node_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


