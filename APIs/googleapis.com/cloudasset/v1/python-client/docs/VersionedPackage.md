# VersionedPackage

Information related to the a standard versioned package. This includes package info for APT, Yum, Zypper, and Googet package managers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**architecture** | **str** | The system architecture this package is intended for. | [optional] 
**package_name** | **str** | The name of the package. | [optional] 
**version** | **str** | The version of the package. | [optional] 

## Example

```python
from openapi_client.models.versioned_package import VersionedPackage

# TODO update the JSON string below
json = "{}"
# create an instance of VersionedPackage from a JSON string
versioned_package_instance = VersionedPackage.from_json(json)
# print the JSON string representation of the object
print(VersionedPackage.to_json())

# convert the object into a dict
versioned_package_dict = versioned_package_instance.to_dict()
# create an instance of VersionedPackage from a dict
versioned_package_from_dict = VersionedPackage.from_dict(versioned_package_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


