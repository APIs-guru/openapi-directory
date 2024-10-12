# TestAllRoutesResult

Result of testing all routes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**routes** | [**List[MatchedRoute]**](MatchedRoute.md) | JSON-serialized array of matched routes | [optional] 

## Example

```python
from openapi_client.models.test_all_routes_result import TestAllRoutesResult

# TODO update the JSON string below
json = "{}"
# create an instance of TestAllRoutesResult from a JSON string
test_all_routes_result_instance = TestAllRoutesResult.from_json(json)
# print the JSON string representation of the object
print(TestAllRoutesResult.to_json())

# convert the object into a dict
test_all_routes_result_dict = test_all_routes_result_instance.to_dict()
# create an instance of TestAllRoutesResult from a dict
test_all_routes_result_from_dict = TestAllRoutesResult.from_dict(test_all_routes_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


