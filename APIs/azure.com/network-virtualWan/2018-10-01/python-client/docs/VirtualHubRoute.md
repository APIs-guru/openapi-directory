# VirtualHubRoute

VirtualHub route

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_prefixes** | **List[str]** | list of all addressPrefixes. | [optional] 
**next_hop_ip_address** | **str** | NextHop ip address. | [optional] 

## Example

```python
from openapi_client.models.virtual_hub_route import VirtualHubRoute

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualHubRoute from a JSON string
virtual_hub_route_instance = VirtualHubRoute.from_json(json)
# print the JSON string representation of the object
print(VirtualHubRoute.to_json())

# convert the object into a dict
virtual_hub_route_dict = virtual_hub_route_instance.to_dict()
# create an instance of VirtualHubRoute from a dict
virtual_hub_route_from_dict = VirtualHubRoute.from_dict(virtual_hub_route_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


