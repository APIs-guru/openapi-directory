# RoutingEventHubProperties

The properties related to an event hub endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_string** | **str** | The connection string of the event hub endpoint.  | 
**name** | **str** | The name that identifies this endpoint. The name can only include alphanumeric characters, periods, underscores, hyphens and has a maximum length of 64 characters. The following names are reserved:  events, operationsMonitoringEvents, fileNotifications, $default. Endpoint names must be unique across endpoint types. | 
**resource_group** | **str** | The name of the resource group of the event hub endpoint. | [optional] 
**subscription_id** | **str** | The subscription identifier of the event hub endpoint. | [optional] 

## Example

```python
from openapi_client.models.routing_event_hub_properties import RoutingEventHubProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RoutingEventHubProperties from a JSON string
routing_event_hub_properties_instance = RoutingEventHubProperties.from_json(json)
# print the JSON string representation of the object
print(RoutingEventHubProperties.to_json())

# convert the object into a dict
routing_event_hub_properties_dict = routing_event_hub_properties_instance.to_dict()
# create an instance of RoutingEventHubProperties from a dict
routing_event_hub_properties_from_dict = RoutingEventHubProperties.from_dict(routing_event_hub_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


