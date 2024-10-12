# CreateNetworkMqttBrokerRequestSecurity

Security settings of the MQTT broker.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **str** | Security protocol of the MQTT broker. | [optional] 
**security** | [**CreateNetworkMqttBrokerRequestSecuritySecurity**](CreateNetworkMqttBrokerRequestSecuritySecurity.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_network_mqtt_broker_request_security import CreateNetworkMqttBrokerRequestSecurity

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkMqttBrokerRequestSecurity from a JSON string
create_network_mqtt_broker_request_security_instance = CreateNetworkMqttBrokerRequestSecurity.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkMqttBrokerRequestSecurity.to_json())

# convert the object into a dict
create_network_mqtt_broker_request_security_dict = create_network_mqtt_broker_request_security_instance.to_dict()
# create an instance of CreateNetworkMqttBrokerRequestSecurity from a dict
create_network_mqtt_broker_request_security_from_dict = CreateNetworkMqttBrokerRequestSecurity.from_dict(create_network_mqtt_broker_request_security_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


