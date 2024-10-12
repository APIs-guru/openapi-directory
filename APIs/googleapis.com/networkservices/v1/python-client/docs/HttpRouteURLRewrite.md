# HttpRouteURLRewrite

The specification for modifying the URL of the request, prior to forwarding the request to the destination.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host_rewrite** | **str** | Prior to forwarding the request to the selected destination, the requests host header is replaced by this value. | [optional] 
**path_prefix_rewrite** | **str** | Prior to forwarding the request to the selected destination, the matching portion of the requests path is replaced by this value. | [optional] 

## Example

```python
from openapi_client.models.http_route_url_rewrite import HttpRouteURLRewrite

# TODO update the JSON string below
json = "{}"
# create an instance of HttpRouteURLRewrite from a JSON string
http_route_url_rewrite_instance = HttpRouteURLRewrite.from_json(json)
# print the JSON string representation of the object
print(HttpRouteURLRewrite.to_json())

# convert the object into a dict
http_route_url_rewrite_dict = http_route_url_rewrite_instance.to_dict()
# create an instance of HttpRouteURLRewrite from a dict
http_route_url_rewrite_from_dict = HttpRouteURLRewrite.from_dict(http_route_url_rewrite_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


