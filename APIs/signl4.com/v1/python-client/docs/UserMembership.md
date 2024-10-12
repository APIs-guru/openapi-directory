# UserMembership


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_valid** | **bool** |  | [optional] [readonly] 
**role_id** | **str** |  | [optional] 
**team_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.user_membership import UserMembership

# TODO update the JSON string below
json = "{}"
# create an instance of UserMembership from a JSON string
user_membership_instance = UserMembership.from_json(json)
# print the JSON string representation of the object
print(UserMembership.to_json())

# convert the object into a dict
user_membership_dict = user_membership_instance.to_dict()
# create an instance of UserMembership from a dict
user_membership_from_dict = UserMembership.from_dict(user_membership_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


