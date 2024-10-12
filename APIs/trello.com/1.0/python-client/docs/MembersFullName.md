# MembersFullName


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | A string with a length of at least 1.  Cannot begin or end with a space. | [optional] 

## Example

```python
from openapi_client.models.members_full_name import MembersFullName

# TODO update the JSON string below
json = "{}"
# create an instance of MembersFullName from a JSON string
members_full_name_instance = MembersFullName.from_json(json)
# print the JSON string representation of the object
print(MembersFullName.to_json())

# convert the object into a dict
members_full_name_dict = members_full_name_instance.to_dict()
# create an instance of MembersFullName from a dict
members_full_name_from_dict = MembersFullName.from_dict(members_full_name_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


