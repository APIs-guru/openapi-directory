# UpdatesProperties

Properties of the update profile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_last_scanned_time** | **datetime** | The last time when the device did an update scan. | [optional] 
**device_version** | **str** | The current Device version. | [optional] 
**in_progress_download_job_id** | **str** | If a download is in progress, this field contains the JobId of that particular download job | [optional] 
**in_progress_download_job_started_time** | **datetime** | The time when the currently running download (if any) started | [optional] 
**in_progress_install_job_id** | **str** | If an install is in progress, this field contains the JobId of that particular install job | [optional] 
**in_progress_install_job_started_time** | **datetime** | The time when the currently running install (if any) started | [optional] 
**in_progress_scan_started_time** | **datetime** | The time when the currently running scan (if any) started | [optional] 
**last_completed_download_job_time** | **datetime** | The time when the last Download job was completed (success|cancelled|failed) on the device. | [optional] 
**last_completed_install_job_time** | **datetime** | The time when the last Install job was completed (success|cancelled|failed) on the device. | [optional] 
**last_completed_scan_time** | **datetime** | The time when the last scan job was completed (success|cancelled|failed) on the device. | [optional] 
**reboot_required_for_install** | **bool** | Set to true if RegularUpdatesAvailable is true and if at least one of the updateItems detected has needs a reboot to install. | [optional] 
**regular_updates_available** | **bool** | Set to true if regular updates were detected for the current version of the device. | [optional] 
**status** | **str** | The current update operation. | [optional] 
**total_items_pending_for_download** | **int** | The total number of items pending for download. | [optional] 
**total_items_pending_for_install** | **int** | The total number of items pending for install. | [optional] 

## Example

```python
from openapi_client.models.updates_properties import UpdatesProperties

# TODO update the JSON string below
json = "{}"
# create an instance of UpdatesProperties from a JSON string
updates_properties_instance = UpdatesProperties.from_json(json)
# print the JSON string representation of the object
print(UpdatesProperties.to_json())

# convert the object into a dict
updates_properties_dict = updates_properties_instance.to_dict()
# create an instance of UpdatesProperties from a dict
updates_properties_from_dict = UpdatesProperties.from_dict(updates_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


