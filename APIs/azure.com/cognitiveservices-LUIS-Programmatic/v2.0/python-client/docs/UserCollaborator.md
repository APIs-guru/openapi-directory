# UserCollaborator


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The email address of the user. | [optional] 

## Example

```python
from openapi_client.models.user_collaborator import UserCollaborator

# TODO update the JSON string below
json = "{}"
# create an instance of UserCollaborator from a JSON string
user_collaborator_instance = UserCollaborator.from_json(json)
# print the JSON string representation of the object
print(UserCollaborator.to_json())

# convert the object into a dict
user_collaborator_dict = user_collaborator_instance.to_dict()
# create an instance of UserCollaborator from a dict
user_collaborator_from_dict = UserCollaborator.from_dict(user_collaborator_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


