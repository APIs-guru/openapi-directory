# ApplicationPolicy

Policy for an individual app. Note: Application availability on a given device cannot be changed using this policy if installAppsDisabled is enabled. The maximum number of applications that you can specify per policy is 3,000.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessible_track_ids** | **List[str]** | List of the app’s track IDs that a device belonging to the enterprise can access. If the list contains multiple track IDs, devices receive the latest version among all accessible tracks. If the list contains no track IDs, devices only have access to the app’s production track. More details about each track are available in AppTrackInfo. | [optional] 
**always_on_vpn_lockdown_exemption** | **str** | Specifies whether the app is allowed networking when the VPN is not connected and alwaysOnVpnPackage.lockdownEnabled is enabled. If set to VPN_LOCKDOWN_ENFORCED, the app is not allowed networking, and if set to VPN_LOCKDOWN_EXEMPTION, the app is allowed networking. Only supported on devices running Android 10 and above. If this is not supported by the device, the device will contain a NonComplianceDetail with non_compliance_reason set to API_LEVEL and a fieldPath. If this is not applicable to the app, the device will contain a NonComplianceDetail with non_compliance_reason set to UNSUPPORTED and a fieldPath. The fieldPath is set to applications[i].alwaysOnVpnLockdownExemption, where i is the index of the package in the applications policy. | [optional] 
**auto_update_mode** | **str** | Controls the auto-update mode for the app. | [optional] 
**connected_work_and_personal_app** | **str** | Controls whether the app can communicate with itself across a device’s work and personal profiles, subject to user consent. | [optional] 
**credential_provider_policy** | **str** | Optional. Whether the app is allowed to act as a credential provider on Android 14 and above. | [optional] 
**default_permission_policy** | **str** | The default policy for all permissions requested by the app. If specified, this overrides the policy-level default_permission_policy which applies to all apps. It does not override the permission_grants which applies to all apps. | [optional] 
**delegated_scopes** | **List[str]** | The scopes delegated to the app from Android Device Policy. These provide additional privileges for the applications they are applied to. | [optional] 
**disabled** | **bool** | Whether the app is disabled. When disabled, the app data is still preserved. | [optional] 
**extension_config** | [**ExtensionConfig**](ExtensionConfig.md) |  | [optional] 
**install_constraint** | [**List[InstallConstraint]**](InstallConstraint.md) | Optional. The constraints for installing the app. You can specify a maximum of one InstallConstraint. Multiple constraints are rejected. | [optional] 
**install_priority** | **int** | Optional. Amongst apps with installType set to: FORCE_INSTALLED PREINSTALLEDthis controls the relative priority of installation. A value of 0 (default) means this app has no priority over other apps. For values between 1 and 10,000, a lower value means a higher priority. Values outside of the range 0 to 10,000 inclusive are rejected. | [optional] 
**install_type** | **str** | The type of installation to perform. | [optional] 
**lock_task_allowed** | **bool** | Whether the app is allowed to lock itself in full-screen mode. DEPRECATED. Use InstallType KIOSK or kioskCustomLauncherEnabled to configure a dedicated device. | [optional] 
**managed_configuration** | **Dict[str, object]** | Managed configuration applied to the app. The format for the configuration is dictated by the ManagedProperty values supported by the app. Each field name in the managed configuration must match the key field of the ManagedProperty. The field value must be compatible with the type of the ManagedProperty: *type* *JSON value* BOOL true or false STRING string INTEGER number CHOICE string MULTISELECT array of strings HIDDEN string BUNDLE_ARRAY array of objects  | [optional] 
**managed_configuration_template** | [**ManagedConfigurationTemplate**](ManagedConfigurationTemplate.md) |  | [optional] 
**minimum_version_code** | **int** | The minimum version of the app that runs on the device. If set, the device attempts to update the app to at least this version code. If the app is not up-to-date, the device will contain a NonComplianceDetail with non_compliance_reason set to APP_NOT_UPDATED. The app must already be published to Google Play with a version code greater than or equal to this value. At most 20 apps may specify a minimum version code per policy. | [optional] 
**package_name** | **str** | The package name of the app. For example, com.google.android.youtube for the YouTube app. | [optional] 
**permission_grants** | [**List[PermissionGrant]**](PermissionGrant.md) | Explicit permission grants or denials for the app. These values override the default_permission_policy and permission_grants which apply to all apps. | [optional] 
**work_profile_widgets** | **str** | Specifies whether the app installed in the work profile is allowed to add widgets to the home screen. | [optional] 

## Example

```python
from openapi_client.models.application_policy import ApplicationPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationPolicy from a JSON string
application_policy_instance = ApplicationPolicy.from_json(json)
# print the JSON string representation of the object
print(ApplicationPolicy.to_json())

# convert the object into a dict
application_policy_dict = application_policy_instance.to_dict()
# create an instance of ApplicationPolicy from a dict
application_policy_from_dict = ApplicationPolicy.from_dict(application_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


