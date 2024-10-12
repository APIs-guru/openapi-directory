# SinglePackageChange

Options to configure rule type SinglePackageChange. The rule is used to alter the sql code for a package entities. The rule filter field can refer to one entity. The rule scope can be: Package

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**package_body** | **str** | Optional. Sql code for package body | [optional] 
**package_description** | **str** | Optional. Sql code for package description | [optional] 

## Example

```python
from openapi_client.models.single_package_change import SinglePackageChange

# TODO update the JSON string below
json = "{}"
# create an instance of SinglePackageChange from a JSON string
single_package_change_instance = SinglePackageChange.from_json(json)
# print the JSON string representation of the object
print(SinglePackageChange.to_json())

# convert the object into a dict
single_package_change_dict = single_package_change_instance.to_dict()
# create an instance of SinglePackageChange from a dict
single_package_change_from_dict = SinglePackageChange.from_dict(single_package_change_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


