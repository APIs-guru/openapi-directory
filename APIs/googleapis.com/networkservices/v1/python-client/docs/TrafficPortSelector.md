# TrafficPortSelector

Specification of a port-based selector.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ports** | **List[str]** | Optional. A list of ports. Can be port numbers or port range (example, [80-90] specifies all ports from 80 to 90, including 80 and 90) or named ports or * to specify all ports. If the list is empty, all ports are selected. | [optional] 

## Example

```python
from openapi_client.models.traffic_port_selector import TrafficPortSelector

# TODO update the JSON string below
json = "{}"
# create an instance of TrafficPortSelector from a JSON string
traffic_port_selector_instance = TrafficPortSelector.from_json(json)
# print the JSON string representation of the object
print(TrafficPortSelector.to_json())

# convert the object into a dict
traffic_port_selector_dict = traffic_port_selector_instance.to_dict()
# create an instance of TrafficPortSelector from a dict
traffic_port_selector_from_dict = TrafficPortSelector.from_dict(traffic_port_selector_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


