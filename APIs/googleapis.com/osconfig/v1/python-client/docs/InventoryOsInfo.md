# InventoryOsInfo

Operating system information for the VM.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**architecture** | **str** | The system architecture of the operating system. | [optional] 
**hostname** | **str** | The VM hostname. | [optional] 
**kernel_release** | **str** | The kernel release of the operating system. | [optional] 
**kernel_version** | **str** | The kernel version of the operating system. | [optional] 
**long_name** | **str** | The operating system long name. For example &#39;Debian GNU/Linux 9&#39; or &#39;Microsoft Window Server 2019 Datacenter&#39;. | [optional] 
**osconfig_agent_version** | **str** | The current version of the OS Config agent running on the VM. | [optional] 
**short_name** | **str** | The operating system short name. For example, &#39;windows&#39; or &#39;debian&#39;. | [optional] 
**version** | **str** | The version of the operating system. | [optional] 

## Example

```python
from openapi_client.models.inventory_os_info import InventoryOsInfo

# TODO update the JSON string below
json = "{}"
# create an instance of InventoryOsInfo from a JSON string
inventory_os_info_instance = InventoryOsInfo.from_json(json)
# print the JSON string representation of the object
print(InventoryOsInfo.to_json())

# convert the object into a dict
inventory_os_info_dict = inventory_os_info_instance.to_dict()
# create an instance of InventoryOsInfo from a dict
inventory_os_info_from_dict = InventoryOsInfo.from_dict(inventory_os_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


