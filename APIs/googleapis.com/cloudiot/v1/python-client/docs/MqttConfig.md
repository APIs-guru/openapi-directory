# MqttConfig

The configuration of MQTT for a device registry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mqtt_enabled_state** | **str** | If enabled, allows connections using the MQTT protocol. Otherwise, MQTT connections to this registry will fail. | [optional] 

## Example

```python
from openapi_client.models.mqtt_config import MqttConfig

# TODO update the JSON string below
json = "{}"
# create an instance of MqttConfig from a JSON string
mqtt_config_instance = MqttConfig.from_json(json)
# print the JSON string representation of the object
print(MqttConfig.to_json())

# convert the object into a dict
mqtt_config_dict = mqtt_config_instance.to_dict()
# create an instance of MqttConfig from a dict
mqtt_config_from_dict = MqttConfig.from_dict(mqtt_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


