# InventoryWindowsQuickFixEngineeringPackage

Information related to a Quick Fix Engineering package. Fields are taken from Windows QuickFixEngineering Interface and match the source names: https://docs.microsoft.com/en-us/windows/win32/cimwin32prov/win32-quickfixengineering

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caption** | **str** | A short textual description of the QFE update. | [optional] 
**description** | **str** | A textual description of the QFE update. | [optional] 
**hot_fix_id** | **str** | Unique identifier associated with a particular QFE update. | [optional] 
**install_time** | **str** | Date that the QFE update was installed. Mapped from installed_on field. | [optional] 

## Example

```python
from openapi_client.models.inventory_windows_quick_fix_engineering_package import InventoryWindowsQuickFixEngineeringPackage

# TODO update the JSON string below
json = "{}"
# create an instance of InventoryWindowsQuickFixEngineeringPackage from a JSON string
inventory_windows_quick_fix_engineering_package_instance = InventoryWindowsQuickFixEngineeringPackage.from_json(json)
# print the JSON string representation of the object
print(InventoryWindowsQuickFixEngineeringPackage.to_json())

# convert the object into a dict
inventory_windows_quick_fix_engineering_package_dict = inventory_windows_quick_fix_engineering_package_instance.to_dict()
# create an instance of InventoryWindowsQuickFixEngineeringPackage from a dict
inventory_windows_quick_fix_engineering_package_from_dict = InventoryWindowsQuickFixEngineeringPackage.from_dict(inventory_windows_quick_fix_engineering_package_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


