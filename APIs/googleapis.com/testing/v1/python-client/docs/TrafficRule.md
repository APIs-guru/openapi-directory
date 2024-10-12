# TrafficRule

Network emulation parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bandwidth** | **float** | Bandwidth in kbits/second. | [optional] 
**burst** | **float** | Burst size in kbits. | [optional] 
**delay** | **str** | Packet delay, must be &gt;&#x3D; 0. | [optional] 
**packet_duplication_ratio** | **float** | Packet duplication ratio (0.0 - 1.0). | [optional] 
**packet_loss_ratio** | **float** | Packet loss ratio (0.0 - 1.0). | [optional] 

## Example

```python
from openapi_client.models.traffic_rule import TrafficRule

# TODO update the JSON string below
json = "{}"
# create an instance of TrafficRule from a JSON string
traffic_rule_instance = TrafficRule.from_json(json)
# print the JSON string representation of the object
print(TrafficRule.to_json())

# convert the object into a dict
traffic_rule_dict = traffic_rule_instance.to_dict()
# create an instance of TrafficRule from a dict
traffic_rule_from_dict = TrafficRule.from_dict(traffic_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


