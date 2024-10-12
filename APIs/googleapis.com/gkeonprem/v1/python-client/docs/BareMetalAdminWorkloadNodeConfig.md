# BareMetalAdminWorkloadNodeConfig

BareMetalAdminWorkloadNodeConfig specifies the workload node configurations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_pods_per_node** | **str** | The maximum number of pods a node can run. The size of the CIDR range assigned to the node will be derived from this parameter. By default 110 Pods are created per Node. Upper bound is 250 for both HA and non-HA admin cluster. Lower bound is 64 for non-HA admin cluster and 32 for HA admin cluster. | [optional] 

## Example

```python
from openapi_client.models.bare_metal_admin_workload_node_config import BareMetalAdminWorkloadNodeConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalAdminWorkloadNodeConfig from a JSON string
bare_metal_admin_workload_node_config_instance = BareMetalAdminWorkloadNodeConfig.from_json(json)
# print the JSON string representation of the object
print(BareMetalAdminWorkloadNodeConfig.to_json())

# convert the object into a dict
bare_metal_admin_workload_node_config_dict = bare_metal_admin_workload_node_config_instance.to_dict()
# create an instance of BareMetalAdminWorkloadNodeConfig from a dict
bare_metal_admin_workload_node_config_from_dict = BareMetalAdminWorkloadNodeConfig.from_dict(bare_metal_admin_workload_node_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


