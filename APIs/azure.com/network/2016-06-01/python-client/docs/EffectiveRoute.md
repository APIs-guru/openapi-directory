# EffectiveRoute

Effective Route

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_prefix** | **List[str]** | Gets address prefixes of the effective routes in CIDR notation. | [optional] 
**name** | **str** | Gets the name of the user defined route. This is optional. | [optional] 
**next_hop_ip_address** | **List[str]** | Gets the IP address of the next hop of the effective route | [optional] 
**next_hop_type** | **str** | Gets or sets the type of Azure hop the packet should be sent to. | [optional] 
**source** | **str** | Gets who created the route | [optional] 
**state** | **str** | Gets value of effective route | [optional] 

## Example

```python
from openapi_client.models.effective_route import EffectiveRoute

# TODO update the JSON string below
json = "{}"
# create an instance of EffectiveRoute from a JSON string
effective_route_instance = EffectiveRoute.from_json(json)
# print the JSON string representation of the object
print(EffectiveRoute.to_json())

# convert the object into a dict
effective_route_dict = effective_route_instance.to_dict()
# create an instance of EffectiveRoute from a dict
effective_route_from_dict = EffectiveRoute.from_dict(effective_route_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


