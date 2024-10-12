# ChromeOsDevice

Google Chrome devices run on the [Chrome OS](https://support.google.com/chromeos). For more information about common API tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-chrome-devices).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_time_ranges** | [**List[ChromeOsDeviceActiveTimeRangesInner]**](ChromeOsDeviceActiveTimeRangesInner.md) | A list of active time ranges (Read-only). | [optional] 
**annotated_asset_id** | **str** | The asset identifier as noted by an administrator or specified during enrollment. | [optional] 
**annotated_location** | **str** | The address or location of the device as noted by the administrator. Maximum length is &#x60;200&#x60; characters. Empty values are allowed. | [optional] 
**annotated_user** | **str** | The user of the device as noted by the administrator. Maximum length is 100 characters. Empty values are allowed. | [optional] 
**auto_update_expiration** | **str** | (Read-only) The timestamp after which the device will stop receiving Chrome updates or support | [optional] 
**boot_mode** | **str** | The boot mode for the device. The possible values are: * &#x60;Verified&#x60;: The device is running a valid version of the Chrome OS. * &#x60;Dev&#x60;: The devices&#39;s developer hardware switch is enabled. When booted, the device has a command line shell. For an example of a developer switch, see the [Chromebook developer information](https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/samsung-series-5-chromebook#TOC-Developer-switch). | [optional] 
**cpu_info** | [**List[ChromeOsDeviceCpuInfoInner]**](ChromeOsDeviceCpuInfoInner.md) | Information regarding CPU specs in the device. | [optional] 
**cpu_status_reports** | [**List[ChromeOsDeviceCpuStatusReportsInner]**](ChromeOsDeviceCpuStatusReportsInner.md) | Reports of CPU utilization and temperature (Read-only) | [optional] 
**deprovision_reason** | **str** | (Read-only) Deprovision reason. | [optional] 
**device_files** | [**List[ChromeOsDeviceDeviceFilesInner]**](ChromeOsDeviceDeviceFilesInner.md) | A list of device files to download (Read-only) | [optional] 
**device_id** | **str** | The unique ID of the Chrome device. | [optional] 
**device_license_type** | **str** | Output only. Device license type. | [optional] [readonly] 
**disk_volume_reports** | [**List[ChromeOsDeviceDiskVolumeReportsInner]**](ChromeOsDeviceDiskVolumeReportsInner.md) | Reports of disk space and other info about mounted/connected volumes. | [optional] 
**dock_mac_address** | **str** | (Read-only) Built-in MAC address for the docking station that the device connected to. Factory sets Media access control address (MAC address) assigned for use by a dock. It is reserved specifically for MAC pass through device policy. The format is twelve (12) hexadecimal digits without any delimiter (uppercase letters). This is only relevant for some devices. | [optional] 
**etag** | **str** | ETag of the resource. | [optional] 
**ethernet_mac_address** | **str** | The device&#39;s MAC address on the ethernet network interface. | [optional] 
**ethernet_mac_address0** | **str** | (Read-only) MAC address used by the Chromebook’s internal ethernet port, and for onboard network (ethernet) interface. The format is twelve (12) hexadecimal digits without any delimiter (uppercase letters). This is only relevant for some devices. | [optional] 
**firmware_version** | **str** | The Chrome device&#39;s firmware version. | [optional] 
**first_enrollment_time** | **str** | Date and time for the first time the device was enrolled. | [optional] 
**kind** | **str** | The type of resource. For the Chromeosdevices resource, the value is &#x60;admin#directory#chromeosdevice&#x60;. | [optional] [default to 'admin#directory#chromeosdevice']
**last_deprovision_timestamp** | **str** | (Read-only) Date and time for the last deprovision of the device. | [optional] 
**last_enrollment_time** | **datetime** | Date and time the device was last enrolled (Read-only) | [optional] 
**last_known_network** | [**List[ChromeOsDeviceLastKnownNetworkInner]**](ChromeOsDeviceLastKnownNetworkInner.md) | Contains last known network (Read-only) | [optional] 
**last_sync** | **datetime** | Date and time the device was last synchronized with the policy settings in the G Suite administrator control panel (Read-only) | [optional] 
**mac_address** | **str** | The device&#39;s wireless MAC address. If the device does not have this information, it is not included in the response. | [optional] 
**manufacture_date** | **str** | (Read-only) The date the device was manufactured in yyyy-mm-dd format. | [optional] 
**meid** | **str** | The Mobile Equipment Identifier (MEID) or the International Mobile Equipment Identity (IMEI) for the 3G mobile card in a mobile device. A MEID/IMEI is typically used when adding a device to a wireless carrier&#39;s post-pay service plan. If the device does not have this information, this property is not included in the response. For more information on how to export a MEID/IMEI list, see the [Developer&#39;s Guide](/admin-sdk/directory/v1/guides/manage-chrome-devices.html#export_meid). | [optional] 
**model** | **str** | The device&#39;s model information. If the device does not have this information, this property is not included in the response. | [optional] 
**notes** | **str** | Notes about this device added by the administrator. This property can be [searched](https://support.google.com/chrome/a/answer/1698333) with the [list](/admin-sdk/directory/v1/reference/chromeosdevices/list) method&#39;s &#x60;query&#x60; parameter. Maximum length is 500 characters. Empty values are allowed. | [optional] 
**order_number** | **str** | The device&#39;s order number. Only devices directly purchased from Google have an order number. | [optional] 
**org_unit_id** | **str** | The unique ID of the organizational unit. orgUnitPath is the human readable version of orgUnitId. While orgUnitPath may change by renaming an organizational unit within the path, orgUnitId is unchangeable for one organizational unit. This property can be [updated](/admin-sdk/directory/v1/guides/manage-chrome-devices#move_chrome_devices_to_ou) using the API. For more information about how to create an organizational structure for your device, see the [administration help center](https://support.google.com/a/answer/182433). | [optional] 
**org_unit_path** | **str** | The full parent path with the organizational unit&#39;s name associated with the device. Path names are case insensitive. If the parent organizational unit is the top-level organization, it is represented as a forward slash, &#x60;/&#x60;. This property can be [updated](/admin-sdk/directory/v1/guides/manage-chrome-devices#move_chrome_devices_to_ou) using the API. For more information about how to create an organizational structure for your device, see the [administration help center](https://support.google.com/a/answer/182433). | [optional] 
**os_update_status** | [**OsUpdateStatus**](OsUpdateStatus.md) |  | [optional] 
**os_version** | **str** | The Chrome device&#39;s operating system version. | [optional] 
**platform_version** | **str** | The Chrome device&#39;s platform version. | [optional] 
**recent_users** | [**List[ChromeOsDeviceRecentUsersInner]**](ChromeOsDeviceRecentUsersInner.md) | A list of recent device users, in descending order, by last login time. | [optional] 
**screenshot_files** | [**List[ChromeOsDeviceDeviceFilesInner]**](ChromeOsDeviceDeviceFilesInner.md) | A list of screenshot files to download. Type is always \&quot;SCREENSHOT_FILE\&quot;. (Read-only) | [optional] 
**serial_number** | **str** | The Chrome device serial number entered when the device was enabled. This value is the same as the Admin console&#39;s *Serial Number* in the *Chrome OS Devices* tab. | [optional] 
**status** | **str** | The status of the device. | [optional] 
**support_end_date** | **datetime** | Final date the device will be supported (Read-only) | [optional] 
**system_ram_free_reports** | [**List[ChromeOsDeviceSystemRamFreeReportsInner]**](ChromeOsDeviceSystemRamFreeReportsInner.md) | Reports of amounts of available RAM memory (Read-only) | [optional] 
**system_ram_total** | **str** | Total RAM on the device [in bytes] (Read-only) | [optional] 
**tpm_version_info** | [**ChromeOsDeviceTpmVersionInfo**](ChromeOsDeviceTpmVersionInfo.md) |  | [optional] 
**will_auto_renew** | **bool** | Determines if the device will auto renew its support after the support end date. This is a read-only property. | [optional] 

## Example

```python
from openapi_client.models.chrome_os_device import ChromeOsDevice

# TODO update the JSON string below
json = "{}"
# create an instance of ChromeOsDevice from a JSON string
chrome_os_device_instance = ChromeOsDevice.from_json(json)
# print the JSON string representation of the object
print(ChromeOsDevice.to_json())

# convert the object into a dict
chrome_os_device_dict = chrome_os_device_instance.to_dict()
# create an instance of ChromeOsDevice from a dict
chrome_os_device_from_dict = ChromeOsDevice.from_dict(chrome_os_device_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


