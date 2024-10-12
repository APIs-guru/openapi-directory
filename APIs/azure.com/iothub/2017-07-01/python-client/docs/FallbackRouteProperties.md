# FallbackRouteProperties

The properties of the fallback route. IoT Hub uses these properties when it routes messages to the fallback endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**condition** | **str** | The condition which is evaluated in order to apply the fallback route. If the condition is not provided it will evaluate to true by default. For grammar, See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-query-language | [optional] 
**endpoint_names** | **List[str]** | The list of endpoints to which the messages that satisfy the condition are routed to. Currently only 1 endpoint is allowed. | 
**is_enabled** | **bool** | Used to specify whether the fallback route is enabled. | 
**source** | **str** | The source to which the routing rule is to be applied to. For example, DeviceMessages | 

## Example

```python
from openapi_client.models.fallback_route_properties import FallbackRouteProperties

# TODO update the JSON string below
json = "{}"
# create an instance of FallbackRouteProperties from a JSON string
fallback_route_properties_instance = FallbackRouteProperties.from_json(json)
# print the JSON string representation of the object
print(FallbackRouteProperties.to_json())

# convert the object into a dict
fallback_route_properties_dict = fallback_route_properties_instance.to_dict()
# create an instance of FallbackRouteProperties from a dict
fallback_route_properties_from_dict = FallbackRouteProperties.from_dict(fallback_route_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


