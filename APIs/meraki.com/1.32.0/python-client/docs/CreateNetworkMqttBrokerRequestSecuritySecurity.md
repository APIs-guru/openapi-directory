# CreateNetworkMqttBrokerRequestSecuritySecurity

TLS settings of the MQTT broker.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ca_certificate** | **str** | CA Certificate of the MQTT broker. | [optional] 
**verify_hostnames** | **bool** | Whether the TLS hostname verification is enabled for the MQTT broker. | [optional] 

## Example

```python
from openapi_client.models.create_network_mqtt_broker_request_security_security import CreateNetworkMqttBrokerRequestSecuritySecurity

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkMqttBrokerRequestSecuritySecurity from a JSON string
create_network_mqtt_broker_request_security_security_instance = CreateNetworkMqttBrokerRequestSecuritySecurity.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkMqttBrokerRequestSecuritySecurity.to_json())

# convert the object into a dict
create_network_mqtt_broker_request_security_security_dict = create_network_mqtt_broker_request_security_security_instance.to_dict()
# create an instance of CreateNetworkMqttBrokerRequestSecuritySecurity from a dict
create_network_mqtt_broker_request_security_security_from_dict = CreateNetworkMqttBrokerRequestSecuritySecurity.from_dict(create_network_mqtt_broker_request_security_security_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


