# ControllersPackageDetailAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advisory_id** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**summary** | **str** |  | [optional] 
**version** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.controllers_package_detail_attributes import ControllersPackageDetailAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of ControllersPackageDetailAttributes from a JSON string
controllers_package_detail_attributes_instance = ControllersPackageDetailAttributes.from_json(json)
# print the JSON string representation of the object
print(ControllersPackageDetailAttributes.to_json())

# convert the object into a dict
controllers_package_detail_attributes_dict = controllers_package_detail_attributes_instance.to_dict()
# create an instance of ControllersPackageDetailAttributes from a dict
controllers_package_detail_attributes_from_dict = ControllersPackageDetailAttributes.from_dict(controllers_package_detail_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


