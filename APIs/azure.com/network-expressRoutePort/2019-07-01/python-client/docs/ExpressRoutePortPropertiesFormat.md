# ExpressRoutePortPropertiesFormat

Properties specific to ExpressRoutePort resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allocation_date** | **str** | Date of the physical port allocation to be used in Letter of Authorization. | [optional] [readonly] 
**bandwidth_in_gbps** | **int** | Bandwidth of procured ports in Gbps. | [optional] 
**circuits** | [**List[ExpressRoutePortPropertiesFormatCircuitsInner]**](ExpressRoutePortPropertiesFormatCircuitsInner.md) | Reference the ExpressRoute circuit(s) that are provisioned on this ExpressRoutePort resource. | [optional] [readonly] 
**encapsulation** | **str** | Encapsulation method on physical ports. | [optional] 
**ether_type** | **str** | Ether type of the physical port. | [optional] [readonly] 
**links** | [**List[ExpressRouteLink]**](ExpressRouteLink.md) | The set of physical links of the ExpressRoutePort resource. | [optional] 
**mtu** | **str** | Maximum transmission unit of the physical port pair(s). | [optional] [readonly] 
**peering_location** | **str** | The name of the peering location that the ExpressRoutePort is mapped to physically. | [optional] 
**provisioned_bandwidth_in_gbps** | **float** | Aggregate Gbps of associated circuit bandwidths. | [optional] [readonly] 
**provisioning_state** | **str** | The current provisioning state. | [optional] [readonly] 
**resource_guid** | **str** | The resource GUID property of the express route port resource. | [optional] 

## Example

```python
from openapi_client.models.express_route_port_properties_format import ExpressRoutePortPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRoutePortPropertiesFormat from a JSON string
express_route_port_properties_format_instance = ExpressRoutePortPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(ExpressRoutePortPropertiesFormat.to_json())

# convert the object into a dict
express_route_port_properties_format_dict = express_route_port_properties_format_instance.to_dict()
# create an instance of ExpressRoutePortPropertiesFormat from a dict
express_route_port_properties_format_from_dict = ExpressRoutePortPropertiesFormat.from_dict(express_route_port_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


