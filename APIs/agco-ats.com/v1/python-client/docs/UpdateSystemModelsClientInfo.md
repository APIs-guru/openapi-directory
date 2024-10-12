# UpdateSystemModelsClientInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | The id of the client | [optional] 
**package** | [**List[UpdateSystemModelsPackageReport]**](UpdateSystemModelsPackageReport.md) | The packages | [optional] 

## Example

```python
from openapi_client.models.update_system_models_client_info import UpdateSystemModelsClientInfo

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSystemModelsClientInfo from a JSON string
update_system_models_client_info_instance = UpdateSystemModelsClientInfo.from_json(json)
# print the JSON string representation of the object
print(UpdateSystemModelsClientInfo.to_json())

# convert the object into a dict
update_system_models_client_info_dict = update_system_models_client_info_instance.to_dict()
# create an instance of UpdateSystemModelsClientInfo from a dict
update_system_models_client_info_from_dict = UpdateSystemModelsClientInfo.from_dict(update_system_models_client_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


