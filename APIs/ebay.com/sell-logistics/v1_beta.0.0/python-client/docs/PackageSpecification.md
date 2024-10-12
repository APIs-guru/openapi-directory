# PackageSpecification

This complex type specifies the dimensions and weight of a package.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimensions** | [**Dimensions**](Dimensions.md) |  | [optional] 
**weight** | [**Weight**](Weight.md) |  | [optional] 

## Example

```python
from openapi_client.models.package_specification import PackageSpecification

# TODO update the JSON string below
json = "{}"
# create an instance of PackageSpecification from a JSON string
package_specification_instance = PackageSpecification.from_json(json)
# print the JSON string representation of the object
print(PackageSpecification.to_json())

# convert the object into a dict
package_specification_dict = package_specification_instance.to_dict()
# create an instance of PackageSpecification from a dict
package_specification_from_dict = PackageSpecification.from_dict(package_specification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


