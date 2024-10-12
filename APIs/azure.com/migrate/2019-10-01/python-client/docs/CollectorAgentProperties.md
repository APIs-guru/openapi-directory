# CollectorAgentProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] [readonly] 
**last_heartbeat_utc** | **datetime** |  | [optional] [readonly] 
**spn_details** | [**CollectorBodyAgentSpnProperties**](CollectorBodyAgentSpnProperties.md) |  | [optional] 
**version** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.collector_agent_properties import CollectorAgentProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CollectorAgentProperties from a JSON string
collector_agent_properties_instance = CollectorAgentProperties.from_json(json)
# print the JSON string representation of the object
print(CollectorAgentProperties.to_json())

# convert the object into a dict
collector_agent_properties_dict = collector_agent_properties_instance.to_dict()
# create an instance of CollectorAgentProperties from a dict
collector_agent_properties_from_dict = CollectorAgentProperties.from_dict(collector_agent_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


