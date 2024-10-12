# CacheUpdateRequest

Cache update details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**CacheUpdateRequestProperties**](CacheUpdateRequestProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.cache_update_request import CacheUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CacheUpdateRequest from a JSON string
cache_update_request_instance = CacheUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(CacheUpdateRequest.to_json())

# convert the object into a dict
cache_update_request_dict = cache_update_request_instance.to_dict()
# create an instance of CacheUpdateRequest from a dict
cache_update_request_from_dict = CacheUpdateRequest.from_dict(cache_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


