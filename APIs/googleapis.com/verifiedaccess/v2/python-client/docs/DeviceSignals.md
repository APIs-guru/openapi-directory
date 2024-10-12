# DeviceSignals

The device signals as reported by Chrome. Unless otherwise specified, signals are available on all platforms.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_screen_lock** | **bool** | Value of the AllowScreenLock policy on the device. See https://chromeenterprise.google/policies/?policy&#x3D;AllowScreenLock for more details. Available on ChromeOS only. | [optional] 
**browser_version** | **str** | Current version of the Chrome browser which generated this set of signals. Example value: \&quot;107.0.5286.0\&quot;. | [optional] 
**built_in_dns_client_enabled** | **bool** | Whether Chrome&#39;s built-in DNS client is used. The OS DNS client is otherwise used. This value may be controlled by an enterprise policy: https://chromeenterprise.google/policies/#BuiltInDnsClientEnabled. | [optional] 
**chrome_remote_desktop_app_blocked** | **bool** | Whether access to the Chrome Remote Desktop application is blocked via a policy. | [optional] 
**crowd_strike_agent** | [**CrowdStrikeAgent**](CrowdStrikeAgent.md) |  | [optional] 
**device_affiliation_ids** | **List[str]** | Affiliation IDs of the organizations that are affiliated with the organization that is currently managing the device. When the sets of device and profile affiliation IDs overlap, it means that the organizations managing the device and user are affiliated. To learn more about user affiliation, visit https://support.google.com/chrome/a/answer/12801245?ref_topic&#x3D;9027936. | [optional] 
**device_enrollment_domain** | **str** | Enrollment domain of the customer which is currently managing the device. | [optional] 
**device_manufacturer** | **str** | The name of the device&#39;s manufacturer. | [optional] 
**device_model** | **str** | The name of the device&#39;s model. | [optional] 
**disk_encryption** | **str** | The encryption state of the disk. On ChromeOS, the main disk is always ENCRYPTED. | [optional] 
**display_name** | **str** | The display name of the device, as defined by the user. | [optional] 
**hostname** | **str** | Hostname of the device. | [optional] 
**imei** | **List[str]** | International Mobile Equipment Identity (IMEI) of the device. Available on ChromeOS only. | [optional] 
**mac_addresses** | **List[str]** | MAC addresses of the device. | [optional] 
**meid** | **List[str]** | Mobile Equipment Identifier (MEID) of the device. Available on ChromeOS only. | [optional] 
**operating_system** | **str** | The type of the Operating System currently running on the device. | [optional] 
**os_firewall** | **str** | The state of the OS level firewall. On ChromeOS, the value will always be ENABLED on regular devices and UNKNOWN on devices in developer mode. | [optional] 
**os_version** | **str** | The current version of the Operating System. On Windows and linux, the value will also include the security patch information. | [optional] 
**password_protection_warning_trigger** | **str** | Whether the Password Protection Warning feature is enabled or not. Password protection alerts users when they reuse their protected password on potentially suspicious sites. This setting is controlled by an enterprise policy: https://chromeenterprise.google/policies/#PasswordProtectionWarningTrigger. Note that the policy unset does not have the same effects as having the policy explicitly set to &#x60;PASSWORD_PROTECTION_OFF&#x60;. | [optional] 
**profile_affiliation_ids** | **List[str]** | Affiliation IDs of the organizations that are affiliated with the organization that is currently managing the Chrome Profile’s user or ChromeOS user. | [optional] 
**realtime_url_check_mode** | **str** | Whether Enterprise-grade (i.e. custom) unsafe URL scanning is enabled or not. This setting may be controlled by an enterprise policy: https://chromeenterprise.google/policies/#EnterpriseRealTimeUrlCheckMode | [optional] 
**safe_browsing_protection_level** | **str** | Safe Browsing Protection Level. That setting may be controlled by an enterprise policy: https://chromeenterprise.google/policies/#SafeBrowsingProtectionLevel. | [optional] 
**screen_lock_secured** | **str** | The state of the Screen Lock password protection. On ChromeOS, this value will always be ENABLED as there is not way to disable requiring a password or pin when unlocking the device. | [optional] 
**secure_boot_mode** | **str** | Whether the device&#39;s startup software has its Secure Boot feature enabled. Available on Windows only. | [optional] 
**serial_number** | **str** | The serial number of the device. On Windows, this represents the BIOS&#39;s serial number. Not available on most Linux distributions. | [optional] 
**site_isolation_enabled** | **bool** | Whether the Site Isolation (a.k.a Site Per Process) setting is enabled. That setting may be controlled by an enterprise policy: https://chromeenterprise.google/policies/#SitePerProcess | [optional] 
**system_dns_servers** | **List[str]** | List of the addesses of all OS level DNS servers configured in the device&#39;s network settings. | [optional] 
**third_party_blocking_enabled** | **bool** | Whether Chrome is blocking third-party software injection or not. This setting may be controlled by an enterprise policy: https://chromeenterprise.google/policies/?policy&#x3D;ThirdPartyBlockingEnabled. Available on Windows only. | [optional] 
**trigger** | **str** | The trigger which generated this set of signals. | [optional] 
**windows_machine_domain** | **str** | Windows domain that the current machine has joined. Available on Windows only. | [optional] 
**windows_user_domain** | **str** | Windows domain for the current OS user. Available on Windows only. | [optional] 

## Example

```python
from openapi_client.models.device_signals import DeviceSignals

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceSignals from a JSON string
device_signals_instance = DeviceSignals.from_json(json)
# print the JSON string representation of the object
print(DeviceSignals.to_json())

# convert the object into a dict
device_signals_dict = device_signals_instance.to_dict()
# create an instance of DeviceSignals from a dict
device_signals_from_dict = DeviceSignals.from_dict(device_signals_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


