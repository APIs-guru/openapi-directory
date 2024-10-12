# PersonCoverCoverPhoto

The person's primary cover image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **int** | The height of the image. | [optional] 
**url** | **str** | The URL of the image. | [optional] 
**width** | **int** | The width of the image. | [optional] 

## Example

```python
from openapi_client.models.person_cover_cover_photo import PersonCoverCoverPhoto

# TODO update the JSON string below
json = "{}"
# create an instance of PersonCoverCoverPhoto from a JSON string
person_cover_cover_photo_instance = PersonCoverCoverPhoto.from_json(json)
# print the JSON string representation of the object
print(PersonCoverCoverPhoto.to_json())

# convert the object into a dict
person_cover_cover_photo_dict = person_cover_cover_photo_instance.to_dict()
# create an instance of PersonCoverCoverPhoto from a dict
person_cover_cover_photo_from_dict = PersonCoverCoverPhoto.from_dict(person_cover_cover_photo_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


