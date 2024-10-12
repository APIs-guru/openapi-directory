# VersionSpec

The version properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**component_versions** | **Dict[str, str]** | The component version property. | [optional] 
**display_name** | **str** | The display name | [optional] 
**friendly_name** | **str** | The friendly name | [optional] 
**is_default** | **str** | Whether or not the version is the default version. | [optional] 

## Example

```python
from openapi_client.models.version_spec import VersionSpec

# TODO update the JSON string below
json = "{}"
# create an instance of VersionSpec from a JSON string
version_spec_instance = VersionSpec.from_json(json)
# print the JSON string representation of the object
print(VersionSpec.to_json())

# convert the object into a dict
version_spec_dict = version_spec_instance.to_dict()
# create an instance of VersionSpec from a dict
version_spec_from_dict = VersionSpec.from_dict(version_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


