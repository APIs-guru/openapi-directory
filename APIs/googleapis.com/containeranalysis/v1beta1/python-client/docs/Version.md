# Version

Version contains structured information about the version of a package.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**epoch** | **int** | Used to correct mistakes in the version numbering scheme. | [optional] 
**inclusive** | **bool** | Whether this version is specifying part of an inclusive range. Grafeas does not have the capability to specify version ranges; instead we have fields that specify start version and end versions. At times this is insufficient - we also need to specify whether the version is included in the range or is excluded from the range. This boolean is expected to be set to true when the version is included in a range. | [optional] 
**kind** | **str** | Required. Distinguishes between sentinel MIN/MAX versions and normal versions. | [optional] 
**name** | **str** | Required only when version kind is NORMAL. The main part of the version name. | [optional] 
**revision** | **str** | The iteration of the package build from the above version. | [optional] 

## Example

```python
from openapi_client.models.version import Version

# TODO update the JSON string below
json = "{}"
# create an instance of Version from a JSON string
version_instance = Version.from_json(json)
# print the JSON string representation of the object
print(Version.to_json())

# convert the object into a dict
version_dict = version_instance.to_dict()
# create an instance of Version from a dict
version_from_dict = Version.from_dict(version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


