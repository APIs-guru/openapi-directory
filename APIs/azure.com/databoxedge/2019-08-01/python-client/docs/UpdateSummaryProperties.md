# UpdateSummaryProperties

The device update information summary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_last_scanned_date_time** | **datetime** | The last time when a scan was done on the device. | [optional] 
**device_version_number** | **str** | The current version of the device in format: 1.2.17312.13.\&quot;, | [optional] 
**friendly_device_version_name** | **str** | The current version of the device in text format. | [optional] 
**in_progress_download_job_id** | **str** | The job ID of the download job in progress. | [optional] [readonly] 
**in_progress_download_job_started_date_time** | **datetime** | The time when the currently running download (if any) started. | [optional] [readonly] 
**in_progress_install_job_id** | **str** | The job ID of the install job in progress. | [optional] [readonly] 
**in_progress_install_job_started_date_time** | **datetime** | The time when the currently running install (if any) started. | [optional] [readonly] 
**last_completed_download_job_date_time** | **datetime** | The time when the last Download job was completed (success/cancelled/failed) on the appliance. | [optional] [readonly] 
**last_completed_install_job_date_time** | **datetime** | The time when the last Install job was completed (success/cancelled/failed) on the appliance. | [optional] [readonly] 
**last_completed_scan_job_date_time** | **datetime** | The time when the last scan job was completed (success/cancelled/failed) on the appliance. | [optional] 
**ongoing_update_operation** | **str** | The current update operation. | [optional] [readonly] 
**reboot_behavior** | **str** | Indicates if updates are available and at least one of the updates needs a reboot. | [optional] [readonly] 
**total_number_of_updates_available** | **int** | The number of updates available for the current device version as per the last device scan. | [optional] [readonly] 
**total_number_of_updates_pending_download** | **int** | The total number of items pending download. | [optional] [readonly] 
**total_number_of_updates_pending_install** | **int** | The total number of items pending install. | [optional] [readonly] 
**total_update_size_in_bytes** | **float** | The total size of updates available for download in bytes. | [optional] [readonly] 
**update_titles** | **List[str]** | The list of updates available for install. | [optional] [readonly] 

## Example

```python
from openapi_client.models.update_summary_properties import UpdateSummaryProperties

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSummaryProperties from a JSON string
update_summary_properties_instance = UpdateSummaryProperties.from_json(json)
# print the JSON string representation of the object
print(UpdateSummaryProperties.to_json())

# convert the object into a dict
update_summary_properties_dict = update_summary_properties_instance.to_dict()
# create an instance of UpdateSummaryProperties from a dict
update_summary_properties_from_dict = UpdateSummaryProperties.from_dict(update_summary_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


