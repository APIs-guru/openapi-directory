# ControllersPackageItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**summary** | **str** |  | [optional] 
**systems_installed** | **int** |  | [optional] 
**systems_updatable** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.controllers_package_item import ControllersPackageItem

# TODO update the JSON string below
json = "{}"
# create an instance of ControllersPackageItem from a JSON string
controllers_package_item_instance = ControllersPackageItem.from_json(json)
# print the JSON string representation of the object
print(ControllersPackageItem.to_json())

# convert the object into a dict
controllers_package_item_dict = controllers_package_item_instance.to_dict()
# create an instance of ControllersPackageItem from a dict
controllers_package_item_from_dict = ControllersPackageItem.from_dict(controllers_package_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


