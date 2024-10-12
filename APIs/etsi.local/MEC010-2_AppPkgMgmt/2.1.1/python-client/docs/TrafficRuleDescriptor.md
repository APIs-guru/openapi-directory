# TrafficRuleDescriptor


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**Action**](Action.md) |  | 
**dst_interface** | [**List[InterfaceDescriptor]**](InterfaceDescriptor.md) |  | [optional] 
**filter_type** | [**FilterType**](FilterType.md) |  | 
**priority** | **int** | Priority of this traffic rule. If traffic rule conflicts, the one with higher priority take precedence. | 
**traffic_filter** | [**List[TrafficFilter]**](TrafficFilter.md) | The filter used to identify specific flow/packets that need to be handled by the MEC host. | 
**traffic_rule_id** | **str** | Identifies the traffic rule. | 

## Example

```python
from openapi_client.models.traffic_rule_descriptor import TrafficRuleDescriptor

# TODO update the JSON string below
json = "{}"
# create an instance of TrafficRuleDescriptor from a JSON string
traffic_rule_descriptor_instance = TrafficRuleDescriptor.from_json(json)
# print the JSON string representation of the object
print(TrafficRuleDescriptor.to_json())

# convert the object into a dict
traffic_rule_descriptor_dict = traffic_rule_descriptor_instance.to_dict()
# create an instance of TrafficRuleDescriptor from a dict
traffic_rule_descriptor_from_dict = TrafficRuleDescriptor.from_dict(traffic_rule_descriptor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


