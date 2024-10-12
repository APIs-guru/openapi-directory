# BackendUpdateRequest

Backend update parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**BackendUpdateRequestProperties**](BackendUpdateRequestProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.backend_update_request import BackendUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BackendUpdateRequest from a JSON string
backend_update_request_instance = BackendUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(BackendUpdateRequest.to_json())

# convert the object into a dict
backend_update_request_dict = backend_update_request_instance.to_dict()
# create an instance of BackendUpdateRequest from a dict
backend_update_request_from_dict = BackendUpdateRequest.from_dict(backend_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


