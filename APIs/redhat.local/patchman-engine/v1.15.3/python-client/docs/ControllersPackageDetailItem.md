# ControllersPackageDetailItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**ControllersPackageDetailAttributes**](ControllersPackageDetailAttributes.md) |  | [optional] 
**id** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.controllers_package_detail_item import ControllersPackageDetailItem

# TODO update the JSON string below
json = "{}"
# create an instance of ControllersPackageDetailItem from a JSON string
controllers_package_detail_item_instance = ControllersPackageDetailItem.from_json(json)
# print the JSON string representation of the object
print(ControllersPackageDetailItem.to_json())

# convert the object into a dict
controllers_package_detail_item_dict = controllers_package_detail_item_instance.to_dict()
# create an instance of ControllersPackageDetailItem from a dict
controllers_package_detail_item_from_dict = ControllersPackageDetailItem.from_dict(controllers_package_detail_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


