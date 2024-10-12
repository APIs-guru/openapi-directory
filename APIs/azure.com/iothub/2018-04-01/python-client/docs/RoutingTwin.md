# RoutingTwin

Twin reference input parameter. This is an optional parameter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RoutingTwinProperties**](RoutingTwinProperties.md) |  | [optional] 
**tags** | **object** | Twin Tags | [optional] 

## Example

```python
from openapi_client.models.routing_twin import RoutingTwin

# TODO update the JSON string below
json = "{}"
# create an instance of RoutingTwin from a JSON string
routing_twin_instance = RoutingTwin.from_json(json)
# print the JSON string representation of the object
print(RoutingTwin.to_json())

# convert the object into a dict
routing_twin_dict = routing_twin_instance.to_dict()
# create an instance of RoutingTwin from a dict
routing_twin_from_dict = RoutingTwin.from_dict(routing_twin_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


