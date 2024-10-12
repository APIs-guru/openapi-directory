# HttpRouteHeaderMatch

Specifies how to select a route rule based on HTTP request headers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exact_match** | **str** | The value of the header should match exactly the content of exact_match. | [optional] 
**header** | **str** | The name of the HTTP header to match against. | [optional] 
**invert_match** | **bool** | If specified, the match result will be inverted before checking. Default value is set to false. | [optional] 
**prefix_match** | **str** | The value of the header must start with the contents of prefix_match. | [optional] 
**present_match** | **bool** | A header with header_name must exist. The match takes place whether or not the header has a value. | [optional] 
**range_match** | [**HttpRouteHeaderMatchIntegerRange**](HttpRouteHeaderMatchIntegerRange.md) |  | [optional] 
**regex_match** | **str** | The value of the header must match the regular expression specified in regex_match. For regular expression grammar, please see: https://github.com/google/re2/wiki/Syntax | [optional] 
**suffix_match** | **str** | The value of the header must end with the contents of suffix_match. | [optional] 

## Example

```python
from openapi_client.models.http_route_header_match import HttpRouteHeaderMatch

# TODO update the JSON string below
json = "{}"
# create an instance of HttpRouteHeaderMatch from a JSON string
http_route_header_match_instance = HttpRouteHeaderMatch.from_json(json)
# print the JSON string representation of the object
print(HttpRouteHeaderMatch.to_json())

# convert the object into a dict
http_route_header_match_dict = http_route_header_match_instance.to_dict()
# create an instance of HttpRouteHeaderMatch from a dict
http_route_header_match_from_dict = HttpRouteHeaderMatch.from_dict(http_route_header_match_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


