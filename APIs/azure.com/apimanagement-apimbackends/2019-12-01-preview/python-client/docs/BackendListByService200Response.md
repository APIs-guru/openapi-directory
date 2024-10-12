# BackendListByService200Response

Paged Backend list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[BackendListByService200ResponseValueInner]**](BackendListByService200ResponseValueInner.md) | Backend values. | [optional] 

## Example

```python
from openapi_client.models.backend_list_by_service200_response import BackendListByService200Response

# TODO update the JSON string below
json = "{}"
# create an instance of BackendListByService200Response from a JSON string
backend_list_by_service200_response_instance = BackendListByService200Response.from_json(json)
# print the JSON string representation of the object
print(BackendListByService200Response.to_json())

# convert the object into a dict
backend_list_by_service200_response_dict = backend_list_by_service200_response_instance.to_dict()
# create an instance of BackendListByService200Response from a dict
backend_list_by_service200_response_from_dict = BackendListByService200Response.from_dict(backend_list_by_service200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


