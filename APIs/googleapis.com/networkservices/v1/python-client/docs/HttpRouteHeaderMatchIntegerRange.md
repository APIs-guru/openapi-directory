# HttpRouteHeaderMatchIntegerRange

Represents an integer value range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **int** | End of the range (exclusive) | [optional] 
**start** | **int** | Start of the range (inclusive) | [optional] 

## Example

```python
from openapi_client.models.http_route_header_match_integer_range import HttpRouteHeaderMatchIntegerRange

# TODO update the JSON string below
json = "{}"
# create an instance of HttpRouteHeaderMatchIntegerRange from a JSON string
http_route_header_match_integer_range_instance = HttpRouteHeaderMatchIntegerRange.from_json(json)
# print the JSON string representation of the object
print(HttpRouteHeaderMatchIntegerRange.to_json())

# convert the object into a dict
http_route_header_match_integer_range_dict = http_route_header_match_integer_range_instance.to_dict()
# create an instance of HttpRouteHeaderMatchIntegerRange from a dict
http_route_header_match_integer_range_from_dict = HttpRouteHeaderMatchIntegerRange.from_dict(http_route_header_match_integer_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


