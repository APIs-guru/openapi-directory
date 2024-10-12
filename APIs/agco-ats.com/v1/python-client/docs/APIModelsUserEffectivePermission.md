# APIModelsUserEffectivePermission


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**permission_id** | **int** |  | [optional] 
**permission_name** | **str** |  | [optional] 
**user_id** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.api_models_user_effective_permission import APIModelsUserEffectivePermission

# TODO update the JSON string below
json = "{}"
# create an instance of APIModelsUserEffectivePermission from a JSON string
api_models_user_effective_permission_instance = APIModelsUserEffectivePermission.from_json(json)
# print the JSON string representation of the object
print(APIModelsUserEffectivePermission.to_json())

# convert the object into a dict
api_models_user_effective_permission_dict = api_models_user_effective_permission_instance.to_dict()
# create an instance of APIModelsUserEffectivePermission from a dict
api_models_user_effective_permission_from_dict = APIModelsUserEffectivePermission.from_dict(api_models_user_effective_permission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


