# TestRouteResult

Result of testing one route

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | [**TestRouteResultDetails**](TestRouteResultDetails.md) |  | [optional] 
**result** | **str** | Result of testing route | [optional] 

## Example

```python
from openapi_client.models.test_route_result import TestRouteResult

# TODO update the JSON string below
json = "{}"
# create an instance of TestRouteResult from a JSON string
test_route_result_instance = TestRouteResult.from_json(json)
# print the JSON string representation of the object
print(TestRouteResult.to_json())

# convert the object into a dict
test_route_result_dict = test_route_result_instance.to_dict()
# create an instance of TestRouteResult from a dict
test_route_result_from_dict = TestRouteResult.from_dict(test_route_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


