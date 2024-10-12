# PackageRepository

A package repository.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apt** | [**AptRepository**](AptRepository.md) |  | [optional] 
**goo** | [**GooRepository**](GooRepository.md) |  | [optional] 
**yum** | [**YumRepository**](YumRepository.md) |  | [optional] 
**zypper** | [**ZypperRepository**](ZypperRepository.md) |  | [optional] 

## Example

```python
from openapi_client.models.package_repository import PackageRepository

# TODO update the JSON string below
json = "{}"
# create an instance of PackageRepository from a JSON string
package_repository_instance = PackageRepository.from_json(json)
# print the JSON string representation of the object
print(PackageRepository.to_json())

# convert the object into a dict
package_repository_dict = package_repository_instance.to_dict()
# create an instance of PackageRepository from a dict
package_repository_from_dict = PackageRepository.from_dict(package_repository_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


