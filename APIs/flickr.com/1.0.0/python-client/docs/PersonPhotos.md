# PersonPhotos


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | [**GetFavoritesContextByID200ResponseCount**](GetFavoritesContextByID200ResponseCount.md) |  | [optional] 
**firstdate** | [**GetFavoritesContextByID200ResponseCount**](GetFavoritesContextByID200ResponseCount.md) |  | [optional] 
**firstdatetaken** | [**GetFavoritesContextByID200ResponseCount**](GetFavoritesContextByID200ResponseCount.md) |  | [optional] 
**views** | [**GetFavoritesContextByID200ResponseCount**](GetFavoritesContextByID200ResponseCount.md) |  | [optional] 

## Example

```python
from openapi_client.models.person_photos import PersonPhotos

# TODO update the JSON string below
json = "{}"
# create an instance of PersonPhotos from a JSON string
person_photos_instance = PersonPhotos.from_json(json)
# print the JSON string representation of the object
print(PersonPhotos.to_json())

# convert the object into a dict
person_photos_dict = person_photos_instance.to_dict()
# create an instance of PersonPhotos from a dict
person_photos_from_dict = PersonPhotos.from_dict(person_photos_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


