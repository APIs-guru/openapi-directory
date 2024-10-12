# SavedSearchProperties

Value object for saved search results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | The category of the saved search. This helps the user to find a saved search faster.  | 
**display_name** | **str** | Saved search display name. | 
**query** | **str** | The query expression for the saved search. Please see https://docs.microsoft.com/en-us/azure/log-analytics/log-analytics-search-reference for reference. | 
**tags** | [**List[Tag]**](Tag.md) | The tags attached to the saved search. | [optional] 
**version** | **int** | The version number of the query language. The current version is 2 and is the default. | [optional] 

## Example

```python
from openapi_client.models.saved_search_properties import SavedSearchProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SavedSearchProperties from a JSON string
saved_search_properties_instance = SavedSearchProperties.from_json(json)
# print the JSON string representation of the object
print(SavedSearchProperties.to_json())

# convert the object into a dict
saved_search_properties_dict = saved_search_properties_instance.to_dict()
# create an instance of SavedSearchProperties from a dict
saved_search_properties_from_dict = SavedSearchProperties.from_dict(saved_search_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


