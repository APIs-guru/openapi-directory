# ExpressRoutePortsLocation

Definition of the ExpressRoutePorts peering location resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ExpressRoutePortsLocationPropertiesFormat**](ExpressRoutePortsLocationPropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.express_route_ports_location import ExpressRoutePortsLocation

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRoutePortsLocation from a JSON string
express_route_ports_location_instance = ExpressRoutePortsLocation.from_json(json)
# print the JSON string representation of the object
print(ExpressRoutePortsLocation.to_json())

# convert the object into a dict
express_route_ports_location_dict = express_route_ports_location_instance.to_dict()
# create an instance of ExpressRoutePortsLocation from a dict
express_route_ports_location_from_dict = ExpressRoutePortsLocation.from_dict(express_route_ports_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


