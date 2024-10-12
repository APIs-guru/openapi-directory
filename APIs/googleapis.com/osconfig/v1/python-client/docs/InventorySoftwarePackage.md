# InventorySoftwarePackage

Software package information of the operating system.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apt_package** | [**InventoryVersionedPackage**](InventoryVersionedPackage.md) |  | [optional] 
**cos_package** | [**InventoryVersionedPackage**](InventoryVersionedPackage.md) |  | [optional] 
**googet_package** | [**InventoryVersionedPackage**](InventoryVersionedPackage.md) |  | [optional] 
**qfe_package** | [**InventoryWindowsQuickFixEngineeringPackage**](InventoryWindowsQuickFixEngineeringPackage.md) |  | [optional] 
**windows_application** | [**InventoryWindowsApplication**](InventoryWindowsApplication.md) |  | [optional] 
**wua_package** | [**InventoryWindowsUpdatePackage**](InventoryWindowsUpdatePackage.md) |  | [optional] 
**yum_package** | [**InventoryVersionedPackage**](InventoryVersionedPackage.md) |  | [optional] 
**zypper_package** | [**InventoryVersionedPackage**](InventoryVersionedPackage.md) |  | [optional] 
**zypper_patch** | [**InventoryZypperPatch**](InventoryZypperPatch.md) |  | [optional] 

## Example

```python
from openapi_client.models.inventory_software_package import InventorySoftwarePackage

# TODO update the JSON string below
json = "{}"
# create an instance of InventorySoftwarePackage from a JSON string
inventory_software_package_instance = InventorySoftwarePackage.from_json(json)
# print the JSON string representation of the object
print(InventorySoftwarePackage.to_json())

# convert the object into a dict
inventory_software_package_dict = inventory_software_package_instance.to_dict()
# create an instance of InventorySoftwarePackage from a dict
inventory_software_package_from_dict = InventorySoftwarePackage.from_dict(inventory_software_package_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


