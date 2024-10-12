# HttpRouteRedirect

The specification for redirecting traffic.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host_redirect** | **str** | The host that will be used in the redirect response instead of the one that was supplied in the request. | [optional] 
**https_redirect** | **bool** | If set to true, the URL scheme in the redirected request is set to https. If set to false, the URL scheme of the redirected request will remain the same as that of the request. The default is set to false. | [optional] 
**path_redirect** | **str** | The path that will be used in the redirect response instead of the one that was supplied in the request. path_redirect can not be supplied together with prefix_redirect. Supply one alone or neither. If neither is supplied, the path of the original request will be used for the redirect. | [optional] 
**port_redirect** | **int** | The port that will be used in the redirected request instead of the one that was supplied in the request. | [optional] 
**prefix_rewrite** | **str** | Indicates that during redirection, the matched prefix (or path) should be swapped with this value. This option allows URLs be dynamically created based on the request. | [optional] 
**response_code** | **str** | The HTTP Status code to use for the redirect. | [optional] 
**strip_query** | **bool** | if set to true, any accompanying query portion of the original URL is removed prior to redirecting the request. If set to false, the query portion of the original URL is retained. The default is set to false. | [optional] 

## Example

```python
from openapi_client.models.http_route_redirect import HttpRouteRedirect

# TODO update the JSON string below
json = "{}"
# create an instance of HttpRouteRedirect from a JSON string
http_route_redirect_instance = HttpRouteRedirect.from_json(json)
# print the JSON string representation of the object
print(HttpRouteRedirect.to_json())

# convert the object into a dict
http_route_redirect_dict = http_route_redirect_instance.to_dict()
# create an instance of HttpRouteRedirect from a dict
http_route_redirect_from_dict = HttpRouteRedirect.from_dict(http_route_redirect_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


