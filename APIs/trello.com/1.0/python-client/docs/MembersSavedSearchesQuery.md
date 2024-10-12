# MembersSavedSearchesQuery


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | a string with a length from 1 to 16384 | [optional] 

## Example

```python
from openapi_client.models.members_saved_searches_query import MembersSavedSearchesQuery

# TODO update the JSON string below
json = "{}"
# create an instance of MembersSavedSearchesQuery from a JSON string
members_saved_searches_query_instance = MembersSavedSearchesQuery.from_json(json)
# print the JSON string representation of the object
print(MembersSavedSearchesQuery.to_json())

# convert the object into a dict
members_saved_searches_query_dict = members_saved_searches_query_instance.to_dict()
# create an instance of MembersSavedSearchesQuery from a dict
members_saved_searches_query_from_dict = MembersSavedSearchesQuery.from_dict(members_saved_searches_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


