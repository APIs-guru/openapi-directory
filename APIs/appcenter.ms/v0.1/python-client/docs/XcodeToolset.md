# XcodeToolset


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**xcode_scheme_containers** | [**List[BuildsListToolsetProjects200ResponseXcodeXcodeSchemeContainersInner]**](BuildsListToolsetProjects200ResponseXcodeXcodeSchemeContainersInner.md) | The Xcode scheme containers | 

## Example

```python
from openapi_client.models.xcode_toolset import XcodeToolset

# TODO update the JSON string below
json = "{}"
# create an instance of XcodeToolset from a JSON string
xcode_toolset_instance = XcodeToolset.from_json(json)
# print the JSON string representation of the object
print(XcodeToolset.to_json())

# convert the object into a dict
xcode_toolset_dict = xcode_toolset_instance.to_dict()
# create an instance of XcodeToolset from a dict
xcode_toolset_from_dict = XcodeToolset.from_dict(xcode_toolset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


