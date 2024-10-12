# HttpRouteRouteMatch

RouteMatch defines specifications used to match requests. If multiple match types are set, this RouteMatch will match if ALL type of matches are matched.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**full_path_match** | **str** | The HTTP request path value should exactly match this value. Only one of full_path_match, prefix_match, or regex_match should be used. | [optional] 
**headers** | [**List[HttpRouteHeaderMatch]**](HttpRouteHeaderMatch.md) | Specifies a list of HTTP request headers to match against. ALL of the supplied headers must be matched. | [optional] 
**ignore_case** | **bool** | Specifies if prefix_match and full_path_match matches are case sensitive. The default value is false. | [optional] 
**prefix_match** | **str** | The HTTP request path value must begin with specified prefix_match. prefix_match must begin with a /. Only one of full_path_match, prefix_match, or regex_match should be used. | [optional] 
**query_parameters** | [**List[HttpRouteQueryParameterMatch]**](HttpRouteQueryParameterMatch.md) | Specifies a list of query parameters to match against. ALL of the query parameters must be matched. | [optional] 
**regex_match** | **str** | The HTTP request path value must satisfy the regular expression specified by regex_match after removing any query parameters and anchor supplied with the original URL. For regular expression grammar, please see https://github.com/google/re2/wiki/Syntax Only one of full_path_match, prefix_match, or regex_match should be used. | [optional] 

## Example

```python
from openapi_client.models.http_route_route_match import HttpRouteRouteMatch

# TODO update the JSON string below
json = "{}"
# create an instance of HttpRouteRouteMatch from a JSON string
http_route_route_match_instance = HttpRouteRouteMatch.from_json(json)
# print the JSON string representation of the object
print(HttpRouteRouteMatch.to_json())

# convert the object into a dict
http_route_route_match_dict = http_route_route_match_instance.to_dict()
# create an instance of HttpRouteRouteMatch from a dict
http_route_route_match_from_dict = HttpRouteRouteMatch.from_dict(http_route_route_match_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


