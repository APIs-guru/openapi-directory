# DeviceRegistry

A container for a group of devices.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | [**List[RegistryCredential]**](RegistryCredential.md) | The credentials used to verify the device credentials. No more than 10 credentials can be bound to a single registry at a time. The verification process occurs at the time of device creation or update. If this field is empty, no verification is performed. Otherwise, the credentials of a newly created device or added credentials of an updated device should be signed with one of these registry credentials. Note, however, that existing devices will never be affected by modifications to this list of credentials: after a device has been successfully created in a registry, it should be able to connect even if its registry credentials are revoked, deleted, or modified. | [optional] 
**event_notification_configs** | [**List[EventNotificationConfig]**](EventNotificationConfig.md) | The configuration for notification of telemetry events received from the device. All telemetry events that were successfully published by the device and acknowledged by Cloud IoT Core are guaranteed to be delivered to Cloud Pub/Sub. If multiple configurations match a message, only the first matching configuration is used. If you try to publish a device telemetry event using MQTT without specifying a Cloud Pub/Sub topic for the device&#39;s registry, the connection closes automatically. If you try to do so using an HTTP connection, an error is returned. Up to 10 configurations may be provided. | [optional] 
**http_config** | [**HttpConfig**](HttpConfig.md) |  | [optional] 
**id** | **str** | The identifier of this device registry. For example, &#x60;myRegistry&#x60;. | [optional] 
**log_level** | **str** | **Beta Feature** The default logging verbosity for activity from devices in this registry. The verbosity level can be overridden by Device.log_level. | [optional] 
**mqtt_config** | [**MqttConfig**](MqttConfig.md) |  | [optional] 
**name** | **str** | The resource path name. For example, &#x60;projects/example-project/locations/us-central1/registries/my-registry&#x60;. | [optional] 
**state_notification_config** | [**StateNotificationConfig**](StateNotificationConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.device_registry import DeviceRegistry

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceRegistry from a JSON string
device_registry_instance = DeviceRegistry.from_json(json)
# print the JSON string representation of the object
print(DeviceRegistry.to_json())

# convert the object into a dict
device_registry_dict = device_registry_instance.to_dict()
# create an instance of DeviceRegistry from a dict
device_registry_from_dict = DeviceRegistry.from_dict(device_registry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


