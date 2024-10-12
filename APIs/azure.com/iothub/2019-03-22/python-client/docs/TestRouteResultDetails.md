# TestRouteResultDetails

Detailed result of testing a route

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compilation_errors** | [**List[RouteCompilationError]**](RouteCompilationError.md) | JSON-serialized list of route compilation errors | [optional] 

## Example

```python
from openapi_client.models.test_route_result_details import TestRouteResultDetails

# TODO update the JSON string below
json = "{}"
# create an instance of TestRouteResultDetails from a JSON string
test_route_result_details_instance = TestRouteResultDetails.from_json(json)
# print the JSON string representation of the object
print(TestRouteResultDetails.to_json())

# convert the object into a dict
test_route_result_details_dict = test_route_result_details_instance.to_dict()
# create an instance of TestRouteResultDetails from a dict
test_route_result_details_from_dict = TestRouteResultDetails.from_dict(test_route_result_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


