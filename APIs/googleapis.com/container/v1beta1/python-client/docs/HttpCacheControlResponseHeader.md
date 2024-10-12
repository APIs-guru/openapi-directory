# HttpCacheControlResponseHeader

RFC-2616: cache control support

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**age** | **str** | 14.6 response cache age, in seconds since the response is generated | [optional] 
**directive** | **str** | 14.9 request and response directives | [optional] 
**expires** | **str** | 14.21 response cache expires, in RFC 1123 date format | [optional] 

## Example

```python
from openapi_client.models.http_cache_control_response_header import HttpCacheControlResponseHeader

# TODO update the JSON string below
json = "{}"
# create an instance of HttpCacheControlResponseHeader from a JSON string
http_cache_control_response_header_instance = HttpCacheControlResponseHeader.from_json(json)
# print the JSON string representation of the object
print(HttpCacheControlResponseHeader.to_json())

# convert the object into a dict
http_cache_control_response_header_dict = http_cache_control_response_header_instance.to_dict()
# create an instance of HttpCacheControlResponseHeader from a dict
http_cache_control_response_header_from_dict = HttpCacheControlResponseHeader.from_dict(http_cache_control_response_header_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


