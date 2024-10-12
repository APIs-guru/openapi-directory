# IosVersion

An iOS version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | An opaque id for this iOS version. Use this id to invoke the TestExecutionService. | [optional] 
**major_version** | **int** | An integer representing the major iOS version. Examples: \&quot;8\&quot;, \&quot;9\&quot;. | [optional] 
**minor_version** | **int** | An integer representing the minor iOS version. Examples: \&quot;1\&quot;, \&quot;2\&quot;. | [optional] 
**supported_xcode_version_ids** | **List[str]** | The available Xcode versions for this version. | [optional] 
**tags** | **List[str]** | Tags for this dimension. Examples: \&quot;default\&quot;, \&quot;preview\&quot;, \&quot;deprecated\&quot;. | [optional] 

## Example

```python
from openapi_client.models.ios_version import IosVersion

# TODO update the JSON string below
json = "{}"
# create an instance of IosVersion from a JSON string
ios_version_instance = IosVersion.from_json(json)
# print the JSON string representation of the object
print(IosVersion.to_json())

# convert the object into a dict
ios_version_dict = ios_version_instance.to_dict()
# create an instance of IosVersion from a dict
ios_version_from_dict = IosVersion.from_dict(ios_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


