# ServiceBusMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authentication** | [**ServiceBusAuthentication**](ServiceBusAuthentication.md) |  | [optional] 
**brokered_message_properties** | [**ServiceBusBrokeredMessageProperties**](ServiceBusBrokeredMessageProperties.md) |  | [optional] 
**custom_message_properties** | **Dict[str, str]** | Gets or sets the custom message properties. | [optional] 
**message** | **str** | Gets or sets the message. | [optional] 
**namespace** | **str** | Gets or sets the namespace. | [optional] 
**transport_type** | **str** | Gets or sets the transport type. | [optional] 

## Example

```python
from openapi_client.models.service_bus_message import ServiceBusMessage

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceBusMessage from a JSON string
service_bus_message_instance = ServiceBusMessage.from_json(json)
# print the JSON string representation of the object
print(ServiceBusMessage.to_json())

# convert the object into a dict
service_bus_message_dict = service_bus_message_instance.to_dict()
# create an instance of ServiceBusMessage from a dict
service_bus_message_from_dict = ServiceBusMessage.from_dict(service_bus_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


