# Photo

A person's photo.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | The URL of the photo. | [optional] 

## Example

```python
from openapi_client.models.photo import Photo

# TODO update the JSON string below
json = "{}"
# create an instance of Photo from a JSON string
photo_instance = Photo.from_json(json)
# print the JSON string representation of the object
print(Photo.to_json())

# convert the object into a dict
photo_dict = photo_instance.to_dict()
# create an instance of Photo from a dict
photo_from_dict = Photo.from_dict(photo_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


