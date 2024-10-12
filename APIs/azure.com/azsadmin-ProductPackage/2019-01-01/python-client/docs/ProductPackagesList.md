# ProductPackagesList

List of product packages.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Continuation Token. | [optional] 
**value** | [**List[ProductPackage]**](ProductPackage.md) | List of product packages. | [optional] 

## Example

```python
from openapi_client.models.product_packages_list import ProductPackagesList

# TODO update the JSON string below
json = "{}"
# create an instance of ProductPackagesList from a JSON string
product_packages_list_instance = ProductPackagesList.from_json(json)
# print the JSON string representation of the object
print(ProductPackagesList.to_json())

# convert the object into a dict
product_packages_list_dict = product_packages_list_instance.to_dict()
# create an instance of ProductPackagesList from a dict
product_packages_list_from_dict = ProductPackagesList.from_dict(product_packages_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


