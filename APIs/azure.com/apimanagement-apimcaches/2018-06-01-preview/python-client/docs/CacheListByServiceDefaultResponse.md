# CacheListByServiceDefaultResponse

Error Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**CacheListByServiceDefaultResponseError**](CacheListByServiceDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.cache_list_by_service_default_response import CacheListByServiceDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CacheListByServiceDefaultResponse from a JSON string
cache_list_by_service_default_response_instance = CacheListByServiceDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(CacheListByServiceDefaultResponse.to_json())

# convert the object into a dict
cache_list_by_service_default_response_dict = cache_list_by_service_default_response_instance.to_dict()
# create an instance of CacheListByServiceDefaultResponse from a dict
cache_list_by_service_default_response_from_dict = CacheListByServiceDefaultResponse.from_dict(cache_list_by_service_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


