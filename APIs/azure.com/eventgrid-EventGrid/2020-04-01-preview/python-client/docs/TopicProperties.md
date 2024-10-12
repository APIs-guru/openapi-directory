# TopicProperties

Properties of the Topic

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_traffic_from_all_ips** | **bool** | This determines if IP filtering rules ought to be evaluated or not. By default it will not evaluate and will allow traffic from all IPs. | [optional] 
**endpoint** | **str** | Endpoint for the topic. | [optional] [readonly] 
**inbound_ip_rules** | [**List[InboundIpRule]**](InboundIpRule.md) | This determines the IP filtering rules that ought to be applied when events are received on this topic. | [optional] 
**input_schema** | **str** | This determines the format that Event Grid should expect for incoming events published to the topic. | [optional] [default to 'EventGridSchema']
**input_schema_mapping** | [**InputSchemaMapping**](InputSchemaMapping.md) |  | [optional] 
**metric_resource_id** | **str** | Metric resource id for the topic. | [optional] [readonly] 
**provisioning_state** | **str** | Provisioning state of the topic. | [optional] [readonly] 

## Example

```python
from openapi_client.models.topic_properties import TopicProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TopicProperties from a JSON string
topic_properties_instance = TopicProperties.from_json(json)
# print the JSON string representation of the object
print(TopicProperties.to_json())

# convert the object into a dict
topic_properties_dict = topic_properties_instance.to_dict()
# create an instance of TopicProperties from a dict
topic_properties_from_dict = TopicProperties.from_dict(topic_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


