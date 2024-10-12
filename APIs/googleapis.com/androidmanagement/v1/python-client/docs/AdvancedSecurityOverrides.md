# AdvancedSecurityOverrides

Advanced security settings. In most cases, setting these is not needed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common_criteria_mode** | **str** | Controls Common Criteria Mode—security standards defined in the Common Criteria for Information Technology Security Evaluation (https://www.commoncriteriaportal.org/) (CC). Enabling Common Criteria Mode increases certain security components on a device, including AES-GCM encryption of Bluetooth Long Term Keys, and Wi-Fi configuration stores.Warning: Common Criteria Mode enforces a strict security model typically only required for IT products used in national security systems and other highly sensitive organizations. Standard device use may be affected. Only enabled if required. | [optional] 
**developer_settings** | **str** | Controls access to developer settings: developer options and safe boot. Replaces safeBootDisabled (deprecated) and debuggingFeaturesAllowed (deprecated). | [optional] 
**google_play_protect_verify_apps** | **str** | Whether Google Play Protect verification (https://support.google.com/accounts/answer/2812853) is enforced. Replaces ensureVerifyAppsEnabled (deprecated). | [optional] 
**mte_policy** | **str** | Optional. Controls Memory Tagging Extension (MTE) (https://source.android.com/docs/security/test/memory-safety/arm-mte) on the device. The device needs to be rebooted to apply changes to the MTE policy. | [optional] 
**personal_apps_that_can_read_work_notifications** | **List[str]** | Personal apps that can read work profile notifications using a NotificationListenerService (https://developer.android.com/reference/android/service/notification/NotificationListenerService). By default, no personal apps (aside from system apps) can read work notifications. Each value in the list must be a package name. | [optional] 
**untrusted_apps_policy** | **str** | The policy for untrusted apps (apps from unknown sources) enforced on the device. Replaces install_unknown_sources_allowed (deprecated). | [optional] 

## Example

```python
from openapi_client.models.advanced_security_overrides import AdvancedSecurityOverrides

# TODO update the JSON string below
json = "{}"
# create an instance of AdvancedSecurityOverrides from a JSON string
advanced_security_overrides_instance = AdvancedSecurityOverrides.from_json(json)
# print the JSON string representation of the object
print(AdvancedSecurityOverrides.to_json())

# convert the object into a dict
advanced_security_overrides_dict = advanced_security_overrides_instance.to_dict()
# create an instance of AdvancedSecurityOverrides from a dict
advanced_security_overrides_from_dict = AdvancedSecurityOverrides.from_dict(advanced_security_overrides_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


