# BareMetalAdminMaintenanceStatus

BareMetalAdminMaintenanceStatus represents the maintenance status for bare metal Admin cluster CR's nodes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**machine_drain_status** | [**BareMetalAdminMachineDrainStatus**](BareMetalAdminMachineDrainStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.bare_metal_admin_maintenance_status import BareMetalAdminMaintenanceStatus

# TODO update the JSON string below
json = "{}"
# create an instance of BareMetalAdminMaintenanceStatus from a JSON string
bare_metal_admin_maintenance_status_instance = BareMetalAdminMaintenanceStatus.from_json(json)
# print the JSON string representation of the object
print(BareMetalAdminMaintenanceStatus.to_json())

# convert the object into a dict
bare_metal_admin_maintenance_status_dict = bare_metal_admin_maintenance_status_instance.to_dict()
# create an instance of BareMetalAdminMaintenanceStatus from a dict
bare_metal_admin_maintenance_status_from_dict = BareMetalAdminMaintenanceStatus.from_dict(bare_metal_admin_maintenance_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


