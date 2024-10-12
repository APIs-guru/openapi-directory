# DeviceSession

Protobuf message describing the device message, used from several RPCs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_start_time** | **str** | Output only. The timestamp that the session first became ACTIVE. | [optional] [readonly] 
**android_device** | [**AndroidDevice**](AndroidDevice.md) |  | [optional] 
**create_time** | **str** | Output only. The time that the Session was created. | [optional] [readonly] 
**display_name** | **str** | Output only. The title of the DeviceSession to be presented in the UI. | [optional] [readonly] 
**expire_time** | **str** | Optional. If the device is still in use at this time, any connections will be ended and the SessionState will transition from ACTIVE to FINISHED. | [optional] 
**inactivity_timeout** | **str** | Output only. The interval of time that this device must be interacted with before it transitions from ACTIVE to TIMEOUT_INACTIVITY. | [optional] [readonly] 
**name** | **str** | Optional. Name of the DeviceSession, e.g. \&quot;projects/{project_id}/deviceSessions/{session_id}\&quot; | [optional] 
**state** | **str** | Output only. Current state of the DeviceSession. | [optional] [readonly] 
**state_histories** | [**List[SessionStateEvent]**](SessionStateEvent.md) | Output only. The historical state transitions of the session_state message including the current session state. | [optional] [readonly] 
**ttl** | **str** | Optional. The amount of time that a device will be initially allocated for. This can eventually be extended with the UpdateDeviceSession RPC. Default: 30 minutes. | [optional] 

## Example

```python
from openapi_client.models.device_session import DeviceSession

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceSession from a JSON string
device_session_instance = DeviceSession.from_json(json)
# print the JSON string representation of the object
print(DeviceSession.to_json())

# convert the object into a dict
device_session_dict = device_session_instance.to_dict()
# create an instance of DeviceSession from a dict
device_session_from_dict = DeviceSession.from_dict(device_session_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


