# RoutingVPC

RoutingVPC contains information about the VPC networks associated with the spokes of a Network Connectivity Center hub.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**required_for_new_site_to_site_data_transfer_spokes** | **bool** | Output only. If true, indicates that this VPC network is currently associated with spokes that use the data transfer feature (spokes where the site_to_site_data_transfer field is set to true). If you create new spokes that use data transfer, they must be associated with this VPC network. At most, one VPC network will have this field set to true. | [optional] [readonly] 
**uri** | **str** | The URI of the VPC network. | [optional] 

## Example

```python
from openapi_client.models.routing_vpc import RoutingVPC

# TODO update the JSON string below
json = "{}"
# create an instance of RoutingVPC from a JSON string
routing_vpc_instance = RoutingVPC.from_json(json)
# print the JSON string representation of the object
print(RoutingVPC.to_json())

# convert the object into a dict
routing_vpc_dict = routing_vpc_instance.to_dict()
# create an instance of RoutingVPC from a dict
routing_vpc_from_dict = RoutingVPC.from_dict(routing_vpc_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


