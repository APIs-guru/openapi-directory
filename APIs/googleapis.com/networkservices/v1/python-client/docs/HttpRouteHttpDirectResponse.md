# HttpRouteHttpDirectResponse

Static HTTP response object to be returned.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bytes_body** | **bytearray** | Optional. Response body as bytes. Maximum body size is 4096B. | [optional] 
**status** | **int** | Required. Status to return as part of HTTP Response. Must be a positive integer. | [optional] 
**string_body** | **str** | Optional. Response body as a string. Maximum body length is 1024 characters. | [optional] 

## Example

```python
from openapi_client.models.http_route_http_direct_response import HttpRouteHttpDirectResponse

# TODO update the JSON string below
json = "{}"
# create an instance of HttpRouteHttpDirectResponse from a JSON string
http_route_http_direct_response_instance = HttpRouteHttpDirectResponse.from_json(json)
# print the JSON string representation of the object
print(HttpRouteHttpDirectResponse.to_json())

# convert the object into a dict
http_route_http_direct_response_dict = http_route_http_direct_response_instance.to_dict()
# create an instance of HttpRouteHttpDirectResponse from a dict
http_route_http_direct_response_from_dict = HttpRouteHttpDirectResponse.from_dict(http_route_http_direct_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


