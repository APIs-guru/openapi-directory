# ServiceBusBrokeredMessageProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_type** | **str** | Gets or sets the content type. | [optional] 
**correlation_id** | **str** | Gets or sets the correlation ID. | [optional] 
**force_persistence** | **bool** | Gets or sets the force persistence. | [optional] 
**label** | **str** | Gets or sets the label. | [optional] 
**message_id** | **str** | Gets or sets the message ID. | [optional] 
**partition_key** | **str** | Gets or sets the partition key. | [optional] 
**reply_to** | **str** | Gets or sets the reply to. | [optional] 
**reply_to_session_id** | **str** | Gets or sets the reply to session ID. | [optional] 
**scheduled_enqueue_time_utc** | **datetime** | Gets or sets the scheduled enqueue time UTC. | [optional] 
**session_id** | **str** | Gets or sets the session ID. | [optional] 
**time_to_live** | **str** | Gets or sets the time to live. | [optional] 
**to** | **str** | Gets or sets the to. | [optional] 
**via_partition_key** | **str** | Gets or sets the via partition key. | [optional] 

## Example

```python
from openapi_client.models.service_bus_brokered_message_properties import ServiceBusBrokeredMessageProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceBusBrokeredMessageProperties from a JSON string
service_bus_brokered_message_properties_instance = ServiceBusBrokeredMessageProperties.from_json(json)
# print the JSON string representation of the object
print(ServiceBusBrokeredMessageProperties.to_json())

# convert the object into a dict
service_bus_brokered_message_properties_dict = service_bus_brokered_message_properties_instance.to_dict()
# create an instance of ServiceBusBrokeredMessageProperties from a dict
service_bus_brokered_message_properties_from_dict = ServiceBusBrokeredMessageProperties.from_dict(service_bus_brokered_message_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


