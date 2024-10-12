# RoutingServiceBusTopicEndpointProperties

The properties related to service bus topic endpoint types.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_string** | **str** | The connection string of the service bus topic endpoint. | 
**name** | **str** | The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, fileNotifications, $default. Endpoint names must be unique across endpoint types.  The name need not be the same as the actual topic name. | 
**resource_group** | **str** | The name of the resource group of the service bus topic endpoint. | [optional] 
**subscription_id** | **str** | The subscription identifier of the service bus topic endpoint. | [optional] 

## Example

```python
from openapi_client.models.routing_service_bus_topic_endpoint_properties import RoutingServiceBusTopicEndpointProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RoutingServiceBusTopicEndpointProperties from a JSON string
routing_service_bus_topic_endpoint_properties_instance = RoutingServiceBusTopicEndpointProperties.from_json(json)
# print the JSON string representation of the object
print(RoutingServiceBusTopicEndpointProperties.to_json())

# convert the object into a dict
routing_service_bus_topic_endpoint_properties_dict = routing_service_bus_topic_endpoint_properties_instance.to_dict()
# create an instance of RoutingServiceBusTopicEndpointProperties from a dict
routing_service_bus_topic_endpoint_properties_from_dict = RoutingServiceBusTopicEndpointProperties.from_dict(routing_service_bus_topic_endpoint_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


