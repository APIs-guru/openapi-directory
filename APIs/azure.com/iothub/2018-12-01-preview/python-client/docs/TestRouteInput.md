# TestRouteInput

Input for testing route

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | [**RoutingMessage**](RoutingMessage.md) |  | [optional] 
**route** | [**RouteProperties**](RouteProperties.md) |  | 
**twin** | [**RoutingTwin**](RoutingTwin.md) |  | [optional] 

## Example

```python
from openapi_client.models.test_route_input import TestRouteInput

# TODO update the JSON string below
json = "{}"
# create an instance of TestRouteInput from a JSON string
test_route_input_instance = TestRouteInput.from_json(json)
# print the JSON string representation of the object
print(TestRouteInput.to_json())

# convert the object into a dict
test_route_input_dict = test_route_input_instance.to_dict()
# create an instance of TestRouteInput from a dict
test_route_input_from_dict = TestRouteInput.from_dict(test_route_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


