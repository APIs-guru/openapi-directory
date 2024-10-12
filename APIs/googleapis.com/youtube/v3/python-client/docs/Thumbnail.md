# Thumbnail

A thumbnail is an image representing a YouTube resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **int** | (Optional) Height of the thumbnail image. | [optional] 
**url** | **str** | The thumbnail image&#39;s URL. | [optional] 
**width** | **int** | (Optional) Width of the thumbnail image. | [optional] 

## Example

```python
from openapi_client.models.thumbnail import Thumbnail

# TODO update the JSON string below
json = "{}"
# create an instance of Thumbnail from a JSON string
thumbnail_instance = Thumbnail.from_json(json)
# print the JSON string representation of the object
print(Thumbnail.to_json())

# convert the object into a dict
thumbnail_dict = thumbnail_instance.to_dict()
# create an instance of Thumbnail from a dict
thumbnail_from_dict = Thumbnail.from_dict(thumbnail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


