# SavedSearch

Value object for saved search results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**e_tag** | **str** | The ETag of the saved search. | [optional] 
**id** | **str** | The id of the saved search. | [optional] [readonly] 
**name** | **str** | The name of the saved search. | [optional] [readonly] 
**properties** | [**SavedSearchProperties**](SavedSearchProperties.md) |  | 
**type** | **str** | The type of the saved search. | [optional] [readonly] 

## Example

```python
from openapi_client.models.saved_search import SavedSearch

# TODO update the JSON string below
json = "{}"
# create an instance of SavedSearch from a JSON string
saved_search_instance = SavedSearch.from_json(json)
# print the JSON string representation of the object
print(SavedSearch.to_json())

# convert the object into a dict
saved_search_dict = saved_search_instance.to_dict()
# create an instance of SavedSearch from a dict
saved_search_from_dict = SavedSearch.from_dict(saved_search_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


