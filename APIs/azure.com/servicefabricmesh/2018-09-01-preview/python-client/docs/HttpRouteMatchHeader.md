# HttpRouteMatchHeader

Describes header information for http route matching.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of header to match in request. | 
**type** | **str** | how to match header value | [optional] 
**value** | **str** | Value of header to match in request. | [optional] 

## Example

```python
from openapi_client.models.http_route_match_header import HttpRouteMatchHeader

# TODO update the JSON string below
json = "{}"
# create an instance of HttpRouteMatchHeader from a JSON string
http_route_match_header_instance = HttpRouteMatchHeader.from_json(json)
# print the JSON string representation of the object
print(HttpRouteMatchHeader.to_json())

# convert the object into a dict
http_route_match_header_dict = http_route_match_header_instance.to_dict()
# create an instance of HttpRouteMatchHeader from a dict
http_route_match_header_from_dict = HttpRouteMatchHeader.from_dict(http_route_match_header_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


