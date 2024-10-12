# APIModelsRole

Defines an API Role

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Role description | 
**id** | **int** | The role&#39;s identifier. | [optional] 
**name** | **str** | The name of the role. Must be alpha-numeric strings separated by a period (.). | 

## Example

```python
from openapi_client.models.api_models_role import APIModelsRole

# TODO update the JSON string below
json = "{}"
# create an instance of APIModelsRole from a JSON string
api_models_role_instance = APIModelsRole.from_json(json)
# print the JSON string representation of the object
print(APIModelsRole.to_json())

# convert the object into a dict
api_models_role_dict = api_models_role_instance.to_dict()
# create an instance of APIModelsRole from a dict
api_models_role_from_dict = APIModelsRole.from_dict(api_models_role_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


