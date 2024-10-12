# UpdateSystemModelsPackageReport


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categories** | [**List[UpdateSystemModelsCategory]**](UpdateSystemModelsCategory.md) | The package report&#39;s categories. | [optional] 
**package_description** | **str** | Read Only. The package description | [optional] 
**package_id** | **str** | The PackageID. | [optional] 

## Example

```python
from openapi_client.models.update_system_models_package_report import UpdateSystemModelsPackageReport

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSystemModelsPackageReport from a JSON string
update_system_models_package_report_instance = UpdateSystemModelsPackageReport.from_json(json)
# print the JSON string representation of the object
print(UpdateSystemModelsPackageReport.to_json())

# convert the object into a dict
update_system_models_package_report_dict = update_system_models_package_report_instance.to_dict()
# create an instance of UpdateSystemModelsPackageReport from a dict
update_system_models_package_report_from_dict = UpdateSystemModelsPackageReport.from_dict(update_system_models_package_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


