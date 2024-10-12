# ControllersSystemPackageInline


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**evra** | **str** |  | [optional] 
**latest_evra** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**summary** | **str** |  | [optional] 
**updatable** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.controllers_system_package_inline import ControllersSystemPackageInline

# TODO update the JSON string below
json = "{}"
# create an instance of ControllersSystemPackageInline from a JSON string
controllers_system_package_inline_instance = ControllersSystemPackageInline.from_json(json)
# print the JSON string representation of the object
print(ControllersSystemPackageInline.to_json())

# convert the object into a dict
controllers_system_package_inline_dict = controllers_system_package_inline_instance.to_dict()
# create an instance of ControllersSystemPackageInline from a dict
controllers_system_package_inline_from_dict = ControllersSystemPackageInline.from_dict(controllers_system_package_inline_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


