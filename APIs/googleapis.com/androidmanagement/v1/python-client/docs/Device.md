# Device

A device owned by an enterprise. Unless otherwise noted, all fields are read-only and can't be modified by enterprises.devices.patch.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_level** | **int** | The API level of the Android platform version running on the device. | [optional] 
**application_reports** | [**List[ApplicationReport]**](ApplicationReport.md) | Reports for apps installed on the device. This information is only available when application_reports_enabled is true in the device&#39;s policy. | [optional] 
**applied_password_policies** | [**List[PasswordRequirements]**](PasswordRequirements.md) | The password requirements currently applied to the device. The applied requirements may be slightly different from those specified in passwordPolicies in some cases. fieldPath is set based on passwordPolicies. | [optional] 
**applied_policy_name** | **str** | The name of the policy currently applied to the device. | [optional] 
**applied_policy_version** | **str** | The version of the policy currently applied to the device. | [optional] 
**applied_state** | **str** | The state currently applied to the device. | [optional] 
**common_criteria_mode_info** | [**CommonCriteriaModeInfo**](CommonCriteriaModeInfo.md) |  | [optional] 
**device_settings** | [**DeviceSettings**](DeviceSettings.md) |  | [optional] 
**disabled_reason** | [**UserFacingMessage**](UserFacingMessage.md) |  | [optional] 
**displays** | [**List[Display]**](Display.md) | Detailed information about displays on the device. This information is only available if displayInfoEnabled is true in the device&#39;s policy. | [optional] 
**dpc_migration_info** | [**DpcMigrationInfo**](DpcMigrationInfo.md) |  | [optional] 
**enrollment_time** | **str** | The time of device enrollment. | [optional] 
**enrollment_token_data** | **str** | If the device was enrolled with an enrollment token with additional data provided, this field contains that data. | [optional] 
**enrollment_token_name** | **str** | If the device was enrolled with an enrollment token, this field contains the name of the token. | [optional] 
**hardware_info** | [**HardwareInfo**](HardwareInfo.md) |  | [optional] 
**hardware_status_samples** | [**List[HardwareStatus]**](HardwareStatus.md) | Hardware status samples in chronological order. This information is only available if hardwareStatusEnabled is true in the device&#39;s policy. | [optional] 
**last_policy_compliance_report_time** | **str** | Deprecated. | [optional] 
**last_policy_sync_time** | **str** | The last time the device fetched its policy. | [optional] 
**last_status_report_time** | **str** | The last time the device sent a status report. | [optional] 
**management_mode** | **str** | The type of management mode Android Device Policy takes on the device. This influences which policy settings are supported. | [optional] 
**memory_events** | [**List[MemoryEvent]**](MemoryEvent.md) | Events related to memory and storage measurements in chronological order. This information is only available if memoryInfoEnabled is true in the device&#39;s policy.Events are retained for a certain period of time and old events are deleted. | [optional] 
**memory_info** | [**MemoryInfo**](MemoryInfo.md) |  | [optional] 
**name** | **str** | The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}. | [optional] 
**network_info** | [**NetworkInfo**](NetworkInfo.md) |  | [optional] 
**non_compliance_details** | [**List[NonComplianceDetail]**](NonComplianceDetail.md) | Details about policy settings that the device is not compliant with. | [optional] 
**ownership** | **str** | Ownership of the managed device. | [optional] 
**policy_compliant** | **bool** | Whether the device is compliant with its policy. | [optional] 
**policy_name** | **str** | The name of the policy applied to the device, in the form enterprises/{enterpriseId}/policies/{policyId}. If not specified, the policy_name for the device&#39;s user is applied. This field can be modified by a patch request. You can specify only the policyId when calling enterprises.devices.patch, as long as the policyId doesn’t contain any slashes. The rest of the policy name is inferred. | [optional] 
**power_management_events** | [**List[PowerManagementEvent]**](PowerManagementEvent.md) | Power management events on the device in chronological order. This information is only available if powerManagementEventsEnabled is true in the device&#39;s policy. | [optional] 
**previous_device_names** | **List[str]** | If the same physical device has been enrolled multiple times, this field contains its previous device names. The serial number is used as the unique identifier to determine if the same physical device has enrolled previously. The names are in chronological order. | [optional] 
**security_posture** | [**SecurityPosture**](SecurityPosture.md) |  | [optional] 
**software_info** | [**SoftwareInfo**](SoftwareInfo.md) |  | [optional] 
**state** | **str** | The state to be applied to the device. This field can be modified by a patch request. Note that when calling enterprises.devices.patch, ACTIVE and DISABLED are the only allowable values. To enter the device into a DELETED state, call enterprises.devices.delete. | [optional] 
**system_properties** | **Dict[str, str]** | Map of selected system properties name and value related to the device. This information is only available if systemPropertiesEnabled is true in the device&#39;s policy. | [optional] 
**user** | [**User**](User.md) |  | [optional] 
**user_name** | **str** | The resource name of the user that owns this device in the form enterprises/{enterpriseId}/users/{userId}. | [optional] 

## Example

```python
from openapi_client.models.device import Device

# TODO update the JSON string below
json = "{}"
# create an instance of Device from a JSON string
device_instance = Device.from_json(json)
# print the JSON string representation of the object
print(Device.to_json())

# convert the object into a dict
device_dict = device_instance.to_dict()
# create an instance of Device from a dict
device_from_dict = Device.from_dict(device_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


