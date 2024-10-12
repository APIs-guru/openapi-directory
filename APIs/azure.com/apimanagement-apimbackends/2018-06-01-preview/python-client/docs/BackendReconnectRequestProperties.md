# BackendReconnectRequestProperties

Properties to control reconnect requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**after** | **str** | Duration in ISO8601 format after which reconnect will be initiated. Minimum duration of the Reconnect is PT2M. | [optional] 

## Example

```python
from openapi_client.models.backend_reconnect_request_properties import BackendReconnectRequestProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BackendReconnectRequestProperties from a JSON string
backend_reconnect_request_properties_instance = BackendReconnectRequestProperties.from_json(json)
# print the JSON string representation of the object
print(BackendReconnectRequestProperties.to_json())

# convert the object into a dict
backend_reconnect_request_properties_dict = backend_reconnect_request_properties_instance.to_dict()
# create an instance of BackendReconnectRequestProperties from a dict
backend_reconnect_request_properties_from_dict = BackendReconnectRequestProperties.from_dict(backend_reconnect_request_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


