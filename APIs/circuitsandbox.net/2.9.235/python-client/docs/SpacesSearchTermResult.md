# SpacesSearchTermResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**res_list** | [**List[SpacesSearchTerm]**](SpacesSearchTerm.md) | A list of space search terms. | [optional] 

## Example

```python
from openapi_client.models.spaces_search_term_result import SpacesSearchTermResult

# TODO update the JSON string below
json = "{}"
# create an instance of SpacesSearchTermResult from a JSON string
spaces_search_term_result_instance = SpacesSearchTermResult.from_json(json)
# print the JSON string representation of the object
print(SpacesSearchTermResult.to_json())

# convert the object into a dict
spaces_search_term_result_dict = spaces_search_term_result_instance.to_dict()
# create an instance of SpacesSearchTermResult from a dict
spaces_search_term_result_from_dict = SpacesSearchTermResult.from_dict(spaces_search_term_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


