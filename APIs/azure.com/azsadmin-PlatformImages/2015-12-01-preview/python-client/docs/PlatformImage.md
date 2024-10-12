# PlatformImage

Platform image represents a virtual machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**PlatformImageProperties**](PlatformImageProperties.md) |  | [optional] 
**id** | **str** | ID of the resource. | [optional] [readonly] 
**location** | **str** | Location of the resource. | [optional] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**type** | **str** | Type of Resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.platform_image import PlatformImage

# TODO update the JSON string below
json = "{}"
# create an instance of PlatformImage from a JSON string
platform_image_instance = PlatformImage.from_json(json)
# print the JSON string representation of the object
print(PlatformImage.to_json())

# convert the object into a dict
platform_image_dict = platform_image_instance.to_dict()
# create an instance of PlatformImage from a dict
platform_image_from_dict = PlatformImage.from_dict(platform_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


