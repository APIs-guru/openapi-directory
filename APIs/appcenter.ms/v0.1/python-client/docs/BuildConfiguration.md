# BuildConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of build configuration (the same as a build type name) | 
**signing_config** | [**BuildsListToolsetProjects200ResponseAndroidAndroidModulesInnerBuildConfigurationsInnerSigningConfig**](BuildsListToolsetProjects200ResponseAndroidAndroidModulesInnerBuildConfigurationsInnerSigningConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.build_configuration import BuildConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of BuildConfiguration from a JSON string
build_configuration_instance = BuildConfiguration.from_json(json)
# print the JSON string representation of the object
print(BuildConfiguration.to_json())

# convert the object into a dict
build_configuration_dict = build_configuration_instance.to_dict()
# create an instance of BuildConfiguration from a dict
build_configuration_from_dict = BuildConfiguration.from_dict(build_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


