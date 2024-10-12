# BareMetalMaintenanceStatus

Represents the maintenance status of the bare metal user cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**machine_drain_status** | [**BareMetalMachineDrainStatus**](BareMetalMachineDrainStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.bare_metal_maintenance_status import BareMetalMaintenanceStatus

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalMaintenanceStatus from a JSON string
bare_metal_maintenance_status_instance = BareMetalMaintenanceStatus.from_json(json)
# print the JSON string representation of the object
print(BareMetalMaintenanceStatus.to_json())

# convert the object into a dict
bare_metal_maintenance_status_dict = bare_metal_maintenance_status_instance.to_dict()
# create an instance of BareMetalMaintenanceStatus from a dict
bare_metal_maintenance_status_from_dict = BareMetalMaintenanceStatus.from_dict(bare_metal_maintenance_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


