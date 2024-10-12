# UpdateSystemModelsPackageTypeIDtoBundle


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bundle_id** | **str** | The bundle to include the package in. | 
**package_type_id** | **str** | The package type id of the package to include | 
**package_version** | **int** | The package version of the package to include | 
**priority** | **int** | The execution priority of the package relative to other packages in the bundle. Range 1 - 100, lower value indication higher priority. | 
**subscription_type** | **str** | Optional. The type of subscription supported.  The default subscription type is Required. | [optional] 

## Example

```python
from openapi_client.models.update_system_models_package_type_i_dto_bundle import UpdateSystemModelsPackageTypeIDtoBundle

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSystemModelsPackageTypeIDtoBundle from a JSON string
update_system_models_package_type_i_dto_bundle_instance = UpdateSystemModelsPackageTypeIDtoBundle.from_json(json)
# print the JSON string representation of the object
print(UpdateSystemModelsPackageTypeIDtoBundle.to_json())

# convert the object into a dict
update_system_models_package_type_i_dto_bundle_dict = update_system_models_package_type_i_dto_bundle_instance.to_dict()
# create an instance of UpdateSystemModelsPackageTypeIDtoBundle from a dict
update_system_models_package_type_i_dto_bundle_from_dict = UpdateSystemModelsPackageTypeIDtoBundle.from_dict(update_system_models_package_type_i_dto_bundle_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


