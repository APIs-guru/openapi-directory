# ProductPackage

Properties for a product package.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ProductPackageProperties**](ProductPackageProperties.md) |  | [optional] 
**id** | **str** | ID of the resource. | [optional] [readonly] 
**location** | **str** | Location of the resource. | [optional] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**type** | **str** | Type of Resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.product_package import ProductPackage

# TODO update the JSON string below
json = "{}"
# create an instance of ProductPackage from a JSON string
product_package_instance = ProductPackage.from_json(json)
# print the JSON string representation of the object
print(ProductPackage.to_json())

# convert the object into a dict
product_package_dict = product_package_instance.to_dict()
# create an instance of ProductPackage from a dict
product_package_from_dict = ProductPackage.from_dict(product_package_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


