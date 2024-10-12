# ControllersPackageSystemItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_evra** | **str** |  | [optional] 
**display_name** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**installed_evra** | **str** |  | [optional] 
**updatable** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.controllers_package_system_item import ControllersPackageSystemItem

# TODO update the JSON string below
json = "{}"
# create an instance of ControllersPackageSystemItem from a JSON string
controllers_package_system_item_instance = ControllersPackageSystemItem.from_json(json)
# print the JSON string representation of the object
print(ControllersPackageSystemItem.to_json())

# convert the object into a dict
controllers_package_system_item_dict = controllers_package_system_item_instance.to_dict()
# create an instance of ControllersPackageSystemItem from a dict
controllers_package_system_item_from_dict = ControllersPackageSystemItem.from_dict(controllers_package_system_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


