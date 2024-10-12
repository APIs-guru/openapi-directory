# LanguagePackageDependency

Indicates a language package available between this package and the customer's resource artifact.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**package** | **str** |  | [optional] 
**version** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.language_package_dependency import LanguagePackageDependency

# TODO update the JSON string below
json = "{}"
# create an instance of LanguagePackageDependency from a JSON string
language_package_dependency_instance = LanguagePackageDependency.from_json(json)
# print the JSON string representation of the object
print(LanguagePackageDependency.to_json())

# convert the object into a dict
language_package_dependency_dict = language_package_dependency_instance.to_dict()
# create an instance of LanguagePackageDependency from a dict
language_package_dependency_from_dict = LanguagePackageDependency.from_dict(language_package_dependency_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


