# AnywhereCaches

A list of Anywhere Caches.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[AnywhereCache]**](AnywhereCache.md) | The list of items. | [optional] 
**kind** | **str** | The kind of item this is. For lists of Anywhere Caches, this is always storage#anywhereCaches. | [optional] [default to 'storage#anywhereCaches']
**next_page_token** | **str** | The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results. | [optional] 

## Example

```python
from openapi_client.models.anywhere_caches import AnywhereCaches

# TODO update the JSON string below
json = "{}"
# create an instance of AnywhereCaches from a JSON string
anywhere_caches_instance = AnywhereCaches.from_json(json)
# print the JSON string representation of the object
print(AnywhereCaches.to_json())

# convert the object into a dict
anywhere_caches_dict = anywhere_caches_instance.to_dict()
# create an instance of AnywhereCaches from a dict
anywhere_caches_from_dict = AnywhereCaches.from_dict(anywhere_caches_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


