# Version

Version contains structured information about the version of the package. For a discussion of this in Debian/Ubuntu: http://serverfault.com/questions/604541/debian-packages-version-convention For a discussion of this in Redhat/Fedora/Centos: http://blog.jasonantman.com/2014/07/how-yum-and-rpm-compare-versions/

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**epoch** | **int** | Used to correct mistakes in the version numbering scheme. | [optional] 
**inclusive** | **bool** | Whether this version is vulnerable, when defining the version bounds. For example, if the minimum version is 2.0, inclusive&#x3D;true would say 2.0 is vulnerable, while inclusive&#x3D;false would say it&#39;s not | [optional] 
**kind** | **str** | Distinguish between sentinel MIN/MAX versions and normal versions. If kind is not NORMAL, then the other fields are ignored. | [optional] 
**name** | **str** | The main part of the version name. | [optional] 
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


