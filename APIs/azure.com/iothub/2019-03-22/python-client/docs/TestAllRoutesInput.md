# TestAllRoutesInput

Input for testing all routes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | [**RoutingMessage**](RoutingMessage.md) |  | [optional] 
**routing_source** | **str** | Routing source | [optional] 
**twin** | [**RoutingTwin**](RoutingTwin.md) |  | [optional] 

## Example

```python
from openapi_client.models.test_all_routes_input import TestAllRoutesInput

# TODO update the JSON string below
json = "{}"
# create an instance of TestAllRoutesInput from a JSON string
test_all_routes_input_instance = TestAllRoutesInput.from_json(json)
# print the JSON string representation of the object
print(TestAllRoutesInput.to_json())

# convert the object into a dict
test_all_routes_input_dict = test_all_routes_input_instance.to_dict()
# create an instance of TestAllRoutesInput from a dict
test_all_routes_input_from_dict = TestAllRoutesInput.from_dict(test_all_routes_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


