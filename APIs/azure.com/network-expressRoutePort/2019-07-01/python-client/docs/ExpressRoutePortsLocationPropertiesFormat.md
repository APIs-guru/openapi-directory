# ExpressRoutePortsLocationPropertiesFormat

Properties specific to ExpressRoutePorts peering location resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Address of peering location. | [optional] [readonly] 
**available_bandwidths** | [**List[ExpressRoutePortsLocationBandwidths]**](ExpressRoutePortsLocationBandwidths.md) | The inventory of available ExpressRoutePort bandwidths. | [optional] 
**contact** | **str** | Contact details of peering locations. | [optional] [readonly] 
**provisioning_state** | **str** | The current provisioning state. | [optional] [readonly] 

## Example

```python
from openapi_client.models.express_route_ports_location_properties_format import ExpressRoutePortsLocationPropertiesFormat

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRoutePortsLocationPropertiesFormat from a JSON string
express_route_ports_location_properties_format_instance = ExpressRoutePortsLocationPropertiesFormat.from_json(json)
# print the JSON string representation of the object
print(ExpressRoutePortsLocationPropertiesFormat.to_json())

# convert the object into a dict
express_route_ports_location_properties_format_dict = express_route_ports_location_properties_format_instance.to_dict()
# create an instance of ExpressRoutePortsLocationPropertiesFormat from a dict
express_route_ports_location_properties_format_from_dict = ExpressRoutePortsLocationPropertiesFormat.from_dict(express_route_ports_location_properties_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


