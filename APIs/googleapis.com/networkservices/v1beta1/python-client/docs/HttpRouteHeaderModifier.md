# HttpRouteHeaderModifier

The specification for modifying HTTP header in HTTP request and HTTP response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**add** | **Dict[str, str]** | Add the headers with given map where key is the name of the header, value is the value of the header. | [optional] 
**remove** | **List[str]** | Remove headers (matching by header names) specified in the list. | [optional] 
**set** | **Dict[str, str]** | Completely overwrite/replace the headers with given map where key is the name of the header, value is the value of the header. | [optional] 

## Example

```python
from openapi_client.models.http_route_header_modifier import HttpRouteHeaderModifier

# TODO update the JSON string below
json = "{}"
# create an instance of HttpRouteHeaderModifier from a JSON string
http_route_header_modifier_instance = HttpRouteHeaderModifier.from_json(json)
# print the JSON string representation of the object
print(HttpRouteHeaderModifier.to_json())

# convert the object into a dict
http_route_header_modifier_dict = http_route_header_modifier_instance.to_dict()
# create an instance of HttpRouteHeaderModifier from a dict
http_route_header_modifier_from_dict = HttpRouteHeaderModifier.from_dict(http_route_header_modifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


