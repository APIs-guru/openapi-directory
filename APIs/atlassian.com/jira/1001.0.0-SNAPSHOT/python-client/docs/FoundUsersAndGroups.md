# FoundUsersAndGroups

List of users and groups found in a search.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groups** | [**FoundGroups**](FoundGroups.md) |  | [optional] 
**users** | [**FoundUsers**](FoundUsers.md) |  | [optional] 

## Example

```python
from openapi_client.models.found_users_and_groups import FoundUsersAndGroups

# TODO update the JSON string below
json = "{}"
# create an instance of FoundUsersAndGroups from a JSON string
found_users_and_groups_instance = FoundUsersAndGroups.from_json(json)
# print the JSON string representation of the object
print(FoundUsersAndGroups.to_json())

# convert the object into a dict
found_users_and_groups_dict = found_users_and_groups_instance.to_dict()
# create an instance of FoundUsersAndGroups from a dict
found_users_and_groups_from_dict = FoundUsersAndGroups.from_dict(found_users_and_groups_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


