# AnywhereCache

An Anywhere Cache instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admission_policy** | **str** | The cache-level entry admission policy. | [optional] 
**anywhere_cache_id** | **str** | The ID of the Anywhere cache instance. | [optional] 
**bucket** | **str** | The name of the bucket containing this cache instance. | [optional] 
**create_time** | **datetime** | The creation time of the cache instance in RFC 3339 format. | [optional] 
**id** | **str** | The ID of the resource, including the project number, bucket name and anywhere cache ID. | [optional] 
**kind** | **str** | The kind of item this is. For Anywhere Cache, this is always storage#anywhereCache. | [optional] [default to 'storage#anywhereCache']
**pending_update** | **bool** | True if the cache instance has an active Update long-running operation. | [optional] 
**self_link** | **str** | The link to this cache instance. | [optional] 
**state** | **str** | The current state of the cache instance. | [optional] 
**ttl** | **str** | The TTL of all cache entries in whole seconds. e.g., \&quot;7200s\&quot;.  | [optional] 
**update_time** | **datetime** | The modification time of the cache instance metadata in RFC 3339 format. | [optional] 
**zone** | **str** | The zone in which the cache instance is running. For example, us-central1-a. | [optional] 

## Example

```python
from openapi_client.models.anywhere_cache import AnywhereCache

# TODO update the JSON string below
json = "{}"
# create an instance of AnywhereCache from a JSON string
anywhere_cache_instance = AnywhereCache.from_json(json)
# print the JSON string representation of the object
print(AnywhereCache.to_json())

# convert the object into a dict
anywhere_cache_dict = anywhere_cache_instance.to_dict()
# create an instance of AnywhereCache from a dict
anywhere_cache_from_dict = AnywhereCache.from_dict(anywhere_cache_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


