# Spoke

A Spoke is an abstraction of a network attachment being attached to a Hub. A Spoke can be underlying a VPN tunnel, a VLAN (interconnect) attachment, a Router appliance, etc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | The time when the Spoke was created. | [optional] 
**description** | **str** | Short description of the spoke resource | [optional] 
**hub** | **str** | The resource URL of the hub resource that the spoke is attached to | [optional] 
**labels** | **Dict[str, str]** | User-defined labels. | [optional] 
**linked_interconnect_attachments** | **List[str]** | The URIs of linked interconnect attachment resources | [optional] 
**linked_router_appliance_instances** | [**List[RouterApplianceInstance]**](RouterApplianceInstance.md) | The URIs of linked Router appliance resources | [optional] 
**linked_vpn_tunnels** | **List[str]** | The URIs of linked VPN tunnel resources | [optional] 
**name** | **str** | Immutable. The name of a Spoke resource. | [optional] 
**state** | **str** | Output only. The current lifecycle state of this Hub. | [optional] [readonly] 
**unique_id** | **str** | Output only. Google-generated UUID for this resource. This is unique across all Spoke resources. If a Spoke resource is deleted and another with the same name is created, it gets a different unique_id. | [optional] [readonly] 
**update_time** | **str** | The time when the Spoke was updated. | [optional] 

## Example

```python
from openapi_client.models.spoke import Spoke

# TODO update the JSON string below
json = "{}"
# create an instance of Spoke from a JSON string
spoke_instance = Spoke.from_json(json)
# print the JSON string representation of the object
print(Spoke.to_json())

# convert the object into a dict
spoke_dict = spoke_instance.to_dict()
# create an instance of Spoke from a dict
spoke_from_dict = Spoke.from_dict(spoke_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


