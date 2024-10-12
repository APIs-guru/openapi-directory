# HttpRequestInfo

The Http request info.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_ip_address** | **str** | the client Ip Address | [optional] 
**client_request_id** | **str** | the client request id. | [optional] 
**method** | **str** | the Http request method. | [optional] 
**uri** | **str** | the Uri. | [optional] 

## Example

```python
from openapi_client.models.http_request_info import HttpRequestInfo

# TODO update the JSON string below
json = "{}"
# create an instance of HttpRequestInfo from a JSON string
http_request_info_instance = HttpRequestInfo.from_json(json)
# print the JSON string representation of the object
print(HttpRequestInfo.to_json())

# convert the object into a dict
http_request_info_dict = http_request_info_instance.to_dict()
# create an instance of HttpRequestInfo from a dict
http_request_info_from_dict = HttpRequestInfo.from_dict(http_request_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


