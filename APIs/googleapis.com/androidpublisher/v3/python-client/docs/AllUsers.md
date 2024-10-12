# AllUsers

Object representation to describe all set of users.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_all_users_requested** | **bool** | Required. Set to true if all set of users are needed. | [optional] 

## Example

```python
from openapi_client.models.all_users import AllUsers

# TODO update the JSON string below
json = "{}"
# create an instance of AllUsers from a JSON string
all_users_instance = AllUsers.from_json(json)
# print the JSON string representation of the object
print(AllUsers.to_json())

# convert the object into a dict
all_users_dict = all_users_instance.to_dict()
# create an instance of AllUsers from a dict
all_users_from_dict = AllUsers.from_dict(all_users_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


