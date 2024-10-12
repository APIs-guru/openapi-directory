# UpdateSystemModelsPriorityPackage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autorun** | **bool** | Read Only. From the package specified by package ID.              Value is true if package should run automatically. Default value is false. | [optional] 
**crc** | **str** | Read Only. From the package specified by package ID. | [optional] 
**client_id** | **str** | The ID of the client to receive the priority package | 
**description** | **str** | Read Only. From the package specified by package ID. | [optional] 
**notes** | **str** | Read Only. From the package specified by package ID. | [optional] 
**package_id** | **str** | The ID of the package to push as a priority package. | 
**package_type_id** | **str** | Read Only. From the package specified by package ID. | [optional] 
**previous_version** | **int** | Read Only. From the package specified by package ID. | [optional] 
**priority_package_id** | **str** | Read Only. The ID of the priority package. | [optional] 
**release_date** | **datetime** | Read Only. From the package specified by package ID.              The date the package was released | [optional] 
**released** | **bool** | Read Only. From the package specified by package ID. | [optional] 
**remove_on_success** | **bool** | Read Only. From the package specified by package ID. | [optional] 
**size** | **int** | Read Only. From the package specified by package ID. | [optional] 
**switches** | **str** | The command line arguments for the priority package.  Default value is an empty string. | [optional] 
**time_stamp** | **datetime** | Read Only. The timestamp of the priority package. | [optional] 
**url** | **str** | Read Only. From the package specified by package ID. | [optional] 
**version** | **int** | Read Only. From the package specified by package ID. | [optional] 

## Example

```python
from openapi_client.models.update_system_models_priority_package import UpdateSystemModelsPriorityPackage

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSystemModelsPriorityPackage from a JSON string
update_system_models_priority_package_instance = UpdateSystemModelsPriorityPackage.from_json(json)
# print the JSON string representation of the object
print(UpdateSystemModelsPriorityPackage.to_json())

# convert the object into a dict
update_system_models_priority_package_dict = update_system_models_priority_package_instance.to_dict()
# create an instance of UpdateSystemModelsPriorityPackage from a dict
update_system_models_priority_package_from_dict = UpdateSystemModelsPriorityPackage.from_dict(update_system_models_priority_package_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


