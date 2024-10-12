# SpacesSearchTerm


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **object** | The end time | [optional] 
**scope** | **str** | The scope of the search | [optional] 
**search_term** | **str** | The search term | [optional] 
**start_time** | **object** | The start time | [optional] 

## Example

```python
from openapi_client.models.spaces_search_term import SpacesSearchTerm

# TODO update the JSON string below
json = "{}"
# create an instance of SpacesSearchTerm from a JSON string
spaces_search_term_instance = SpacesSearchTerm.from_json(json)
# print the JSON string representation of the object
print(SpacesSearchTerm.to_json())

# convert the object into a dict
spaces_search_term_dict = spaces_search_term_instance.to_dict()
# create an instance of SpacesSearchTerm from a dict
spaces_search_term_from_dict = SpacesSearchTerm.from_dict(spaces_search_term_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


