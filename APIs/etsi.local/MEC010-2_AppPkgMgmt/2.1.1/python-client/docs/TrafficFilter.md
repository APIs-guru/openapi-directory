# TrafficFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**d_scp** | **int** | Used to match all IPv4 packets that have the same DSCP. | [optional] 
**dst_address** | **List[str]** | A IP address or a range of IP addresses.For IPv4, the IP address could be an IP address plus mask, or an individual IP address, or a range of IP addresses.For IPv6, the IP address could be an IP prefix, or a range of IP prefixes. | [optional] 
**dst_port** | **List[str]** | A port or a range of ports. | [optional] 
**dst_tunnel_port** | **List[str]** | Used for GTP tunnel based traffic rule. | [optional] 
**protocol** | **List[str]** | Specify the protocol of the traffic filter. | [optional] 
**q_ci** | **int** | Used to match all packets that have the same QCI. | [optional] 
**src_address** | **List[str]** | An IP address or a range of IP addresses.For IPv4, the IP address could be an IP address plus mask, or an individual IP address, or a range of IP addresses.For IPv6, the IP address could be an IP prefix, or a range of IP prefixes. | [optional] 
**src_port** | **List[str]** | A port or a range of ports. | [optional] 
**src_tunnel_address** | **List[str]** | Used for GTP tunnel based traffic rule. | [optional] 
**src_tunnel_port** | **List[str]** | Used for GTP tunnel based traffic rule. | [optional] 
**t_c** | **int** | Used to match all IPv6 packets that have the same TC. | [optional] 
**tag** | **List[str]** | Used for tag based traffic rule. | [optional] 
**tgt_tunnel_address** | **List[str]** | Used for GTP tunnel based traffic rule. | [optional] 

## Example

```python
from openapi_client.models.traffic_filter import TrafficFilter

# TODO update the JSON string below
json = "{}"
# create an instance of TrafficFilter from a JSON string
traffic_filter_instance = TrafficFilter.from_json(json)
# print the JSON string representation of the object
print(TrafficFilter.to_json())

# convert the object into a dict
traffic_filter_dict = traffic_filter_instance.to_dict()
# create an instance of TrafficFilter from a dict
traffic_filter_from_dict = TrafficFilter.from_dict(traffic_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


