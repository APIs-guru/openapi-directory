# Device

The device resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blocked** | **bool** | If a device is blocked, connections or requests from this device will fail. Can be used to temporarily prevent the device from connecting if, for example, the sensor is generating bad data and needs maintenance. | [optional] 
**config** | [**DeviceConfig**](DeviceConfig.md) |  | [optional] 
**credentials** | [**List[DeviceCredential]**](DeviceCredential.md) | The credentials used to authenticate this device. To allow credential rotation without interruption, multiple device credentials can be bound to this device. No more than 3 credentials can be bound to a single device at a time. When new credentials are added to a device, they are verified against the registry credentials. For details, see the description of the &#x60;DeviceRegistry.credentials&#x60; field. | [optional] 
**gateway_config** | [**GatewayConfig**](GatewayConfig.md) |  | [optional] 
**id** | **str** | The user-defined device identifier. The device ID must be unique within a device registry. | [optional] 
**last_config_ack_time** | **str** | [Output only] The last time a cloud-to-device config version acknowledgment was received from the device. This field is only for configurations sent through MQTT. | [optional] 
**last_config_send_time** | **str** | [Output only] The last time a cloud-to-device config version was sent to the device. | [optional] 
**last_error_status** | [**Status**](Status.md) |  | [optional] 
**last_error_time** | **str** | [Output only] The time the most recent error occurred, such as a failure to publish to Cloud Pub/Sub. This field is the timestamp of &#39;last_error_status&#39;. | [optional] 
**last_event_time** | **str** | [Output only] The last time a telemetry event was received. Timestamps are periodically collected and written to storage; they may be stale by a few minutes. | [optional] 
**last_heartbeat_time** | **str** | [Output only] The last time an MQTT &#x60;PINGREQ&#x60; was received. This field applies only to devices connecting through MQTT. MQTT clients usually only send &#x60;PINGREQ&#x60; messages if the connection is idle, and no other messages have been sent. Timestamps are periodically collected and written to storage; they may be stale by a few minutes. | [optional] 
**last_state_time** | **str** | [Output only] The last time a state event was received. Timestamps are periodically collected and written to storage; they may be stale by a few minutes. | [optional] 
**log_level** | **str** | **Beta Feature** The logging verbosity for device activity. If unspecified, DeviceRegistry.log_level will be used. | [optional] 
**metadata** | **Dict[str, str]** | The metadata key-value pairs assigned to the device. This metadata is not interpreted or indexed by Cloud IoT Core. It can be used to add contextual information for the device. Keys must conform to the regular expression a-zA-Z+ and be less than 128 bytes in length. Values are free-form strings. Each value must be less than or equal to 32 KB in size. The total size of all keys and values must be less than 256 KB, and the maximum number of key-value pairs is 500. | [optional] 
**name** | **str** | The resource path name. For example, &#x60;projects/p1/locations/us-central1/registries/registry0/devices/dev0&#x60; or &#x60;projects/p1/locations/us-central1/registries/registry0/devices/{num_id}&#x60;. When &#x60;name&#x60; is populated as a response from the service, it always ends in the device numeric ID. | [optional] 
**num_id** | **str** | [Output only] A server-defined unique numeric ID for the device. This is a more compact way to identify devices, and it is globally unique. | [optional] 
**state** | [**DeviceState**](DeviceState.md) |  | [optional] 

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


