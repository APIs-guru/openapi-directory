# ServiceBusTopicMessage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**topic_path** | **str** | Gets or sets the topic path. | [optional] 
**authentication** | [**ServiceBusAuthentication**](ServiceBusAuthentication.md) |  | [optional] 
**brokered_message_properties** | [**ServiceBusBrokeredMessageProperties**](ServiceBusBrokeredMessageProperties.md) |  | [optional] 
**custom_message_properties** | **Dict[str, str]** | Gets or sets the custom message properties. | [optional] 
**message** | **str** | Gets or sets the message. | [optional] 
**namespace** | **str** | Gets or sets the namespace. | [optional] 
**transport_type** | **str** | Gets or sets the transport type. | [optional] 

## Example

```python
from openapi_client.models.service_bus_topic_message import ServiceBusTopicMessage

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceBusTopicMessage from a JSON string
service_bus_topic_message_instance = ServiceBusTopicMessage.from_json(json)
# print the JSON string representation of the object
print(ServiceBusTopicMessage.to_json())

# convert the object into a dict
service_bus_topic_message_dict = service_bus_topic_message_instance.to_dict()
# create an instance of ServiceBusTopicMessage from a dict
service_bus_topic_message_from_dict = ServiceBusTopicMessage.from_dict(service_bus_topic_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


