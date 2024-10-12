# XcodeScheme


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archive_configuration** | **str** | Build configuration set in Archive action | [optional] 
**archive_project** | [**BuildsListToolsetProjects200ResponseXcodeXcodeSchemeContainersInnerSharedSchemesInnerArchiveProject**](BuildsListToolsetProjects200ResponseXcodeXcodeSchemeContainersInnerSharedSchemesInnerArchiveProject.md) |  | [optional] 
**has_test_action** | **bool** | Does scheme have a test action? | 
**name** | **str** | Scheme name | 

## Example

```python
from openapi_client.models.xcode_scheme import XcodeScheme

# TODO update the JSON string below
json = "{}"
# create an instance of XcodeScheme from a JSON string
xcode_scheme_instance = XcodeScheme.from_json(json)
# print the JSON string representation of the object
print(XcodeScheme.to_json())

# convert the object into a dict
xcode_scheme_dict = xcode_scheme_instance.to_dict()
# create an instance of XcodeScheme from a dict
xcode_scheme_from_dict = XcodeScheme.from_dict(xcode_scheme_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


