# NodeConfigDefaults

Subset of NodeConfig message that has defaults.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcfs_config** | [**GcfsConfig**](GcfsConfig.md) |  | [optional] 
**host_maintenance_policy** | [**HostMaintenancePolicy**](HostMaintenancePolicy.md) |  | [optional] 
**logging_config** | [**NodePoolLoggingConfig**](NodePoolLoggingConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.node_config_defaults import NodeConfigDefaults

# TODO update the JSON string below
json = "{}"
# create an instance of NodeConfigDefaults from a JSON string
node_config_defaults_instance = NodeConfigDefaults.from_json(json)
# print the JSON string representation of the object
print(NodeConfigDefaults.to_json())

# convert the object into a dict
node_config_defaults_dict = node_config_defaults_instance.to_dict()
# create an instance of NodeConfigDefaults from a dict
node_config_defaults_from_dict = NodeConfigDefaults.from_dict(node_config_defaults_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


