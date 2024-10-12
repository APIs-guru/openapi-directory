# OsUpdateStatus

Contains information regarding the current OS update status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reboot_time** | **str** | Date and time of the last reboot. | [optional] 
**state** | **str** | The update state of an OS update. | [optional] 
**target_kiosk_app_version** | **str** | New required platform version from the pending updated kiosk app. | [optional] 
**target_os_version** | **str** | New platform version of the OS image being downloaded and applied. It is only set when update status is UPDATE_STATUS_DOWNLOAD_IN_PROGRESS or UPDATE_STATUS_NEED_REBOOT. Note this could be a dummy \&quot;0.0.0.0\&quot; for UPDATE_STATUS_NEED_REBOOT for some edge cases, e.g. update engine is restarted without a reboot. | [optional] 
**update_check_time** | **str** | Date and time of the last update check. | [optional] 
**update_time** | **str** | Date and time of the last successful OS update. | [optional] 

## Example

```python
from openapi_client.models.os_update_status import OsUpdateStatus

# TODO update the JSON string below
json = "{}"
# create an instance of OsUpdateStatus from a JSON string
os_update_status_instance = OsUpdateStatus.from_json(json)
# print the JSON string representation of the object
print(OsUpdateStatus.to_json())

# convert the object into a dict
os_update_status_dict = os_update_status_instance.to_dict()
# create an instance of OsUpdateStatus from a dict
os_update_status_from_dict = OsUpdateStatus.from_dict(os_update_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


