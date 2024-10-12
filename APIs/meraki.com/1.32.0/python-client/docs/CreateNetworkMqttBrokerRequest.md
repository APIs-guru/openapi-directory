# CreateNetworkMqttBrokerRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authentication** | **object** | Authentication settings of the MQTT broker | [optional] 
**host** | **str** | Host name/IP address where the MQTT broker runs. | 
**name** | **str** | Name of the MQTT broker. | 
**port** | **int** | Host port though which the MQTT broker can be reached. | 
**security** | [**CreateNetworkMqttBrokerRequestSecurity**](CreateNetworkMqttBrokerRequestSecurity.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_network_mqtt_broker_request import CreateNetworkMqttBrokerRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkMqttBrokerRequest from a JSON string
create_network_mqtt_broker_request_instance = CreateNetworkMqttBrokerRequest.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkMqttBrokerRequest.to_json())

# convert the object into a dict
create_network_mqtt_broker_request_dict = create_network_mqtt_broker_request_instance.to_dict()
# create an instance of CreateNetworkMqttBrokerRequest from a dict
create_network_mqtt_broker_request_from_dict = CreateNetworkMqttBrokerRequest.from_dict(create_network_mqtt_broker_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


