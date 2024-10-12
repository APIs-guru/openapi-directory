# UpdateSystemModelsPackageStatusSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average_download_time** | **str** | The average time required to complete the download | [optional] 
**average_install_time** | **str** | The average time required to complete the install | [optional] 
**downloaded** | **int** | The number of clients that have completed the download | [optional] 
**error** | **int** | The result of the install | [optional] 
**installed** | **int** | The number of clients that have completed the install | [optional] 
**package** | **str** | The name of the package | [optional] 
**package_id** | **str** | The ID of the package | [optional] 
**package_status_items** | [**List[UpdateSystemModelsPackageStatus]**](UpdateSystemModelsPackageStatus.md) | The individual package status items | [optional] 

## Example

```python
from openapi_client.models.update_system_models_package_status_summary import UpdateSystemModelsPackageStatusSummary

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSystemModelsPackageStatusSummary from a JSON string
update_system_models_package_status_summary_instance = UpdateSystemModelsPackageStatusSummary.from_json(json)
# print the JSON string representation of the object
print(UpdateSystemModelsPackageStatusSummary.to_json())

# convert the object into a dict
update_system_models_package_status_summary_dict = update_system_models_package_status_summary_instance.to_dict()
# create an instance of UpdateSystemModelsPackageStatusSummary from a dict
update_system_models_package_status_summary_from_dict = UpdateSystemModelsPackageStatusSummary.from_dict(update_system_models_package_status_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


