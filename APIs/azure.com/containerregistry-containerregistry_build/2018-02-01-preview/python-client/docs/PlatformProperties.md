# PlatformProperties

The platform properties against which the build has to happen.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpu** | **int** | The CPU configuration in terms of number of cores required for the build. | [optional] 
**os_type** | **str** | The operating system type required for the build. | 

## Example

```python
from openapi_client.models.platform_properties import PlatformProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PlatformProperties from a JSON string
platform_properties_instance = PlatformProperties.from_json(json)
# print the JSON string representation of the object
print(PlatformProperties.to_json())

# convert the object into a dict
platform_properties_dict = platform_properties_instance.to_dict()
# create an instance of PlatformProperties from a dict
platform_properties_from_dict = PlatformProperties.from_dict(platform_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


