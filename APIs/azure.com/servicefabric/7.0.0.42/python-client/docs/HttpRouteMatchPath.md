# HttpRouteMatchPath

Path to match for routing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rewrite** | **str** | replacement string for matched part of the Uri. | [optional] 
**type** | **str** | how to match value in the Uri | 
**value** | **str** | Uri path to match for request. | 

## Example

```python
from openapi_client.models.http_route_match_path import HttpRouteMatchPath

# TODO update the JSON string below
json = "{}"
# create an instance of HttpRouteMatchPath from a JSON string
http_route_match_path_instance = HttpRouteMatchPath.from_json(json)
# print the JSON string representation of the object
print(HttpRouteMatchPath.to_json())

# convert the object into a dict
http_route_match_path_dict = http_route_match_path_instance.to_dict()
# create an instance of HttpRouteMatchPath from a dict
http_route_match_path_from_dict = HttpRouteMatchPath.from_dict(http_route_match_path_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


