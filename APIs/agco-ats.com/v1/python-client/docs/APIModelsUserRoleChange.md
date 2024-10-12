# APIModelsUserRoleChange


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | The action to take with the role | 
**name** | **str** | The name of the role | 

## Example

```python
from openapi_client.models.api_models_user_role_change import APIModelsUserRoleChange

# TODO update the JSON string below
json = "{}"
# create an instance of APIModelsUserRoleChange from a JSON string
api_models_user_role_change_instance = APIModelsUserRoleChange.from_json(json)
# print the JSON string representation of the object
print(APIModelsUserRoleChange.to_json())

# convert the object into a dict
api_models_user_role_change_dict = api_models_user_role_change_instance.to_dict()
# create an instance of APIModelsUserRoleChange from a dict
api_models_user_role_change_from_dict = APIModelsUserRoleChange.from_dict(api_models_user_role_change_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


