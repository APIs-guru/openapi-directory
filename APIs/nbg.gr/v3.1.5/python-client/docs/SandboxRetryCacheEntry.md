# SandboxRetryCacheEntry

Keeps the number of calls without x-fapi-customer-ip-address header present

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cache_key** | **str** | Cache key | [optional] 
**count** | **int** | Number of retries ( up to 4 ) | [optional] 
**expiration_timestamp** | **datetime** | Expiration timestamp of the entry | [optional] 

## Example

```python
from openapi_client.models.sandbox_retry_cache_entry import SandboxRetryCacheEntry

# TODO update the JSON string below
json = "{}"
# create an instance of SandboxRetryCacheEntry from a JSON string
sandbox_retry_cache_entry_instance = SandboxRetryCacheEntry.from_json(json)
# print the JSON string representation of the object
print(SandboxRetryCacheEntry.to_json())

# convert the object into a dict
sandbox_retry_cache_entry_dict = sandbox_retry_cache_entry_instance.to_dict()
# create an instance of SandboxRetryCacheEntry from a dict
sandbox_retry_cache_entry_from_dict = SandboxRetryCacheEntry.from_dict(sandbox_retry_cache_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


