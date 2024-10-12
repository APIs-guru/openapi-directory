# UserChanges

Alerts from UserChanges bucket Rules for predefined rules which contain the below rules. Suspended user made active New user Added User suspended (by admin) User granted admin privileges User admin privileges revoked User deleted Users password changed

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Rule name | [optional] 

## Example

```python
from openapi_client.models.user_changes import UserChanges

# TODO update the JSON string below
json = "{}"
# create an instance of UserChanges from a JSON string
user_changes_instance = UserChanges.from_json(json)
# print the JSON string representation of the object
print(UserChanges.to_json())

# convert the object into a dict
user_changes_dict = user_changes_instance.to_dict()
# create an instance of UserChanges from a dict
user_changes_from_dict = UserChanges.from_dict(user_changes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


