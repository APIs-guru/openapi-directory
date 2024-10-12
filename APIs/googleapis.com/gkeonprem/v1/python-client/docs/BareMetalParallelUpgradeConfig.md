# BareMetalParallelUpgradeConfig

BareMetalParallelUpgradeConfig defines the parallel upgrade settings for worker node pools.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**concurrent_nodes** | **int** | The maximum number of nodes that can be upgraded at once. | [optional] 
**minimum_available_nodes** | **int** | The minimum number of nodes that should be healthy and available during an upgrade. If set to the default value of 0, it is possible that none of the nodes will be available during an upgrade. | [optional] 

## Example

```python
from openapi_client.models.bare_metal_parallel_upgrade_config import BareMetalParallelUpgradeConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalParallelUpgradeConfig from a JSON string
bare_metal_parallel_upgrade_config_instance = BareMetalParallelUpgradeConfig.from_json(json)
# print the JSON string representation of the object
print(BareMetalParallelUpgradeConfig.to_json())

# convert the object into a dict
bare_metal_parallel_upgrade_config_dict = bare_metal_parallel_upgrade_config_instance.to_dict()
# create an instance of BareMetalParallelUpgradeConfig from a dict
bare_metal_parallel_upgrade_config_from_dict = BareMetalParallelUpgradeConfig.from_dict(bare_metal_parallel_upgrade_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


