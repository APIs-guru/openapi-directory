# ControllersSystemPackageData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**evra** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**summary** | **str** |  | [optional] 
**updatable** | **bool** |  | [optional] 
**updates** | [**List[ModelsPackageUpdate]**](ModelsPackageUpdate.md) |  | [optional] 

## Example

```python
from openapi_client.models.controllers_system_package_data import ControllersSystemPackageData

# TODO update the JSON string below
json = "{}"
# create an instance of ControllersSystemPackageData from a JSON string
controllers_system_package_data_instance = ControllersSystemPackageData.from_json(json)
# print the JSON string representation of the object
print(ControllersSystemPackageData.to_json())

# convert the object into a dict
controllers_system_package_data_dict = controllers_system_package_data_instance.to_dict()
# create an instance of ControllersSystemPackageData from a dict
controllers_system_package_data_from_dict = ControllersSystemPackageData.from_dict(controllers_system_package_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


