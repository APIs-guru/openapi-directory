# HTTPGetAction

HTTPGetAction describes an action based on HTTP Get requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host** | **str** | Not supported by Cloud Run. | [optional] 
**http_headers** | [**List[HTTPHeader]**](HTTPHeader.md) | Custom headers to set in the request. HTTP allows repeated headers. | [optional] 
**path** | **str** | Path to access on the HTTP server. | [optional] 
**port** | **int** | Port number to access on the container. Number must be in the range 1 to 65535. | [optional] 
**scheme** | **str** | Not supported by Cloud Run. | [optional] 

## Example

```python
from openapi_client.models.http_get_action import HTTPGetAction

# TODO update the JSON string below
json = "{}"
# create an instance of HTTPGetAction from a JSON string
http_get_action_instance = HTTPGetAction.from_json(json)
# print the JSON string representation of the object
print(HTTPGetAction.to_json())

# convert the object into a dict
http_get_action_dict = http_get_action_instance.to_dict()
# create an instance of HTTPGetAction from a dict
http_get_action_from_dict = HTTPGetAction.from_dict(http_get_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


