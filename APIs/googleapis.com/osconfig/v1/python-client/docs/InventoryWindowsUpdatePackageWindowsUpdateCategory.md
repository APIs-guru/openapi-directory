# InventoryWindowsUpdatePackageWindowsUpdateCategory

Categories specified by the Windows Update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The identifier of the windows update category. | [optional] 
**name** | **str** | The name of the windows update category. | [optional] 

## Example

```python
from openapi_client.models.inventory_windows_update_package_windows_update_category import InventoryWindowsUpdatePackageWindowsUpdateCategory

# TODO update the JSON string below
json = "{}"
# create an instance of InventoryWindowsUpdatePackageWindowsUpdateCategory from a JSON string
inventory_windows_update_package_windows_update_category_instance = InventoryWindowsUpdatePackageWindowsUpdateCategory.from_json(json)
# print the JSON string representation of the object
print(InventoryWindowsUpdatePackageWindowsUpdateCategory.to_json())

# convert the object into a dict
inventory_windows_update_package_windows_update_category_dict = inventory_windows_update_package_windows_update_category_instance.to_dict()
# create an instance of InventoryWindowsUpdatePackageWindowsUpdateCategory from a dict
inventory_windows_update_package_windows_update_category_from_dict = InventoryWindowsUpdatePackageWindowsUpdateCategory.from_dict(inventory_windows_update_package_windows_update_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


