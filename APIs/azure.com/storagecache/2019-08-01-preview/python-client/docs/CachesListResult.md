# CachesListResult

Result of the request to list caches. It contains a list of caches and a URL link to get the next set of results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of cache list results if there are any. | [optional] 
**value** | [**List[Cache]**](Cache.md) | List of caches. | [optional] 

## Example

```python
from openapi_client.models.caches_list_result import CachesListResult

# TODO update the JSON string below
json = "{}"
# create an instance of CachesListResult from a JSON string
caches_list_result_instance = CachesListResult.from_json(json)
# print the JSON string representation of the object
print(CachesListResult.to_json())

# convert the object into a dict
caches_list_result_dict = caches_list_result_instance.to_dict()
# create an instance of CachesListResult from a dict
caches_list_result_from_dict = CachesListResult.from_dict(caches_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


