# UpdateSystemModelsPackage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autorun** | **bool** | Value is true if package should run automatically. Default value is false. | [optional] 
**crc** | **str** | The CRC used to validate the download. | 
**description** | **str** | The package description | 
**localized_name** | **str** | Optional. The StringID used to localize the name of the Package | [optional] 
**notes** | **str** | Notes about the package | [optional] 
**package_id** | **str** | Read Only. The package ID | [optional] 
**package_type_id** | **str** | The id of the package type this package belongs to. | 
**previous_version** | **int** | For delta packages, the previous version required.  For non-delta packages, the Previous version is 0.  Default value is 0. | [optional] 
**release_date** | **datetime** | The date the package was released | 
**released** | **bool** | True if the package is released.  Default value is False. | [optional] 
**remove_on_success** | **bool** | True to remove the package after successful execution.  Default value is False. | [optional] 
**size** | **int** | The size of the file at the specified URL.  If a size is not supplied at creation time, the size will be determined by the response from the URL.              If the size provided does not match the size in the response from the URL an error will be returned. | [optional] 
**switches** | **str** | The command line arguments for the package.  Default value is an empty string. | [optional] 
**url** | **str** | The Url to download the package from. | 
**version** | **int** | The version. | 

## Example

```python
from openapi_client.models.update_system_models_package import UpdateSystemModelsPackage

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSystemModelsPackage from a JSON string
update_system_models_package_instance = UpdateSystemModelsPackage.from_json(json)
# print the JSON string representation of the object
print(UpdateSystemModelsPackage.to_json())

# convert the object into a dict
update_system_models_package_dict = update_system_models_package_instance.to_dict()
# create an instance of UpdateSystemModelsPackage from a dict
update_system_models_package_from_dict = UpdateSystemModelsPackage.from_dict(update_system_models_package_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


