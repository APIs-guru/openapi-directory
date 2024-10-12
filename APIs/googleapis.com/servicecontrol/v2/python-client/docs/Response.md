# Response

This message defines attributes for a typical network response. It generally models semantics of an HTTP response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backend_latency** | **str** | The amount of time it takes the backend service to fully respond to a request. Measured from when the destination service starts to send the request to the backend until when the destination service receives the complete response from the backend. | [optional] 
**code** | **str** | The HTTP response status code, such as &#x60;200&#x60; and &#x60;404&#x60;. | [optional] 
**headers** | **Dict[str, str]** | The HTTP response headers. If multiple headers share the same key, they must be merged according to HTTP spec. All header keys must be lowercased, because HTTP header keys are case-insensitive. | [optional] 
**size** | **str** | The HTTP response size in bytes. If unknown, it must be -1. | [optional] 
**time** | **str** | The timestamp when the &#x60;destination&#x60; service sends the last byte of the response. | [optional] 

## Example

```python
from openapi_client.models.response import Response

# TODO update the JSON string below
json = "{}"
# create an instance of Response from a JSON string
response_instance = Response.from_json(json)
# print the JSON string representation of the object
print(Response.to_json())

# convert the object into a dict
response_dict = response_instance.to_dict()
# create an instance of Response from a dict
response_from_dict = Response.from_dict(response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


