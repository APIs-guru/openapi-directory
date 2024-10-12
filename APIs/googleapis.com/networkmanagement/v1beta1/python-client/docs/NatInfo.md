# NatInfo

For display only. Metadata associated with NAT.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nat_gateway_name** | **str** | The name of Cloud NAT Gateway. Only valid when type is CLOUD_NAT. | [optional] 
**network_uri** | **str** | URI of the network where NAT translation takes place. | [optional] 
**new_destination_ip** | **str** | Destination IP address after NAT translation. | [optional] 
**new_destination_port** | **int** | Destination port after NAT translation. Only valid when protocol is TCP or UDP. | [optional] 
**new_source_ip** | **str** | Source IP address after NAT translation. | [optional] 
**new_source_port** | **int** | Source port after NAT translation. Only valid when protocol is TCP or UDP. | [optional] 
**old_destination_ip** | **str** | Destination IP address before NAT translation. | [optional] 
**old_destination_port** | **int** | Destination port before NAT translation. Only valid when protocol is TCP or UDP. | [optional] 
**old_source_ip** | **str** | Source IP address before NAT translation. | [optional] 
**old_source_port** | **int** | Source port before NAT translation. Only valid when protocol is TCP or UDP. | [optional] 
**protocol** | **str** | IP protocol in string format, for example: \&quot;TCP\&quot;, \&quot;UDP\&quot;, \&quot;ICMP\&quot;. | [optional] 
**router_uri** | **str** | Uri of the Cloud Router. Only valid when type is CLOUD_NAT. | [optional] 
**type** | **str** | Type of NAT. | [optional] 

## Example

```python
from openapi_client.models.nat_info import NatInfo

# TODO update the JSON string below
json = "{}"
# create an instance of NatInfo from a JSON string
nat_info_instance = NatInfo.from_json(json)
# print the JSON string representation of the object
print(NatInfo.to_json())

# convert the object into a dict
nat_info_dict = nat_info_instance.to_dict()
# create an instance of NatInfo from a dict
nat_info_from_dict = NatInfo.from_dict(nat_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


