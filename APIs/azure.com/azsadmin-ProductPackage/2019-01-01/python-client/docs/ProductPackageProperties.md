# ProductPackageProperties

Properties for Product package.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_container_id** | **str** | File container resource identifier containing product manifest. | [optional] 
**is_deployable** | **bool** | Value indicating whether the package is applicable for deployment. | [optional] 
**is_updatable** | **bool** | Value indicating whether the package is applicable for update. | [optional] 
**product_deployment_id** | **str** | The identifier of product deployment; null if this version is not installed. | [optional] 
**provisioning_state** | **str** | Provisioning state of the resource. | [optional] 

## Example

```python
from openapi_client.models.product_package_properties import ProductPackageProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ProductPackageProperties from a JSON string
product_package_properties_instance = ProductPackageProperties.from_json(json)
# print the JSON string representation of the object
print(ProductPackageProperties.to_json())

# convert the object into a dict
product_package_properties_dict = product_package_properties_instance.to_dict()
# create an instance of ProductPackageProperties from a dict
product_package_properties_from_dict = ProductPackageProperties.from_dict(product_package_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


