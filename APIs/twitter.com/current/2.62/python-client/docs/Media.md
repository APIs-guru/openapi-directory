# Media


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **int** | The height of the media in pixels. | [optional] 
**media_key** | **str** | The Media Key identifier for this attachment. | [optional] 
**type** | **str** |  | 
**width** | **int** | The width of the media in pixels. | [optional] 

## Example

```python
from openapi_client.models.media import Media

# TODO update the JSON string below
json = "{}"
# create an instance of Media from a JSON string
media_instance = Media.from_json(json)
# print the JSON string representation of the object
print(Media.to_json())

# convert the object into a dict
media_dict = media_instance.to_dict()
# create an instance of Media from a dict
media_from_dict = Media.from_dict(media_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


