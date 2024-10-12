# ImageUpdateTrigger

The image update trigger that caused a build.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the trigger. | [optional] 
**images** | [**List[ImageDescriptor]**](ImageDescriptor.md) | The list of image updates that caused the build. | [optional] 
**timestamp** | **datetime** | The timestamp when the image update happened. | [optional] 

## Example

```python
from openapi_client.models.image_update_trigger import ImageUpdateTrigger

# TODO update the JSON string below
json = "{}"
# create an instance of ImageUpdateTrigger from a JSON string
image_update_trigger_instance = ImageUpdateTrigger.from_json(json)
# print the JSON string representation of the object
print(ImageUpdateTrigger.to_json())

# convert the object into a dict
image_update_trigger_dict = image_update_trigger_instance.to_dict()
# create an instance of ImageUpdateTrigger from a dict
image_update_trigger_from_dict = ImageUpdateTrigger.from_dict(image_update_trigger_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


