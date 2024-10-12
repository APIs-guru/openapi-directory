# UpdateNetworkSwitchRoutingOspfRequestAreasInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**area_id** | **str** | OSPF area ID | 
**area_name** | **str** | Name of the OSPF area | 
**area_type** | **str** | Area types in OSPF. Must be one of: [\&quot;normal\&quot;, \&quot;stub\&quot;, \&quot;nssa\&quot;] | 

## Example

```python
from openapi_client.models.update_network_switch_routing_ospf_request_areas_inner import UpdateNetworkSwitchRoutingOspfRequestAreasInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkSwitchRoutingOspfRequestAreasInner from a JSON string
update_network_switch_routing_ospf_request_areas_inner_instance = UpdateNetworkSwitchRoutingOspfRequestAreasInner.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkSwitchRoutingOspfRequestAreasInner.to_json())

# convert the object into a dict
update_network_switch_routing_ospf_request_areas_inner_dict = update_network_switch_routing_ospf_request_areas_inner_instance.to_dict()
# create an instance of UpdateNetworkSwitchRoutingOspfRequestAreasInner from a dict
update_network_switch_routing_ospf_request_areas_inner_from_dict = UpdateNetworkSwitchRoutingOspfRequestAreasInner.from_dict(update_network_switch_routing_ospf_request_areas_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


