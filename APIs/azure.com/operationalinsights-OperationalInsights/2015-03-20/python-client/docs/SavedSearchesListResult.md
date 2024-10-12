# SavedSearchesListResult

The saved search list operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | [**SearchMetadata**](SearchMetadata.md) |  | [optional] 
**value** | [**List[SavedSearch]**](SavedSearch.md) | The array of result values. | [optional] 

## Example

```python
from openapi_client.models.saved_searches_list_result import SavedSearchesListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SavedSearchesListResult from a JSON string
saved_searches_list_result_instance = SavedSearchesListResult.from_json(json)
# print the JSON string representation of the object
print(SavedSearchesListResult.to_json())

# convert the object into a dict
saved_searches_list_result_dict = saved_searches_list_result_instance.to_dict()
# create an instance of SavedSearchesListResult from a dict
saved_searches_list_result_from_dict = SavedSearchesListResult.from_dict(saved_searches_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


