# Policy

A policy resource represents a group of settings that govern the behavior of a managed device and the apps installed on it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_types_with_management_disabled** | **List[str]** | Account types that can&#39;t be managed by the user. | [optional] 
**add_user_disabled** | **bool** | Whether adding new users and profiles is disabled. | [optional] 
**adjust_volume_disabled** | **bool** | Whether adjusting the master volume is disabled. Also mutes the device. | [optional] 
**advanced_security_overrides** | [**AdvancedSecurityOverrides**](AdvancedSecurityOverrides.md) |  | [optional] 
**always_on_vpn_package** | [**AlwaysOnVpnPackage**](AlwaysOnVpnPackage.md) |  | [optional] 
**android_device_policy_tracks** | **List[str]** | This setting is not supported. Any value is ignored. | [optional] 
**app_auto_update_policy** | **str** | Recommended alternative: autoUpdateMode which is set per app, provides greater flexibility around update frequency.When autoUpdateMode is set to AUTO_UPDATE_POSTPONED or AUTO_UPDATE_HIGH_PRIORITY, this field has no effect.The app auto update policy, which controls when automatic app updates can be applied. | [optional] 
**applications** | [**List[ApplicationPolicy]**](ApplicationPolicy.md) | Policy applied to apps. This can have at most 3,000 elements. | [optional] 
**auto_date_and_time_zone** | **str** | Whether auto date, time, and time zone are enabled on a company-owned device. If this is set, then autoTimeRequired is ignored. | [optional] 
**auto_time_required** | **bool** | Whether auto time is required, which prevents the user from manually setting the date and time. If autoDateAndTimeZone is set, this field is ignored. | [optional] 
**block_applications_enabled** | **bool** | Whether applications other than the ones configured in applications are blocked from being installed. When set, applications that were installed under a previous policy but no longer appear in the policy are automatically uninstalled. | [optional] 
**bluetooth_config_disabled** | **bool** | Whether configuring bluetooth is disabled. | [optional] 
**bluetooth_contact_sharing_disabled** | **bool** | Whether bluetooth contact sharing is disabled. | [optional] 
**bluetooth_disabled** | **bool** | Whether bluetooth is disabled. Prefer this setting over bluetooth_config_disabled because bluetooth_config_disabled can be bypassed by the user. | [optional] 
**camera_access** | **str** | Controls the use of the camera and whether the user has access to the camera access toggle. | [optional] 
**camera_disabled** | **bool** | If camera_access is set to any value other than CAMERA_ACCESS_UNSPECIFIED, this has no effect. Otherwise this field controls whether cameras are disabled: If true, all cameras are disabled, otherwise they are available. For fully managed devices this field applies for all apps on the device. For work profiles, this field applies only to apps in the work profile, and the camera access of apps outside the work profile is unaffected. | [optional] 
**cell_broadcasts_config_disabled** | **bool** | Whether configuring cell broadcast is disabled. | [optional] 
**choose_private_key_rules** | [**List[ChoosePrivateKeyRule]**](ChoosePrivateKeyRule.md) | Rules for determining apps&#39; access to private keys. See ChoosePrivateKeyRule for details. This must be empty if any application has CERT_SELECTION delegation scope. | [optional] 
**compliance_rules** | [**List[ComplianceRule]**](ComplianceRule.md) | Rules declaring which mitigating actions to take when a device is not compliant with its policy. When the conditions for multiple rules are satisfied, all of the mitigating actions for the rules are taken. There is a maximum limit of 100 rules. Use policy enforcement rules instead. | [optional] 
**create_windows_disabled** | **bool** | Whether creating windows besides app windows is disabled. | [optional] 
**credential_provider_policy_default** | **str** | Controls which apps are allowed to act as credential providers on Android 14 and above. These apps store credentials, see this (https://developer.android.com/training/sign-in/passkeys) and this (https://developer.android.com/reference/androidx/credentials/CredentialManager) for details. See also credentialProviderPolicy. | [optional] 
**credentials_config_disabled** | **bool** | Whether configuring user credentials is disabled. | [optional] 
**cross_profile_policies** | [**CrossProfilePolicies**](CrossProfilePolicies.md) |  | [optional] 
**data_roaming_disabled** | **bool** | Whether roaming data services are disabled. | [optional] 
**debugging_features_allowed** | **bool** | Whether the user is allowed to enable debugging features. | [optional] 
**default_permission_policy** | **str** | The default permission policy for runtime permission requests. | [optional] 
**device_connectivity_management** | [**DeviceConnectivityManagement**](DeviceConnectivityManagement.md) |  | [optional] 
**device_owner_lock_screen_info** | [**UserFacingMessage**](UserFacingMessage.md) |  | [optional] 
**device_radio_state** | [**DeviceRadioState**](DeviceRadioState.md) |  | [optional] 
**encryption_policy** | **str** | Whether encryption is enabled | [optional] 
**ensure_verify_apps_enabled** | **bool** | Whether app verification is force-enabled. | [optional] 
**factory_reset_disabled** | **bool** | Whether factory resetting from settings is disabled. | [optional] 
**frp_admin_emails** | **List[str]** | Email addresses of device administrators for factory reset protection. When the device is factory reset, it will require one of these admins to log in with the Google account email and password to unlock the device. If no admins are specified, the device won&#39;t provide factory reset protection. | [optional] 
**fun_disabled** | **bool** | Whether the user is allowed to have fun. Controls whether the Easter egg game in Settings is disabled. | [optional] 
**install_apps_disabled** | **bool** | Whether user installation of apps is disabled. | [optional] 
**install_unknown_sources_allowed** | **bool** | This field has no effect. | [optional] 
**keyguard_disabled** | **bool** | If true, this disables the Lock Screen (https://source.android.com/docs/core/display/multi_display/lock-screen) for primary and/or secondary displays. | [optional] 
**keyguard_disabled_features** | **List[str]** | Disabled keyguard customizations, such as widgets. | [optional] 
**kiosk_custom_launcher_enabled** | **bool** | Whether the kiosk custom launcher is enabled. This replaces the home screen with a launcher that locks down the device to the apps installed via the applications setting. Apps appear on a single page in alphabetical order. Use kioskCustomization to further configure the kiosk device behavior. | [optional] 
**kiosk_customization** | [**KioskCustomization**](KioskCustomization.md) |  | [optional] 
**location_mode** | **str** | The degree of location detection enabled. | [optional] 
**long_support_message** | [**UserFacingMessage**](UserFacingMessage.md) |  | [optional] 
**maximum_time_to_lock** | **str** | Maximum time in milliseconds for user activity until the device locks. A value of 0 means there is no restriction. | [optional] 
**microphone_access** | **str** | Controls the use of the microphone and whether the user has access to the microphone access toggle. This applies only on fully managed devices. | [optional] 
**minimum_api_level** | **int** | The minimum allowed Android API level. | [optional] 
**mobile_networks_config_disabled** | **bool** | Whether configuring mobile networks is disabled. | [optional] 
**modify_accounts_disabled** | **bool** | Whether adding or removing accounts is disabled. | [optional] 
**mount_physical_media_disabled** | **bool** | Whether the user mounting physical external media is disabled. | [optional] 
**name** | **str** | The name of the policy in the form enterprises/{enterpriseId}/policies/{policyId}. | [optional] 
**network_escape_hatch_enabled** | **bool** | Whether the network escape hatch is enabled. If a network connection can&#39;t be made at boot time, the escape hatch prompts the user to temporarily connect to a network in order to refresh the device policy. After applying policy, the temporary network will be forgotten and the device will continue booting. This prevents being unable to connect to a network if there is no suitable network in the last policy and the device boots into an app in lock task mode, or the user is otherwise unable to reach device settings.Note: Setting wifiConfigDisabled to true will override this setting under specific circumstances. Please see wifiConfigDisabled for further details. Setting configureWifi to DISALLOW_CONFIGURING_WIFI will override this setting under specific circumstances. Please see DISALLOW_CONFIGURING_WIFI for further details. | [optional] 
**network_reset_disabled** | **bool** | Whether resetting network settings is disabled. | [optional] 
**onc_certificate_providers** | [**List[OncCertificateProvider]**](OncCertificateProvider.md) | This feature is not generally available. | [optional] 
**open_network_configuration** | **Dict[str, object]** | Network configuration for the device. See configure networks for more information. | [optional] 
**outgoing_beam_disabled** | **bool** | Whether using NFC to beam data from apps is disabled. | [optional] 
**outgoing_calls_disabled** | **bool** | Whether outgoing calls are disabled. | [optional] 
**password_policies** | [**List[PasswordRequirements]**](PasswordRequirements.md) | Password requirement policies. Different policies can be set for work profile or fully managed devices by setting the password_scope field in the policy. | [optional] 
**password_requirements** | [**PasswordRequirements**](PasswordRequirements.md) |  | [optional] 
**permission_grants** | [**List[PermissionGrant]**](PermissionGrant.md) | Explicit permission or group grants or denials for all apps. These values override the default_permission_policy. | [optional] 
**permitted_accessibility_services** | [**PackageNameList**](PackageNameList.md) |  | [optional] 
**permitted_input_methods** | [**PackageNameList**](PackageNameList.md) |  | [optional] 
**persistent_preferred_activities** | [**List[PersistentPreferredActivity]**](PersistentPreferredActivity.md) | Default intent handler activities. | [optional] 
**personal_usage_policies** | [**PersonalUsagePolicies**](PersonalUsagePolicies.md) |  | [optional] 
**play_store_mode** | **str** | This mode controls which apps are available to the user in the Play Store and the behavior on the device when apps are removed from the policy. | [optional] 
**policy_enforcement_rules** | [**List[PolicyEnforcementRule]**](PolicyEnforcementRule.md) | Rules that define the behavior when a particular policy can not be applied on device | [optional] 
**preferential_network_service** | **str** | Controls whether preferential network service is enabled on the work profile. For example, an organization may have an agreement with a carrier that all of the work data from its employees&#39; devices will be sent via a network service dedicated for enterprise use. An example of a supported preferential network service is the enterprise slice on 5G networks. This has no effect on fully managed devices. | [optional] 
**printing_policy** | **str** | Optional. Controls whether printing is allowed. This is supported on devices running Android 9 and above. . | [optional] 
**private_key_selection_enabled** | **bool** | Allows showing UI on a device for a user to choose a private key alias if there are no matching rules in ChoosePrivateKeyRules. For devices below Android P, setting this may leave enterprise keys vulnerable. This value will have no effect if any application has CERT_SELECTION delegation scope. | [optional] 
**recommended_global_proxy** | [**ProxyInfo**](ProxyInfo.md) |  | [optional] 
**remove_user_disabled** | **bool** | Whether removing other users is disabled. | [optional] 
**safe_boot_disabled** | **bool** | Whether rebooting the device into safe boot is disabled. | [optional] 
**screen_capture_disabled** | **bool** | Whether screen capture is disabled. | [optional] 
**set_user_icon_disabled** | **bool** | Whether changing the user icon is disabled. | [optional] 
**set_wallpaper_disabled** | **bool** | Whether changing the wallpaper is disabled. | [optional] 
**setup_actions** | [**List[SetupAction]**](SetupAction.md) | Action to take during the setup process. At most one action may be specified. | [optional] 
**share_location_disabled** | **bool** | Whether location sharing is disabled. share_location_disabled is supported for both fully managed devices and personally owned work profiles. | [optional] 
**short_support_message** | [**UserFacingMessage**](UserFacingMessage.md) |  | [optional] 
**skip_first_use_hints_enabled** | **bool** | Flag to skip hints on the first use. Enterprise admin can enable the system recommendation for apps to skip their user tutorial and other introductory hints on first start-up. | [optional] 
**sms_disabled** | **bool** | Whether sending and receiving SMS messages is disabled. | [optional] 
**status_bar_disabled** | **bool** | Whether the status bar is disabled. This disables notifications, quick settings, and other screen overlays that allow escape from full-screen mode. DEPRECATED. To disable the status bar on a kiosk device, use InstallType KIOSK or kioskCustomLauncherEnabled. | [optional] 
**status_reporting_settings** | [**StatusReportingSettings**](StatusReportingSettings.md) |  | [optional] 
**stay_on_plugged_modes** | **List[str]** | The battery plugged in modes for which the device stays on. When using this setting, it is recommended to clear maximum_time_to_lock so that the device doesn&#39;t lock itself while it stays on. | [optional] 
**system_update** | [**SystemUpdate**](SystemUpdate.md) |  | [optional] 
**tethering_config_disabled** | **bool** | Whether configuring tethering and portable hotspots is disabled. If tetheringSettings is set to anything other than TETHERING_SETTINGS_UNSPECIFIED, this setting is ignored. | [optional] 
**uninstall_apps_disabled** | **bool** | Whether user uninstallation of applications is disabled. This prevents apps from being uninstalled, even those removed using applications | [optional] 
**unmute_microphone_disabled** | **bool** | If microphone_access is set to any value other than MICROPHONE_ACCESS_UNSPECIFIED, this has no effect. Otherwise this field controls whether microphones are disabled: If true, all microphones are disabled, otherwise they are available. This is available only on fully managed devices. | [optional] 
**usage_log** | [**UsageLog**](UsageLog.md) |  | [optional] 
**usb_file_transfer_disabled** | **bool** | Whether transferring files over USB is disabled. This is supported only on company-owned devices. | [optional] 
**usb_mass_storage_enabled** | **bool** | Whether USB storage is enabled. Deprecated. | [optional] 
**version** | **str** | The version of the policy. This is a read-only field. The version is incremented each time the policy is updated. | [optional] 
**vpn_config_disabled** | **bool** | Whether configuring VPN is disabled. | [optional] 
**wifi_config_disabled** | **bool** | Whether configuring Wi-Fi networks is disabled. Supported on fully managed devices and work profiles on company-owned devices. For fully managed devices, setting this to true removes all configured networks and retains only the networks configured using openNetworkConfiguration. For work profiles on company-owned devices, existing configured networks are not affected and the user is not allowed to add, remove, or modify Wi-Fi networks. If configureWifi is set to anything other than CONFIGURE_WIFI_UNSPECIFIED, this setting is ignored. Note: If a network connection can&#39;t be made at boot time and configuring Wi-Fi is disabled then network escape hatch will be shown in order to refresh the device policy (see networkEscapeHatchEnabled). | [optional] 
**wifi_configs_lockdown_enabled** | **bool** | DEPRECATED - Use wifi_config_disabled. | [optional] 

## Example

```python
from openapi_client.models.policy import Policy

# TODO update the JSON string below
json = "{}"
# create an instance of Policy from a JSON string
policy_instance = Policy.from_json(json)
# print the JSON string representation of the object
print(Policy.to_json())

# convert the object into a dict
policy_dict = policy_instance.to_dict()
# create an instance of Policy from a dict
policy_from_dict = Policy.from_dict(policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


