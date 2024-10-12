# GoogleAppsCloudidentityDevicesV1Device

 A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**android_specific_attributes** | [**GoogleAppsCloudidentityDevicesV1AndroidAttributes**](GoogleAppsCloudidentityDevicesV1AndroidAttributes.md) |  | [optional] 
**asset_tag** | **str** | Asset tag of the device. | [optional] 
**baseband_version** | **str** | Output only. Baseband version of the device. | [optional] [readonly] 
**bootloader_version** | **str** | Output only. Device bootloader version. Example: 0.6.7. | [optional] [readonly] 
**brand** | **str** | Output only. Device brand. Example: Samsung. | [optional] [readonly] 
**build_number** | **str** | Output only. Build number of the device. | [optional] [readonly] 
**compromised_state** | **str** | Output only. Represents whether the Device is compromised. | [optional] [readonly] 
**create_time** | **str** | Output only. When the Company-Owned device was imported. This field is empty for BYOD devices. | [optional] [readonly] 
**device_id** | **str** | Unique identifier for the device. | [optional] 
**device_type** | **str** | Output only. Type of device. | [optional] [readonly] 
**enabled_developer_options** | **bool** | Output only. Whether developer options is enabled on device. | [optional] [readonly] 
**enabled_usb_debugging** | **bool** | Output only. Whether USB debugging is enabled on device. | [optional] [readonly] 
**encryption_state** | **str** | Output only. Device encryption state. | [optional] [readonly] 
**hostname** | **str** | Host name of the device. | [optional] 
**imei** | **str** | Output only. IMEI number of device if GSM device; empty otherwise. | [optional] [readonly] 
**kernel_version** | **str** | Output only. Kernel version of the device. | [optional] [readonly] 
**last_sync_time** | **str** | Most recent time when device synced with this service. | [optional] 
**management_state** | **str** | Output only. Management state of the device | [optional] [readonly] 
**manufacturer** | **str** | Output only. Device manufacturer. Example: Motorola. | [optional] [readonly] 
**meid** | **str** | Output only. MEID number of device if CDMA device; empty otherwise. | [optional] [readonly] 
**model** | **str** | Output only. Model name of device. Example: Pixel 3. | [optional] [readonly] 
**name** | **str** | Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the Device in format: &#x60;devices/{device}&#x60;, where device is the unique id assigned to the Device. | [optional] [readonly] 
**network_operator** | **str** | Output only. Mobile or network operator of device, if available. | [optional] [readonly] 
**os_version** | **str** | Output only. OS version of the device. Example: Android 8.1.0. | [optional] [readonly] 
**other_accounts** | **List[str]** | Output only. Domain name for Google accounts on device. Type for other accounts on device. On Android, will only be populated if |ownership_privilege| is |PROFILE_OWNER| or |DEVICE_OWNER|. Does not include the account signed in to the device policy app if that account&#39;s domain has only one account. Examples: \&quot;com.example\&quot;, \&quot;xyz.com\&quot;. | [optional] [readonly] 
**owner_type** | **str** | Output only. Whether the device is owned by the company or an individual | [optional] [readonly] 
**release_version** | **str** | Output only. OS release version. Example: 6.0. | [optional] [readonly] 
**security_patch_time** | **str** | Output only. OS security patch update time on device. | [optional] [readonly] 
**serial_number** | **str** | Serial Number of device. Example: HT82V1A01076. | [optional] 
**wifi_mac_addresses** | **List[str]** | WiFi MAC addresses of device. | [optional] 

## Example

```python
from openapi_client.models.google_apps_cloudidentity_devices_v1_device import GoogleAppsCloudidentityDevicesV1Device

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCloudidentityDevicesV1Device from a JSON string
google_apps_cloudidentity_devices_v1_device_instance = GoogleAppsCloudidentityDevicesV1Device.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCloudidentityDevicesV1Device.to_json())

# convert the object into a dict
google_apps_cloudidentity_devices_v1_device_dict = google_apps_cloudidentity_devices_v1_device_instance.to_dict()
# create an instance of GoogleAppsCloudidentityDevicesV1Device from a dict
google_apps_cloudidentity_devices_v1_device_from_dict = GoogleAppsCloudidentityDevicesV1Device.from_dict(google_apps_cloudidentity_devices_v1_device_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


