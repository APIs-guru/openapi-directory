# PhotoId

Identifier for a Photo.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | A unique identifier for a photo. | [optional] 

## Example

```python
from openapi_client.models.photo_id import PhotoId

# TODO update the JSON string below
json = "{}"
# create an instance of PhotoId from a JSON string
photo_id_instance = PhotoId.from_json(json)
# print the JSON string representation of the object
print(PhotoId.to_json())

# convert the object into a dict
photo_id_dict = photo_id_instance.to_dict()
# create an instance of PhotoId from a dict
photo_id_from_dict = PhotoId.from_dict(photo_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


