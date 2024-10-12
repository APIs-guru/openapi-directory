# RoutingProperties

The routing related properties of the IoT hub. See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-messaging

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoints** | [**RoutingEndpoints**](RoutingEndpoints.md) |  | [optional] 
**fallback_route** | [**FallbackRouteProperties**](FallbackRouteProperties.md) |  | [optional] 
**routes** | [**List[RouteProperties]**](RouteProperties.md) | The list of user-provided routing rules that the IoT hub uses to route messages to built-in and custom endpoints. A maximum of 100 routing rules are allowed for paid hubs and a maximum of 5 routing rules are allowed for free hubs. | [optional] 

## Example

```python
from openapi_client.models.routing_properties import RoutingProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RoutingProperties from a JSON string
routing_properties_instance = RoutingProperties.from_json(json)
# print the JSON string representation of the object
print(RoutingProperties.to_json())

# convert the object into a dict
routing_properties_dict = routing_properties_instance.to_dict()
# create an instance of RoutingProperties from a dict
routing_properties_from_dict = RoutingProperties.from_dict(routing_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


