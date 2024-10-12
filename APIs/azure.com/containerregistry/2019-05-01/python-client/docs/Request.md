# Request

The request that generated the event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addr** | **str** | The IP or hostname and possibly port of the client connection that initiated the event. This is the RemoteAddr from the standard http request. | [optional] 
**host** | **str** | The externally accessible hostname of the registry instance, as specified by the http host header on incoming requests. | [optional] 
**id** | **str** | The ID of the request that initiated the event. | [optional] 
**method** | **str** | The request method that generated the event. | [optional] 
**useragent** | **str** | The user agent header of the request. | [optional] 

## Example

```python
from openapi_client.models.request import Request

# TODO update the JSON string below
json = "{}"
# create an instance of Request from a JSON string
request_instance = Request.from_json(json)
# print the JSON string representation of the object
print(Request.to_json())

# convert the object into a dict
request_dict = request_instance.to_dict()
# create an instance of Request from a dict
request_from_dict = Request.from_dict(request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


