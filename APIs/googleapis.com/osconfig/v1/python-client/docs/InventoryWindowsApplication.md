# InventoryWindowsApplication

Contains information about a Windows application that is retrieved from the Windows Registry. For more information about these fields, see: https://docs.microsoft.com/en-us/windows/win32/msi/uninstall-registry-key

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The name of the application or product. | [optional] 
**display_version** | **str** | The version of the product or application in string format. | [optional] 
**help_link** | **str** | The internet address for technical support. | [optional] 
**install_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**publisher** | **str** | The name of the manufacturer for the product or application. | [optional] 

## Example

```python
from openapi_client.models.inventory_windows_application import InventoryWindowsApplication

# TODO update the JSON string below
json = "{}"
# create an instance of InventoryWindowsApplication from a JSON string
inventory_windows_application_instance = InventoryWindowsApplication.from_json(json)
# print the JSON string representation of the object
print(InventoryWindowsApplication.to_json())

# convert the object into a dict
inventory_windows_application_dict = inventory_windows_application_instance.to_dict()
# create an instance of InventoryWindowsApplication from a dict
inventory_windows_application_from_dict = InventoryWindowsApplication.from_dict(inventory_windows_application_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


