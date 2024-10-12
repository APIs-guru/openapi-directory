# ServiceBusQueueMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**queue_name** | **str** | Gets or sets the queue name. | [optional] 
**authentication** | [**ServiceBusAuthentication**](ServiceBusAuthentication.md) |  | [optional] 
**brokered_message_properties** | [**ServiceBusBrokeredMessageProperties**](ServiceBusBrokeredMessageProperties.md) |  | [optional] 
**custom_message_properties** | **Dict[str, str]** | Gets or sets the custom message properties. | [optional] 
**message** | **str** | Gets or sets the message. | [optional] 
**namespace** | **str** | Gets or sets the namespace. | [optional] 
**transport_type** | **str** | Gets or sets the transport type. | [optional] 

## Example

```python
from openapi_client.models.service_bus_queue_message import ServiceBusQueueMessage

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceBusQueueMessage from a JSON string
service_bus_queue_message_instance = ServiceBusQueueMessage.from_json(json)
# print the JSON string representation of the object
print(ServiceBusQueueMessage.to_json())

# convert the object into a dict
service_bus_queue_message_dict = service_bus_queue_message_instance.to_dict()
# create an instance of ServiceBusQueueMessage from a dict
service_bus_queue_message_from_dict = ServiceBusQueueMessage.from_dict(service_bus_queue_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


