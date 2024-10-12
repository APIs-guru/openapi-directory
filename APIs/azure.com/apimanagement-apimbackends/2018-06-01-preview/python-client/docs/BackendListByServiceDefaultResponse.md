# BackendListByServiceDefaultResponse

Error Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**BackendListByServiceDefaultResponseError**](BackendListByServiceDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.backend_list_by_service_default_response import BackendListByServiceDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BackendListByServiceDefaultResponse from a JSON string
backend_list_by_service_default_response_instance = BackendListByServiceDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(BackendListByServiceDefaultResponse.to_json())

# convert the object into a dict
backend_list_by_service_default_response_dict = backend_list_by_service_default_response_instance.to_dict()
# create an instance of BackendListByServiceDefaultResponse from a dict
backend_list_by_service_default_response_from_dict = BackendListByServiceDefaultResponse.from_dict(backend_list_by_service_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


