# MembersInitials


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | A string with a length from 1 to 4.  Cannot begin or end with a space | [optional] 

## Example

```python
from openapi_client.models.members_initials import MembersInitials

# TODO update the JSON string below
json = "{}"
# create an instance of MembersInitials from a JSON string
members_initials_instance = MembersInitials.from_json(json)
# print the JSON string representation of the object
print(MembersInitials.to_json())

# convert the object into a dict
members_initials_dict = members_initials_instance.to_dict()
# create an instance of MembersInitials from a dict
members_initials_from_dict = MembersInitials.from_dict(members_initials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


