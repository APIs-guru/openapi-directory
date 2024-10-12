# RouteCompilationError

Compilation error when evaluating route

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | [**RouteErrorRange**](RouteErrorRange.md) |  | [optional] 
**message** | **str** | Route error message | [optional] 
**severity** | **str** | Severity of the route error | [optional] 

## Example

```python
from openapi_client.models.route_compilation_error import RouteCompilationError

# TODO update the JSON string below
json = "{}"
# create an instance of RouteCompilationError from a JSON string
route_compilation_error_instance = RouteCompilationError.from_json(json)
# print the JSON string representation of the object
print(RouteCompilationError.to_json())

# convert the object into a dict
route_compilation_error_dict = route_compilation_error_instance.to_dict()
# create an instance of RouteCompilationError from a dict
route_compilation_error_from_dict = RouteCompilationError.from_dict(route_compilation_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


