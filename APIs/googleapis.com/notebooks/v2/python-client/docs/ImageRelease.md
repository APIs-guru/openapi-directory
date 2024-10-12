# ImageRelease

ConfigImage represents an image release available to create a WbI

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_name** | **str** | Output only. The name of the image of the form workbench-instances-vYYYYmmdd-- | [optional] [readonly] 
**release_name** | **str** | Output only. The release of the image of the form m123 | [optional] [readonly] 

## Example

```python
from openapi_client.models.image_release import ImageRelease

# TODO update the JSON string below
json = "{}"
# create an instance of ImageRelease from a JSON string
image_release_instance = ImageRelease.from_json(json)
# print the JSON string representation of the object
print(ImageRelease.to_json())

# convert the object into a dict
image_release_dict = image_release_instance.to_dict()
# create an instance of ImageRelease from a dict
image_release_from_dict = ImageRelease.from_dict(image_release_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


