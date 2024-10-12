# TrafficQuery

Parameters to compare with network configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination** | **str** | Traffic destination. Accepted values are: &#39;*&#39;, IP Address/CIDR, Service Tag. | 
**destination_port** | **str** | Traffic destination port. Accepted values are &#39;*&#39;, port (for example, 3389) and port range (for example, 80-100). | 
**direction** | **str** | The direction of the traffic. Accepted values are &#39;Inbound&#39; and &#39;Outbound&#39;. | 
**protocol** | **str** | Protocol to be verified on. Accepted values are &#39;*&#39;, TCP, UDP. | 
**source** | **str** | Traffic source. Accepted values are &#39;*&#39;, IP Address/CIDR, Service Tag. | 

## Example

```python
from openapi_client.models.traffic_query import TrafficQuery

# TODO update the JSON string below
json = "{}"
# create an instance of TrafficQuery from a JSON string
traffic_query_instance = TrafficQuery.from_json(json)
# print the JSON string representation of the object
print(TrafficQuery.to_json())

# convert the object into a dict
traffic_query_dict = traffic_query_instance.to_dict()
# create an instance of TrafficQuery from a dict
traffic_query_from_dict = TrafficQuery.from_dict(traffic_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


