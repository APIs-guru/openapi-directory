# XcodeVersion

The Xcode version

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current** | **bool** | If the Xcode is latest stable | [optional] 
**name** | **str** | The version name | [optional] 

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


