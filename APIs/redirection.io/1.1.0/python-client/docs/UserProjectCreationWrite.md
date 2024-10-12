# UserProjectCreationWrite



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**functional_roles** | **List[str]** |  | 
**project** | **str** |  | 
**user** | **str** |  | 

## Example

```python
from openapi_client.models.user_project_creation_write import UserProjectCreationWrite

# TODO update the JSON string below
json = "{}"
# create an instance of UserProjectCreationWrite from a JSON string
user_project_creation_write_instance = UserProjectCreationWrite.from_json(json)
# print the JSON string representation of the object
print(UserProjectCreationWrite.to_json())

# convert the object into a dict
user_project_creation_write_dict = user_project_creation_write_instance.to_dict()
# create an instance of UserProjectCreationWrite from a dict
user_project_creation_write_from_dict = UserProjectCreationWrite.from_dict(user_project_creation_write_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


