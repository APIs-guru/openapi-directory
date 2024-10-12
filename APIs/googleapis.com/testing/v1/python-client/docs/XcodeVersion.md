# XcodeVersion

An Xcode version that an iOS version is compatible with.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **List[str]** | Tags for this Xcode version. Example: \&quot;default\&quot;. | [optional] 
**version** | **str** | The id for this version. Example: \&quot;9.2\&quot;. | [optional] 

## Example

```python
from openapi_client.models.xcode_version import XcodeVersion

# TODO update the JSON string below
json = "{}"
# create an instance of XcodeVersion from a JSON string
xcode_version_instance = XcodeVersion.from_json(json)
# print the JSON string representation of the object
print(XcodeVersion.to_json())

# convert the object into a dict
xcode_version_dict = xcode_version_instance.to_dict()
# create an instance of XcodeVersion from a dict
xcode_version_from_dict = XcodeVersion.from_dict(xcode_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


