# BareMetalMaintenanceConfig

Specifies configurations to put bare metal nodes in and out of maintenance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maintenance_address_cidr_blocks** | **List[str]** | Required. All IPv4 address from these ranges will be placed into maintenance mode. Nodes in maintenance mode will be cordoned and drained. When both of these are true, the \&quot;baremetal.cluster.gke.io/maintenance\&quot; annotation will be set on the node resource. | [optional] 

## Example

```python
from openapi_client.models.bare_metal_maintenance_config import BareMetalMaintenanceConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalMaintenanceConfig from a JSON string
bare_metal_maintenance_config_instance = BareMetalMaintenanceConfig.from_json(json)
# print the JSON string representation of the object
print(BareMetalMaintenanceConfig.to_json())

# convert the object into a dict
bare_metal_maintenance_config_dict = bare_metal_maintenance_config_instance.to_dict()
# create an instance of BareMetalMaintenanceConfig from a dict
bare_metal_maintenance_config_from_dict = BareMetalMaintenanceConfig.from_dict(bare_metal_maintenance_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


