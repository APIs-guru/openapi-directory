# HttpRequestContext

HTTP request data that is related to a reported error. This data should be provided by the application when reporting an error, unless the error report has been generated automatically from Google App Engine logs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | **str** | The type of HTTP request, such as &#x60;GET&#x60;, &#x60;POST&#x60;, etc. | [optional] 
**referrer** | **str** | The referrer information that is provided with the request. | [optional] 
**remote_ip** | **str** | The IP address from which the request originated. This can be IPv4, IPv6, or a token which is derived from the IP address, depending on the data that has been provided in the error report. | [optional] 
**response_status_code** | **int** | The HTTP response status code for the request. | [optional] 
**url** | **str** | The URL of the request. | [optional] 
**user_agent** | **str** | The user agent information that is provided with the request. | [optional] 

## Example

```python
from openapi_client.models.http_request_context import HttpRequestContext

# TODO update the JSON string below
json = "{}"
# create an instance of HttpRequestContext from a JSON string
http_request_context_instance = HttpRequestContext.from_json(json)
# print the JSON string representation of the object
print(HttpRequestContext.to_json())

# convert the object into a dict
http_request_context_dict = http_request_context_instance.to_dict()
# create an instance of HttpRequestContext from a dict
http_request_context_from_dict = HttpRequestContext.from_dict(http_request_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


