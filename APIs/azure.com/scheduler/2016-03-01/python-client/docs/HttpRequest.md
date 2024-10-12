# HttpRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authentication** | [**HttpAuthentication**](HttpAuthentication.md) |  | [optional] 
**body** | **str** | Gets or sets the request body. | [optional] 
**headers** | **Dict[str, str]** | Gets or sets the headers. | [optional] 
**method** | **str** | Gets or sets the method of the request. | [optional] 
**uri** | **str** | Gets or sets the URI of the request. | [optional] 

## Example

```python
from openapi_client.models.http_request import HttpRequest

# TODO update the JSON string below
json = "{}"
# create an instance of HttpRequest from a JSON string
http_request_instance = HttpRequest.from_json(json)
# print the JSON string representation of the object
print(HttpRequest.to_json())

# convert the object into a dict
http_request_dict = http_request_instance.to_dict()
# create an instance of HttpRequest from a dict
http_request_from_dict = HttpRequest.from_dict(http_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


