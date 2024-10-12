# TrafficSelectorPolicy

An traffic selector policy for a virtual network gateway connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**local_address_ranges** | **List[str]** | A collection of local address spaces in CIDR format | 
**remote_address_ranges** | **List[str]** | A collection of remote address spaces in CIDR format | 

## Example

```python
from openapi_client.models.traffic_selector_policy import TrafficSelectorPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of TrafficSelectorPolicy from a JSON string
traffic_selector_policy_instance = TrafficSelectorPolicy.from_json(json)
# print the JSON string representation of the object
print(TrafficSelectorPolicy.to_json())

# convert the object into a dict
traffic_selector_policy_dict = traffic_selector_policy_instance.to_dict()
# create an instance of TrafficSelectorPolicy from a dict
traffic_selector_policy_from_dict = TrafficSelectorPolicy.from_dict(traffic_selector_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


