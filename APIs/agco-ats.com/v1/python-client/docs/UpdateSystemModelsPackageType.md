# UpdateSystemModelsPackageType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute** | **str** | The inventory attribute (from the InventoryPackage) used to determine what version of this package type is installed. | [optional] 
**category** | **str** | The inventory category (from the InventoryPackage) used to determine what version of this package type is installed. | [optional] 
**description** | **str** | The description of the package type | 
**icon** | **str** | Optional.  The icon to use for the PackageType, in base 64 | [optional] 
**inventory_frequency** | **int** | The number of minutes to wait before requesting another inventory.  The default value is 1440 (24 hours). | [optional] 
**inventory_package** | **str** | The inventory package used to determine what version of this package type is installed. | [optional] 
**localized_description** | **str** | Optional. The StringID used to localize the description of the PackageType | [optional] 
**localized_name** | **str** | Optional. The StringID used to localize the name of the PackageType | [optional] 
**max_delta_packages** | **int** | The maximum number of \&quot;chained\&quot; delta packages to use when updating the client | [optional] 
**package_type_id** | **str** | Read Only. The package type id. | [optional] 

## Example

```python
from openapi_client.models.update_system_models_package_type import UpdateSystemModelsPackageType

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSystemModelsPackageType from a JSON string
update_system_models_package_type_instance = UpdateSystemModelsPackageType.from_json(json)
# print the JSON string representation of the object
print(UpdateSystemModelsPackageType.to_json())

# convert the object into a dict
update_system_models_package_type_dict = update_system_models_package_type_instance.to_dict()
# create an instance of UpdateSystemModelsPackageType from a dict
update_system_models_package_type_from_dict = UpdateSystemModelsPackageType.from_dict(update_system_models_package_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


