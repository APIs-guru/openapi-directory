# HttpRouteQueryParameterMatch

Specifications to match a query parameter in the request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exact_match** | **str** | The value of the query parameter must exactly match the contents of exact_match. Only one of exact_match, regex_match, or present_match must be set. | [optional] 
**present_match** | **bool** | Specifies that the QueryParameterMatcher matches if request contains query parameter, irrespective of whether the parameter has a value or not. Only one of exact_match, regex_match, or present_match must be set. | [optional] 
**query_parameter** | **str** | The name of the query parameter to match. | [optional] 
**regex_match** | **str** | The value of the query parameter must match the regular expression specified by regex_match. For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax Only one of exact_match, regex_match, or present_match must be set. | [optional] 

## Example

```python
from openapi_client.models.http_route_query_parameter_match import HttpRouteQueryParameterMatch

# TODO update the JSON string below
json = "{}"
# create an instance of HttpRouteQueryParameterMatch from a JSON string
http_route_query_parameter_match_instance = HttpRouteQueryParameterMatch.from_json(json)
# print the JSON string representation of the object
print(HttpRouteQueryParameterMatch.to_json())

# convert the object into a dict
http_route_query_parameter_match_dict = http_route_query_parameter_match_instance.to_dict()
# create an instance of HttpRouteQueryParameterMatch from a dict
http_route_query_parameter_match_from_dict = HttpRouteQueryParameterMatch.from_dict(http_route_query_parameter_match_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


