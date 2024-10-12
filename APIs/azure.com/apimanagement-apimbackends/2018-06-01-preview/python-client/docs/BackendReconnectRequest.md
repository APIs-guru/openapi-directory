# BackendReconnectRequest

Reconnect request parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BackendReconnectRequestProperties**](BackendReconnectRequestProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.backend_reconnect_request import BackendReconnectRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BackendReconnectRequest from a JSON string
backend_reconnect_request_instance = BackendReconnectRequest.from_json(json)
# print the JSON string representation of the object
print(BackendReconnectRequest.to_json())

# convert the object into a dict
backend_reconnect_request_dict = backend_reconnect_request_instance.to_dict()
# create an instance of BackendReconnectRequest from a dict
backend_reconnect_request_from_dict = BackendReconnectRequest.from_dict(backend_reconnect_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


