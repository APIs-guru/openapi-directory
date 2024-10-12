# MembersUsername


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | A string with a length of at least 3.  Only lowercase letters, underscores, and numbers are allowed.  Must be unique. | [optional] 

## Example

```python
from openapi_client.models.members_username import MembersUsername

# TODO update the JSON string below
json = "{}"
# create an instance of MembersUsername from a JSON string
members_username_instance = MembersUsername.from_json(json)
# print the JSON string representation of the object
print(MembersUsername.to_json())

# convert the object into a dict
members_username_dict = members_username_instance.to_dict()
# create an instance of MembersUsername from a dict
members_username_from_dict = MembersUsername.from_dict(members_username_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


