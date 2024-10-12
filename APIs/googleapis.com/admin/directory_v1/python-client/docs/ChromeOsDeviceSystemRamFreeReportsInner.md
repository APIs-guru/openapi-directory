# ChromeOsDeviceSystemRamFreeReportsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**report_time** | **datetime** | Date and time the report was received. | [optional] 
**system_ram_free_info** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.chrome_os_device_system_ram_free_reports_inner import ChromeOsDeviceSystemRamFreeReportsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ChromeOsDeviceSystemRamFreeReportsInner from a JSON string
chrome_os_device_system_ram_free_reports_inner_instance = ChromeOsDeviceSystemRamFreeReportsInner.from_json(json)
# print the JSON string representation of the object
print(ChromeOsDeviceSystemRamFreeReportsInner.to_json())

# convert the object into a dict
chrome_os_device_system_ram_free_reports_inner_dict = chrome_os_device_system_ram_free_reports_inner_instance.to_dict()
# create an instance of ChromeOsDeviceSystemRamFreeReportsInner from a dict
chrome_os_device_system_ram_free_reports_inner_from_dict = ChromeOsDeviceSystemRamFreeReportsInner.from_dict(chrome_os_device_system_ram_free_reports_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


