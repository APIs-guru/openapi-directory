# APIModelsPermission


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_description** | **str** | Description of data to be provided with Role Authorization | [optional] 
**data_required** | **str** | Indicates if data is required or optional | 
**description** | **str** |  | [optional] 
**id** | **int** | The identifier of the permission. | [optional] 
**name** | **str** | The name of the permission. | 

## Example

```python
from openapi_client.models.api_models_permission import APIModelsPermission

# TODO update the JSON string below
json = "{}"
# create an instance of APIModelsPermission from a JSON string
api_models_permission_instance = APIModelsPermission.from_json(json)
# print the JSON string representation of the object
print(APIModelsPermission.to_json())

# convert the object into a dict
api_models_permission_dict = api_models_permission_instance.to_dict()
# create an instance of APIModelsPermission from a dict
api_models_permission_from_dict = APIModelsPermission.from_dict(api_models_permission_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


