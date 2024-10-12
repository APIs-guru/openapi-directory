# RouteProperties

The properties of a routing rule that your IoT hub uses to route messages to endpoints.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**condition** | **str** | The condition that is evaluated to apply the routing rule. If no condition is provided, it evaluates to true by default. For grammar, See: https://docs.microsoft.com/azure/iot-hub/iot-hub-devguide-query-language | [optional] 
**endpoint_names** | **List[str]** | The list of endpoints to which messages that satisfy the condition are routed. Currently only one endpoint is allowed. | 
**is_enabled** | **bool** | Used to specify whether a route is enabled. | 
**name** | **str** | The name of the route. The name can only include alphanumeric characters, periods, underscores, hyphens, has a maximum length of 64 characters,  and must be unique. | 
**source** | **str** | The source that the routing rule is to be applied to, such as DeviceMessages. | 

## Example

```python
from openapi_client.models.route_properties import RouteProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RouteProperties from a JSON string
route_properties_instance = RouteProperties.from_json(json)
# print the JSON string representation of the object
print(RouteProperties.to_json())

# convert the object into a dict
route_properties_dict = route_properties_instance.to_dict()
# create an instance of RouteProperties from a dict
route_properties_from_dict = RouteProperties.from_dict(route_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


