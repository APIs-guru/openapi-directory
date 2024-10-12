# ExpressRoutePortsLocationBandwidths

Real-time inventory of available ExpressRoute port bandwidths.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offer_name** | **str** | Bandwidth descriptive name. | [optional] [readonly] 
**value_in_gbps** | **int** | Bandwidth value in Gbps. | [optional] [readonly] 

## Example

```python
from openapi_client.models.express_route_ports_location_bandwidths import ExpressRoutePortsLocationBandwidths

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRoutePortsLocationBandwidths from a JSON string
express_route_ports_location_bandwidths_instance = ExpressRoutePortsLocationBandwidths.from_json(json)
# print the JSON string representation of the object
print(ExpressRoutePortsLocationBandwidths.to_json())

# convert the object into a dict
express_route_ports_location_bandwidths_dict = express_route_ports_location_bandwidths_instance.to_dict()
# create an instance of ExpressRoutePortsLocationBandwidths from a dict
express_route_ports_location_bandwidths_from_dict = ExpressRoutePortsLocationBandwidths.from_dict(express_route_ports_location_bandwidths_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


