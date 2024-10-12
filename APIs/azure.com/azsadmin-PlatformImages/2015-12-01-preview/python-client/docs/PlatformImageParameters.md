# PlatformImageParameters

Parameters used to create a new platform image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**PlatformImageProperties**](PlatformImageProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.platform_image_parameters import PlatformImageParameters

# TODO update the JSON string below
json = "{}"
# create an instance of PlatformImageParameters from a JSON string
platform_image_parameters_instance = PlatformImageParameters.from_json(json)
# print the JSON string representation of the object
print(PlatformImageParameters.to_json())

# convert the object into a dict
platform_image_parameters_dict = platform_image_parameters_instance.to_dict()
# create an instance of PlatformImageParameters from a dict
platform_image_parameters_from_dict = PlatformImageParameters.from_dict(platform_image_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


