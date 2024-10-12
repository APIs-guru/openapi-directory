# SystemUpdate

Configuration for managing system updates

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_minutes** | **int** | If the type is WINDOWED, the end of the maintenance window, measured as the number of minutes after midnight in device&#39;s local time. This value must be between 0 and 1439, inclusive. If this value is less than start_minutes, then the maintenance window spans midnight. If the maintenance window specified is smaller than 30 minutes, the actual window is extended to 30 minutes beyond the start time. | [optional] 
**freeze_periods** | [**List[FreezePeriod]**](FreezePeriod.md) | An annually repeating time period in which over-the-air (OTA) system updates are postponed to freeze the OS version running on a device. To prevent freezing the device indefinitely, each freeze period must be separated by at least 60 days. | [optional] 
**start_minutes** | **int** | If the type is WINDOWED, the start of the maintenance window, measured as the number of minutes after midnight in the device&#39;s local time. This value must be between 0 and 1439, inclusive. | [optional] 
**type** | **str** | The type of system update to configure. | [optional] 

## Example

```python
from openapi_client.models.system_update import SystemUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of SystemUpdate from a JSON string
system_update_instance = SystemUpdate.from_json(json)
# print the JSON string representation of the object
print(SystemUpdate.to_json())

# convert the object into a dict
system_update_dict = system_update_instance.to_dict()
# create an instance of SystemUpdate from a dict
system_update_from_dict = SystemUpdate.from_dict(system_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


