# RoutingEndpoints

The properties related to the custom endpoints to which your IoT hub routes messages based on the routing rules. A maximum of 10 custom endpoints are allowed across all endpoint types for paid hubs and only 1 custom endpoint is allowed across all endpoint types for free hubs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_hubs** | [**List[RoutingEventHubProperties]**](RoutingEventHubProperties.md) | The list of Event Hubs endpoints that IoT hub routes messages to, based on the routing rules. This list does not include the built-in Event Hubs endpoint. | [optional] 
**service_bus_queues** | [**List[RoutingServiceBusQueueEndpointProperties]**](RoutingServiceBusQueueEndpointProperties.md) | The list of Service Bus queue endpoints that IoT hub routes the messages to, based on the routing rules. | [optional] 
**service_bus_topics** | [**List[RoutingServiceBusTopicEndpointProperties]**](RoutingServiceBusTopicEndpointProperties.md) | The list of Service Bus topic endpoints that the IoT hub routes the messages to, based on the routing rules. | [optional] 

## Example

```python
from openapi_client.models.routing_endpoints import RoutingEndpoints

# TODO update the JSON string below
json = "{}"
# create an instance of RoutingEndpoints from a JSON string
routing_endpoints_instance = RoutingEndpoints.from_json(json)
# print the JSON string representation of the object
print(RoutingEndpoints.to_json())

# convert the object into a dict
routing_endpoints_dict = routing_endpoints_instance.to_dict()
# create an instance of RoutingEndpoints from a dict
routing_endpoints_from_dict = RoutingEndpoints.from_dict(routing_endpoints_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


