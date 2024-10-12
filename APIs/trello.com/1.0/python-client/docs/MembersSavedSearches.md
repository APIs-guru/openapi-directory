# MembersSavedSearches


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | A non-empty string with at least one non-space character | [optional] 
**pos** | **str** | A position. top , bottom , or a positive number. | [optional] 
**query** | **str** | a string with a length from 1 to 16384 | [optional] 

## Example

```python
from openapi_client.models.members_saved_searches import MembersSavedSearches

# TODO update the JSON string below
json = "{}"
# create an instance of MembersSavedSearches from a JSON string
members_saved_searches_instance = MembersSavedSearches.from_json(json)
# print the JSON string representation of the object
print(MembersSavedSearches.to_json())

# convert the object into a dict
members_saved_searches_dict = members_saved_searches_instance.to_dict()
# create an instance of MembersSavedSearches from a dict
members_saved_searches_from_dict = MembersSavedSearches.from_dict(members_saved_searches_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


