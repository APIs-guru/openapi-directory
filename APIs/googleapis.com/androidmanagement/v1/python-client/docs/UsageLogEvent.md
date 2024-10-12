# UsageLogEvent

An event logged on the device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adb_shell_command_event** | [**AdbShellCommandEvent**](AdbShellCommandEvent.md) |  | [optional] 
**adb_shell_interactive_event** | **object** | An ADB interactive shell was opened via “adb shell”. Intentionally empty. | [optional] 
**app_process_start_event** | [**AppProcessStartEvent**](AppProcessStartEvent.md) |  | [optional] 
**cert_authority_installed_event** | [**CertAuthorityInstalledEvent**](CertAuthorityInstalledEvent.md) |  | [optional] 
**cert_authority_removed_event** | [**CertAuthorityRemovedEvent**](CertAuthorityRemovedEvent.md) |  | [optional] 
**cert_validation_failure_event** | [**CertValidationFailureEvent**](CertValidationFailureEvent.md) |  | [optional] 
**connect_event** | [**ConnectEvent**](ConnectEvent.md) |  | [optional] 
**crypto_self_test_completed_event** | [**CryptoSelfTestCompletedEvent**](CryptoSelfTestCompletedEvent.md) |  | [optional] 
**dns_event** | [**DnsEvent**](DnsEvent.md) |  | [optional] 
**enrollment_complete_event** | **object** | Represents that the device has completed enrollment. User should be in the launcher at this point, device at this point will be compliant and all setup steps have been completed. Intentionally empty. | [optional] 
**event_id** | **str** | Unique id of the event. | [optional] 
**event_time** | **str** | Device timestamp when the event was logged. | [optional] 
**event_type** | **str** | The particular usage log event type that was reported on the device. Use this to determine which event field to access. | [optional] 
**file_pulled_event** | [**FilePulledEvent**](FilePulledEvent.md) |  | [optional] 
**file_pushed_event** | [**FilePushedEvent**](FilePushedEvent.md) |  | [optional] 
**key_destruction_event** | [**KeyDestructionEvent**](KeyDestructionEvent.md) |  | [optional] 
**key_generated_event** | [**KeyGeneratedEvent**](KeyGeneratedEvent.md) |  | [optional] 
**key_import_event** | [**KeyImportEvent**](KeyImportEvent.md) |  | [optional] 
**key_integrity_violation_event** | [**KeyIntegrityViolationEvent**](KeyIntegrityViolationEvent.md) |  | [optional] 
**keyguard_dismiss_auth_attempt_event** | [**KeyguardDismissAuthAttemptEvent**](KeyguardDismissAuthAttemptEvent.md) |  | [optional] 
**keyguard_dismissed_event** | **object** | The keyguard was dismissed. Intentionally empty. | [optional] 
**keyguard_secured_event** | **object** | The device was locked either by user or timeout. Intentionally empty. | [optional] 
**log_buffer_size_critical_event** | **object** | The usageLog buffer on the device has reached 90% of its capacity, therefore older events may be dropped. Intentionally empty. | [optional] 
**logging_started_event** | **object** | usageLog policy has been enabled. Intentionally empty. | [optional] 
**logging_stopped_event** | **object** | usageLog policy has been disabled. Intentionally empty. | [optional] 
**lost_mode_location_event** | [**LostModeLocationEvent**](LostModeLocationEvent.md) |  | [optional] 
**lost_mode_outgoing_phone_call_event** | **object** | An event indicating an outgoing phone call has been made when a device is in lost mode. Intentionally empty. | [optional] 
**media_mount_event** | [**MediaMountEvent**](MediaMountEvent.md) |  | [optional] 
**media_unmount_event** | [**MediaUnmountEvent**](MediaUnmountEvent.md) |  | [optional] 
**os_shutdown_event** | **object** | Device was shutdown. Intentionally empty. | [optional] 
**os_startup_event** | [**OsStartupEvent**](OsStartupEvent.md) |  | [optional] 
**remote_lock_event** | [**RemoteLockEvent**](RemoteLockEvent.md) |  | [optional] 
**stop_lost_mode_user_attempt_event** | [**StopLostModeUserAttemptEvent**](StopLostModeUserAttemptEvent.md) |  | [optional] 
**wipe_failure_event** | **object** | The work profile or company-owned device failed to wipe when requested. This could be user initiated or admin initiated e.g. delete was received. Intentionally empty. | [optional] 

## Example

```python
from openapi_client.models.usage_log_event import UsageLogEvent

# TODO update the JSON string below
json = "{}"
# create an instance of UsageLogEvent from a JSON string
usage_log_event_instance = UsageLogEvent.from_json(json)
# print the JSON string representation of the object
print(UsageLogEvent.to_json())

# convert the object into a dict
usage_log_event_dict = usage_log_event_instance.to_dict()
# create an instance of UsageLogEvent from a dict
usage_log_event_from_dict = UsageLogEvent.from_dict(usage_log_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


