# RoutingServiceBusQueueEndpointProperties

The properties related to service bus queue endpoint types.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_string** | **str** | The connection string of the service bus queue endpoint. | 
**name** | **str** | The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, operationsMonitoringEvents, fileNotifications, $default. Endpoint names must be unique across endpoint types. The name need not be the same as the actual queue name. | 
**resource_group** | **str** | The name of the resource group of the service bus queue endpoint. | [optional] 
**subscription_id** | **str** | The subscription identifier of the service bus queue endpoint. | [optional] 

## Example

```python
from openapi_client.models.routing_service_bus_queue_endpoint_properties import RoutingServiceBusQueueEndpointProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RoutingServiceBusQueueEndpointProperties from a JSON string
routing_service_bus_queue_endpoint_properties_instance = RoutingServiceBusQueueEndpointProperties.from_json(json)
# print the JSON string representation of the object
print(RoutingServiceBusQueueEndpointProperties.to_json())

# convert the object into a dict
routing_service_bus_queue_endpoint_properties_dict = routing_service_bus_queue_endpoint_properties_instance.to_dict()
# create an instance of RoutingServiceBusQueueEndpointProperties from a dict
routing_service_bus_queue_endpoint_properties_from_dict = RoutingServiceBusQueueEndpointProperties.from_dict(routing_service_bus_queue_endpoint_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


