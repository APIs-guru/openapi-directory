# User

Message describing User object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database_roles** | **List[str]** | Optional. List of database roles this user has. The database role strings are subject to the PostgreSQL naming conventions. | [optional] 
**name** | **str** | Output only. Name of the resource in the form of projects/{project}/locations/{location}/cluster/{cluster}/users/{user}. | [optional] [readonly] 
**password** | **str** | Input only. Password for the user. | [optional] 
**user_type** | **str** | Optional. Type of this user. | [optional] 

## Example

```python
from openapi_client.models.user import User

# TODO update the JSON string below
json = "{}"
# create an instance of User from a JSON string
user_instance = User.from_json(json)
# print the JSON string representation of the object
print(User.to_json())

# convert the object into a dict
user_dict = user_instance.to_dict()
# create an instance of User from a dict
user_from_dict = User.from_dict(user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


