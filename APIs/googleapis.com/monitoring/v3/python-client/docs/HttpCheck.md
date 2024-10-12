# HttpCheck

Information involved in an HTTP/HTTPS Uptime check request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accepted_response_status_codes** | [**List[ResponseStatusCode]**](ResponseStatusCode.md) | If present, the check will only pass if the HTTP response status code is in this set of status codes. If empty, the HTTP status code will only pass if the HTTP status code is 200-299. | [optional] 
**auth_info** | [**BasicAuthentication**](BasicAuthentication.md) |  | [optional] 
**body** | **bytearray** | The request body associated with the HTTP POST request. If content_type is URL_ENCODED, the body passed in must be URL-encoded. Users can provide a Content-Length header via the headers field or the API will do so. If the request_method is GET and body is not empty, the API will return an error. The maximum byte size is 1 megabyte.Note: If client libraries aren&#39;t used (which performs the conversion automatically) base64 encode your body data since the field is of bytes type. | [optional] 
**content_type** | **str** | The content type header to use for the check. The following configurations result in errors: 1. Content type is specified in both the headers field and the content_type field. 2. Request method is GET and content_type is not TYPE_UNSPECIFIED 3. Request method is POST and content_type is TYPE_UNSPECIFIED. 4. Request method is POST and a \&quot;Content-Type\&quot; header is provided via headers field. The content_type field should be used instead. | [optional] 
**custom_content_type** | **str** | A user provided content type header to use for the check. The invalid configurations outlined in the content_type field apply to custom_content_type, as well as the following: 1. content_type is URL_ENCODED and custom_content_type is set. 2. content_type is USER_PROVIDED and custom_content_type is not set. | [optional] 
**headers** | **Dict[str, str]** | The list of headers to send as part of the Uptime check request. If two headers have the same key and different values, they should be entered as a single header, with the value being a comma-separated list of all the desired values as described at https://www.w3.org/Protocols/rfc2616/rfc2616.txt (page 31). Entering two separate headers with the same key in a Create call will cause the first to be overwritten by the second. The maximum number of headers allowed is 100. | [optional] 
**mask_headers** | **bool** | Boolean specifying whether to encrypt the header information. Encryption should be specified for any headers related to authentication that you do not wish to be seen when retrieving the configuration. The server will be responsible for encrypting the headers. On Get/List calls, if mask_headers is set to true then the headers will be obscured with ******. | [optional] 
**path** | **str** | Optional (defaults to \&quot;/\&quot;). The path to the page against which to run the check. Will be combined with the host (specified within the monitored_resource) and port to construct the full URL. If the provided path does not begin with \&quot;/\&quot;, a \&quot;/\&quot; will be prepended automatically. | [optional] 
**ping_config** | [**PingConfig**](PingConfig.md) |  | [optional] 
**port** | **int** | Optional (defaults to 80 when use_ssl is false, and 443 when use_ssl is true). The TCP port on the HTTP server against which to run the check. Will be combined with host (specified within the monitored_resource) and path to construct the full URL. | [optional] 
**request_method** | **str** | The HTTP request method to use for the check. If set to METHOD_UNSPECIFIED then request_method defaults to GET. | [optional] 
**use_ssl** | **bool** | If true, use HTTPS instead of HTTP to run the check. | [optional] 
**validate_ssl** | **bool** | Boolean specifying whether to include SSL certificate validation as a part of the Uptime check. Only applies to checks where monitored_resource is set to uptime_url. If use_ssl is false, setting validate_ssl to true has no effect. | [optional] 

## Example

```python
from openapi_client.models.http_check import HttpCheck

# TODO update the JSON string below
json = "{}"
# create an instance of HttpCheck from a JSON string
http_check_instance = HttpCheck.from_json(json)
# print the JSON string representation of the object
print(HttpCheck.to_json())

# convert the object into a dict
http_check_dict = http_check_instance.to_dict()
# create an instance of HttpCheck from a dict
http_check_from_dict = HttpCheck.from_dict(http_check_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


