# APIModelsRoleUserChange


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | The action to take with the user | 
**id** | **int** | The Id of the User | 

## Example

```python
from openapi_client.models.api_models_role_user_change import APIModelsRoleUserChange

# TODO update the JSON string below
json = "{}"
# create an instance of APIModelsRoleUserChange from a JSON string
api_models_role_user_change_instance = APIModelsRoleUserChange.from_json(json)
# print the JSON string representation of the object
print(APIModelsRoleUserChange.to_json())

# convert the object into a dict
api_models_role_user_change_dict = api_models_role_user_change_instance.to_dict()
# create an instance of APIModelsRoleUserChange from a dict
api_models_role_user_change_from_dict = APIModelsRoleUserChange.from_dict(api_models_role_user_change_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


