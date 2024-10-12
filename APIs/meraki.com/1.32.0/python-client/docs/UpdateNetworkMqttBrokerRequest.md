# UpdateNetworkMqttBrokerRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authentication** | **object** | Authentication settings of the MQTT broker | [optional] 
**host** | **str** | Host name/IP address where the MQTT broker runs. | [optional] 
**name** | **str** | Name of the MQTT broker. | [optional] 
**port** | **int** | Host port though which the MQTT broker can be reached. | [optional] 
**security** | [**CreateNetworkMqttBrokerRequestSecurity**](CreateNetworkMqttBrokerRequestSecurity.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_network_mqtt_broker_request import UpdateNetworkMqttBrokerRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkMqttBrokerRequest from a JSON string
update_network_mqtt_broker_request_instance = UpdateNetworkMqttBrokerRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkMqttBrokerRequest.to_json())

# convert the object into a dict
update_network_mqtt_broker_request_dict = update_network_mqtt_broker_request_instance.to_dict()
# create an instance of UpdateNetworkMqttBrokerRequest from a dict
update_network_mqtt_broker_request_from_dict = UpdateNetworkMqttBrokerRequest.from_dict(update_network_mqtt_broker_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


