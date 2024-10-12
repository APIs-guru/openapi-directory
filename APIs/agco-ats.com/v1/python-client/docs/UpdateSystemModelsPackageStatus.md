# UpdateSystemModelsPackageStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | The id of the client | [optional] 
**client_key** | **str** | The client&#39;s tag | [optional] 
**download_time** | **str** | The amount of time spent downloading | [optional] 
**downloaded** | **str** | The number of bytes downloaded | [optional] 
**install_completed** | **str** | The time the package completed | [optional] 
**install_result** | **str** | The package result | [optional] 
**install_started** | **str** | The time the package was started | [optional] 
**install_time** | **str** | The amount of time required to run the package | [optional] 
**percentage** | **str** | The download completion percentage | [optional] 
**size** | **str** | The total size of the package | [optional] 
**timestamp** | **datetime** | The time the status was last updated | [optional] 

## Example

```python
from openapi_client.models.update_system_models_package_status import UpdateSystemModelsPackageStatus

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSystemModelsPackageStatus from a JSON string
update_system_models_package_status_instance = UpdateSystemModelsPackageStatus.from_json(json)
# print the JSON string representation of the object
print(UpdateSystemModelsPackageStatus.to_json())

# convert the object into a dict
update_system_models_package_status_dict = update_system_models_package_status_instance.to_dict()
# create an instance of UpdateSystemModelsPackageStatus from a dict
update_system_models_package_status_from_dict = UpdateSystemModelsPackageStatus.from_dict(update_system_models_package_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


