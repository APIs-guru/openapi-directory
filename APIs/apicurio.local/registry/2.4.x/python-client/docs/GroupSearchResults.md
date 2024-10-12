# GroupSearchResults

Describes the response received when searching for groups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | The total number of groups that matched the query that produced the result set (may be  more than the number of groups in the result set). | 
**groups** | [**List[SearchedGroup]**](SearchedGroup.md) | The groups returned in the result set. | 

## Example

```python
from openapi_client.models.group_search_results import GroupSearchResults

# TODO update the JSON string below
json = "{}"
# create an instance of GroupSearchResults from a JSON string
group_search_results_instance = GroupSearchResults.from_json(json)
# print the JSON string representation of the object
print(GroupSearchResults.to_json())

# convert the object into a dict
group_search_results_dict = group_search_results_instance.to_dict()
# create an instance of GroupSearchResults from a dict
group_search_results_from_dict = GroupSearchResults.from_dict(group_search_results_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


