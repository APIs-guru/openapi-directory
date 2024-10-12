# TopicUpdateParameters

Properties of the Topic update

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_traffic_from_all_ips** | **bool** | This determines if IP filtering rules ought to be evaluated or not. By default it will not evaluate and will allow traffic from all IPs. | [optional] 
**inbound_ip_rules** | [**List[InboundIpRule]**](InboundIpRule.md) | This determines the IP filtering rules that ought be applied when events are received on this domain. | [optional] 
**tags** | **Dict[str, str]** | Tags of the resource. | [optional] 

## Example

```python
from openapi_client.models.topic_update_parameters import TopicUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of TopicUpdateParameters from a JSON string
topic_update_parameters_instance = TopicUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(TopicUpdateParameters.to_json())

# convert the object into a dict
topic_update_parameters_dict = topic_update_parameters_instance.to_dict()
# create an instance of TopicUpdateParameters from a dict
topic_update_parameters_from_dict = TopicUpdateParameters.from_dict(topic_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


