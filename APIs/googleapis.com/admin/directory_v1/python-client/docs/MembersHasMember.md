# MembersHasMember

JSON template for Has Member response in Directory API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_member** | **bool** | Output only. Identifies whether the given user is a member of the group. Membership can be direct or nested. | [optional] [readonly] 

## Example

```python
from openapi_client.models.members_has_member import MembersHasMember

# TODO update the JSON string below
json = "{}"
# create an instance of MembersHasMember from a JSON string
members_has_member_instance = MembersHasMember.from_json(json)
# print the JSON string representation of the object
print(MembersHasMember.to_json())

# convert the object into a dict
members_has_member_dict = members_has_member_instance.to_dict()
# create an instance of MembersHasMember from a dict
members_has_member_from_dict = MembersHasMember.from_dict(members_has_member_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


