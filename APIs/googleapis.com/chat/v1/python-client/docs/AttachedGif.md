# AttachedGif

A GIF image that's specified by a URL.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uri** | **str** | Output only. The URL that hosts the GIF image. | [optional] [readonly] 

## Example

```python
from openapi_client.models.attached_gif import AttachedGif

# TODO update the JSON string below
json = "{}"
# create an instance of AttachedGif from a JSON string
attached_gif_instance = AttachedGif.from_json(json)
# print the JSON string representation of the object
print(AttachedGif.to_json())

# convert the object into a dict
attached_gif_dict = attached_gif_instance.to_dict()
# create an instance of AttachedGif from a dict
attached_gif_from_dict = AttachedGif.from_dict(attached_gif_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


