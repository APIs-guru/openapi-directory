# HttpHeaderMatch

Specification of HTTP header match attributes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**header_name** | **str** | Required. The name of the HTTP header to match. For matching against the HTTP request&#39;s authority, use a headerMatch with the header name \&quot;:authority\&quot;. For matching a request&#39;s method, use the headerName \&quot;:method\&quot;. | [optional] 
**regex_match** | **str** | Required. The value of the header must match the regular expression specified in regexMatch. For regular expression grammar, please see: en.cppreference.com/w/cpp/regex/ecmascript For matching against a port specified in the HTTP request, use a headerMatch with headerName set to Host and a regular expression that satisfies the RFC2616 Host header&#39;s port specifier. | [optional] 

## Example

```python
from openapi_client.models.http_header_match import HttpHeaderMatch

# TODO update the JSON string below
json = "{}"
# create an instance of HttpHeaderMatch from a JSON string
http_header_match_instance = HttpHeaderMatch.from_json(json)
# print the JSON string representation of the object
print(HttpHeaderMatch.to_json())

# convert the object into a dict
http_header_match_dict = http_header_match_instance.to_dict()
# create an instance of HttpHeaderMatch from a dict
http_header_match_from_dict = HttpHeaderMatch.from_dict(http_header_match_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


