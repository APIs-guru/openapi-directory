# SearchCriteria


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **List[str]** |  | [optional] 
**min_possible_match_count** | **str** | Determines how many minimum matches present for a merchant or inquiry to appear in the results. | [optional] 
**region** | **List[str]** |  | [optional] 
**search_all** | **str** | Determines if the inquiry is worldwide or not. | 

## Example

```python
from openapi_client.models.search_criteria import SearchCriteria

# TODO update the JSON string below
json = "{}"
# create an instance of SearchCriteria from a JSON string
search_criteria_instance = SearchCriteria.from_json(json)
# print the JSON string representation of the object
print(SearchCriteria.to_json())

# convert the object into a dict
search_criteria_dict = search_criteria_instance.to_dict()
# create an instance of SearchCriteria from a dict
search_criteria_from_dict = SearchCriteria.from_dict(search_criteria_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


